import React from 'react';

const HowToUseSection = () => {
  return (
    <section id="How-to-Use">
      <div className="how-to-use-container">
        <div className="how-to-use">
          <h2>How to Use</h2>
          <ul>
            <li>
              <span className="bold-term">Item:</span> Enter the item name (general terms like milk, apples, flour etc.
              are okay)
            </li>
            <li>
              <span className="bold-term">Location:</span> Type in a 5-digit U.S. Zip Code
            </li>
            <li>
              <span className="bold-term">Search Radius:</span> Use the dropdown list to choose the number of miles
              within which you want to search for grocery stores
            </li>
            <li>
              <span className="bold-term">Filter Results:</span> Review the list of items that match your search term
              and can be found at local grocery stores
            </li>
            <li>
              <span className="bold-term">Select Items</span> Choose one item from the provided list
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
