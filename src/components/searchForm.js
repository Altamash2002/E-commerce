import React from 'react';
import "./searchForm.css";

const SearchForm = () => {
  return (
    <form id='search' className='my-md-0 my-3' action='' method=''>
        <input type="text" placeholder='search here' />
        <button type='submit'><i className="bi bi-search" /></button>
    </form>
  );
}

export default SearchForm;