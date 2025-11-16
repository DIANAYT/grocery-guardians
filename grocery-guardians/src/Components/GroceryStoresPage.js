import React, { useState } from 'react';
import Header from './Header';
import AboutSection from './About';
import HowToUseSection from './HowToUse';
import MapSection from './Map';
import ResultsList from './ResultList';

const GroceryStoresPage = () => {
  //const [selectedItem, setSelectedItem] = useState(null);
  //console.log(selectedItem)
  const [itemResults, setItemResults] = useState(null);
  const [itemSelected, selectItem] = useState(false);


  return (
    <main>
      <Header />
      <AboutSection />
      <HowToUseSection />
      <MapSection setItemResults={setItemResults} selectItem={selectItem} />
      {itemSelected && itemResults && <ResultsList itemResults={itemResults} />}
    </main>
  );
};

export default GroceryStoresPage;

