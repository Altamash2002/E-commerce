import React, { useState } from 'react';
import "./searchForm.css";

const SearchForm = () => {

  const [searchedItem,setSearchedItem] = useState('');

  const searchChangeHandler = (event) => {
    setSearchedItem(event.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchedItem('');
  }

  return (
    <form id='search' className='my-md-0 my-3' action='' method='' onSubmit={submitHandler}>
        <input type="text" value={searchedItem} placeholder='search here' onChange={searchChangeHandler} />
        <button type='submit'><i className="bi bi-search" /></button>
    </form>
  );
}

export default SearchForm;