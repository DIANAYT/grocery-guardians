import React from 'react';

const ResultsList = ({ itemResults }) => {
  let filteredResults = itemResults.filter(item => item.storeName !== null);
  filteredResults = filteredResults.sort((a, b) => (a.promo > 0 ? a.promo : a.price) -(b.promo > 0 ? b.promo : b.price));
  return (
    <section id="Results-List">
      <h2>Selected Item</h2>
      <div className="results-container">
        {filteredResults.map((item, index) => (
          <div className="results-item-container" key={index}>
            <div className="results-image">
              <img src={item.imageUrl || 'default-image.png'} alt={item.description} />
            </div>
            <div className="results-item-info">
              <h3>{item.description}</h3>
              <p>Price: ${item.price !== undefined ? item.price.toFixed(2) : 'Not Available'}</p>
              <p>Promo: {item.promo === 0 ? 'None' : '$' + item.promo}</p>
              <p>Location: {item.storeName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsList;
