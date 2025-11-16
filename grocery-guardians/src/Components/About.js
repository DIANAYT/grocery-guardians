import React from 'react';

const AboutSection = () => {
  return (
    <section id="About">
      <div className="about-container">
        <div className="about">
          <h2>About</h2>
          <p>
            The map feature is an intuitive tool designed to enhance your grocery shopping experience by helping you
            find the best deals and the nearest grocery stores. This map was created using the public{' '}
            <a href="https://developer.kroger.com/reference">Kroger APIs</a> and the{' '}
            <a href="https://developers.google.com/maps">Google Maps API</a> to visualize the
            grocery item price information geographically for Kroger owned grocery stores, such as Quality Food Center
            (QFC) and Fred Meyer. Each grocery store is displayed with a marker on the map. Clicking on map marker
            provides additional grocery store details and/or item price.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
