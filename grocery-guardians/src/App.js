import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import HomePage from './Components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GroceryStoresPage from './Components/GroceryStoresPage';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grocery-stores" element={<GroceryStoresPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
