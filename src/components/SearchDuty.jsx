import React from 'react';
import { useGlobalContext } from '../context/context';

const SearchDuty = () => {
  
  const { setQuery, setIsComp, isComp } = useGlobalContext();
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleCheckChange = (e) => {
    setIsComp(!isComp);
  }
  
  return (
    <>
      <input type="text" name="text" id='search-box' placeholder="Search Duty..." onChange = {handleChange} />
      <p style={{textAlign: "center"}}>
        <input type="checkbox" name="text1" onChange={handleCheckChange} checked={isComp}/> <span onClick={handleCheckChange} style={{cursor: "pointer"}}>Hide Completed</span>
      </p>
    </>
  );
};

export default SearchDuty;