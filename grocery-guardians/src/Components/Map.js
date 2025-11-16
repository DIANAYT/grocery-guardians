import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Alert } from "react-bootstrap";

const MapSection = ({ setItemResults, selectItem }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [radius, setRadius] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [items, setItems] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);
  const [markerStatus, toggleMarkers] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [item, setItem] = useState('');
  const [searchCompleted, toggleSearchCompleted] = useState(false);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [center, setCenter] = useState({
    lat: 47.6061,
    lng: -122.3328
  });

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const responseUrl = initialLoad
          ? `https://us-central1-grocery-guardians-442.cloudfunctions.net/api/getLocations`
          : `https://us-central1-grocery-guardians-442.cloudfunctions.net/api/getLocations?product=${searchQuery}&zipcode=${zipCode}&radius=${radius}`;

        const response = await fetch(responseUrl, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const responseText = await response.text();

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText} - ${responseText}`);
        }

        const data = JSON.parse(responseText);

        if (data.products) {
          const fetchedLocations = data.data || [];
          setLocations(fetchedLocations)
          const destructured = Object.entries(data.products).flatMap(([key, value]) =>
            value.data.map(item => {
              const itemDetails = item.items[0];
              const store = fetchedLocations.find(location => location.locationId === value.storeId);
              return {
                ...item,
                storeId: value.storeId,
                chainName: store ? store.chain : 'Unknown',
                price: itemDetails.price.regular,
                promo: itemDetails.price.promo,
                imageUrl: getImageUrl(item),
                storeName: store ? store.name : null,
                storeLatitude: store ? store.geolocation.latitude : null,
                storeLongitude: store ? store.geolocation.longitude : null
              };
            })
          );
          setItems(destructured);
        } else {
          setItems([]);
        }
        setLocations(data.data || []);
        setInitialLoad(false);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    if (formSubmitted) {
      fetchData();
      toggleMarkers(false);
      setFormSubmitted(false);
    }
    if (initialLoad) {
      fetchData();
    }
  }, [formSubmitted, initialLoad]);

  const containerStyle = {
    width: '100%',
    height: '500px'
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (/^[0-9]{5}$/.test(zipCode) && searchQuery) {
      selectItem(false);
      setFormSubmitted(true);
      toggleSearchCompleted(false);
      setItems([]);
      setItem('');
      setSearchAttempted(true);
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`
        );
        const data = await response.json();
        console.log(data);
        if (data.status === "OK") {
          const location = data.results[0].geometry.location;
          setCenter({
            lat: location.lat,
            lng: location.lng,
          });
        } else {
          alert(
            "Failed to retrieve location information for the entered zip code."
          );
        }
      } catch (error) {
        alert("An error occurred while retrieving location information.");
      }
    } else if (searchQuery) {
      alert('Please enter a valid 5 digit zip code or use the current location.');
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    // console.log(event.target.value)
  };

  const handleLocationChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`);
          const data = await response.json();

          if (!data.status.ok) {
            const addressComponents = data.results[0].address_components;
            const postalCode = addressComponents.find(component => component.types.includes('postal_code'));
            const currentZipCode = postalCode.long_name;
            setZipCode(currentZipCode);
          } else {
            alert('Failed to retrieve location information.');
          }
        } catch (error) {
          alert('An error occurred while retrieving location information.');
        }
      }, () => {
        alert('Failed to get current location.');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleRadioChange = (item) => {
    selectItem(true);
    toggleSearchCompleted(true);
    setSelectedProductId(item.productId);
    setItem(item);

    const filtered = locations.filter(location =>
      items.some(product =>
        product.productId === item.productId && product.storeId === location.locationId
      )
    );
    setFilteredLocations(filtered);
    toggleMarkers(true);
    const filteredItemResults = items.filter(product => product.productId === item.productId);
    setItemResults(filteredItemResults);
  };
  //   setFilteredLocations(filtered);
  //   toggleMarkers(true);
  //   const filteredItemResults = items.filter(product => product.productId === item.productId)
  //   setItemResults(filteredItemResults)
  // };

  let uniqueItems = items.map(item => item.productId);
  uniqueItems = new Set(uniqueItems);
  uniqueItems = Array.from(uniqueItems);
  uniqueItems = uniqueItems.map(productId => items.find(item => item.productId === productId));

  const getImageUrl = (item) => {
    const image = item.images?.find(image => image.perspective === 'front');
    return image?.sizes?.find(size => size.size === 'large')?.url || 'default-image.png';
  };

  return (
    <section id="Map">
      <div className="search-form-container">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor='search'>Grocery Item</label>
            <input type="text" className="form-control" id="search" placeholder="Search for grocery item..." required onChange={handleSearchChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor='location'>Location</label>
            <input type="text" className="form-control" id="location" placeholder="Enter 5 digit U.S. Zip Code" required value={zipCode} onChange={handleLocationChange} />
          </div>
          <div>
            <button className="btn btn-outline-primary" type="button" onClick={handleCurrentLocation}>Use Current Location</button>
          </div>
          <div className="col-md-4">
            <label htmlFor='radius-of'>Search Radius</label>
            <select id="radius-of" className="form-select" required onChange={handleRadiusChange}>
              <option value="5">5 Miles</option>
              <option value="10" selected>10 Miles</option>
              <option value="15">15 Miles</option>
              <option value="20">20 Miles</option>
            </select>
          </div>
          <div className="col-md-2">
            <input className="btn btn-outline-success" type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
      {!isLoading && (
        <div className="search-form-results-container">
          <div className="search-form-results">
            {uniqueItems.length > 0 ? (
              <div>
                <p>Please select from the following items available:</p>
                <div className="grid-container">
                  {uniqueItems.map((item, index) => (
                    <div className="form-check form-check-inline" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        id={`item-${index}`}
                        name="productSelection"
                        value={item.productId}
                        checked={selectedProductId === item.productId}
                        onChange={() => handleRadioChange(item)}
                      />
                      <label className="form-check-label" htmlFor={`item-${index}`}>
                        {item.description}
                        {getImageUrl(item) && <img className="results-image" src={getImageUrl(item)} alt={item.description} />}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ) : ((searchAttempted &&
                <div>
                  <p>No items found.</p>
                  <Alert variant="danger" dismissible>Looks like we can't find that item, try again with a new query or valid zipcode!</Alert>
                </div>
            ))}
          </div>
        </div>
      )}
      <div className="map">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            {searchCompleted ? (markerStatus && filteredLocations.map((location) => (
              <Marker
                key={location.locationId}
                position={{
                  lat: location.geolocation.latitude,
                  lng: location.geolocation.longitude
                }}
                onClick={() => setSelectedLocation(location)}
                title={location.name}
              />
            ))) : (markerStatus && locations.map((location) => (
              <Marker
                key={location.locationId}
                position={{
                  lat: location.geolocation.latitude,
                  lng: location.geolocation.longitude
                }}
                onClick={() => setSelectedLocation(location)}
                title={location.name}
              />
            )))}

            {searchCompleted ? (selectedLocation && (
              <InfoWindow
                position={{
                  lat: selectedLocation.geolocation.latitude,
                  lng: selectedLocation.geolocation.longitude
                }}
                onCloseClick={() => setSelectedLocation(null)}
              >
                <div>
                  <h2 className="map-popup-title">{selectedLocation.name}</h2>
                  <p>{selectedLocation.address.addressLine1} {selectedLocation.address.city}, {selectedLocation.address.state} {selectedLocation.address.zipCode}</p>
                  <p>Item Name: {item.description}</p>
                  <p>Price: ${item.price}</p>
                  <p>Promotion: {item.promo === 0 ? 'None' : '$' + item.promo}</p>
                </div>
              </InfoWindow>
            )) : (selectedLocation && (
              <InfoWindow
                position={{
                  lat: selectedLocation.geolocation.latitude,
                  lng: selectedLocation.geolocation.longitude
                }}
                onCloseClick={() => setSelectedLocation(null)}
              >
                <div>
                  <h2 className="map-popup-title">{selectedLocation.name}</h2>
                  <p>{selectedLocation.address.addressLine1} {selectedLocation.address.city}, {selectedLocation.address.state} {selectedLocation.address.zipCode}</p>
                </div>
              </InfoWindow>))}
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default MapSection;
