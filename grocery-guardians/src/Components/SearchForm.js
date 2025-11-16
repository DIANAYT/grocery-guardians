import React from 'react';

const SearchForm = () => {
  return (
    <form className="row g-3">
      <div className="col-12">
        <input type="text" className="form-control" id="search" placeholder="Search for grocery item..." />
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" id="location" placeholder="Enter 5 digit U.S. Zip Code" />
      </div>
      <div className="col-md-4">
        <select id="radius-of" className="form-select">
          <option selected>Search Radius...</option>
          <option value="5-Miles">5 Miles</option>
          <option value="10-Miles">10 Miles</option>
          <option value="15-Miles">15 Miles</option>
          <option value="20-Miles">20 Miles</option>
        </select>
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-lg btn-outline-success submit-button">SUBMIT</button>
      </div>
    </form>
  );
};

export default SearchForm;
