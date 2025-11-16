import functions from "firebase-functions";
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors({origin: true}));

const CLIENT_ID =
  "grocery-guardians-328febd84f675e6d1996fe74fc5cf3803714668751714852446";
const CLIENT_SECRET = "SPJiL2CW0L2Haet6aJmxJ45bvBabYXdIuadbNPht";

app.get("/getLocations", async (req, res) => {
  try {
    const tokenResponse = await fetch(
        "https://api.kroger.com/v1/connect/oauth2/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " +
            Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            scope: "product.compact",
          }),
        },
    );

    if (!tokenResponse.ok) {
      throw new Error(
          `Failed to fetch token: 
          ${tokenResponse.status} ${tokenResponse.statusText}`,
      );
    }

    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;
    const zipcode = req.query.zipcode || "98101";
    const radius = req.query.radius || "10";

    const locationResponse = await fetch(
        `https://api.kroger.com/v1/locations?filter.zipCode.near=${zipcode}&filter.radiusInMiles=${radius}&filter.limit=10`,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
    );

    if (!locationResponse.ok) {
      throw new Error(`Failed to fetch locations:
        ${locationResponse.status} ${locationResponse.statusText}`);
    }

    const locationData = await locationResponse.json();

    if (!req.query.product) {
      res.json({data: locationData.data});
      return;
    }

    const stores = locationData.data.map((store) => store.locationId);

    const productRequests = stores.map(async (storeId) => {
      const productUrl = `https://api.kroger.com/v1/products?filter.locationId=${storeId}&filter.term=${encodeURI(req.query.product)}`;

      const response = await fetch(productUrl, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error(`Failed to fetch products for store ${storeId}:
            ${response.status} ${response.statusText}`);
        return response.text();
      }
      return await response.json();
    });

    const productResponses = await Promise.all(productRequests);

    const combinedProducts =
      productResponses.reduce((acc, productData, index) => {
        if (productData && productData.data) {
          acc[index] = {data: productData.data, storeId: stores[index]};
        } else {
          console.log(`No product data for store ${stores[index]}`);
        }
        return acc;
      }, {});

    res.json({data: locationData.data, products: combinedProducts});
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(error.toString());
  }
});

export const api = functions.https.onRequest(app);
