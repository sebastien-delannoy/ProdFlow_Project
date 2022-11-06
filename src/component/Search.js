import React from 'react';
import AddSite from "./AddSite";
  
const Search = () => {
  return (
    <div className='Search'>
      <h2>You are inside the Search Component</h2>
      <h4>URL: localhost:3000/courses/search</h4>
      <AddSite />
    </div>
  )
}
  
export default Search