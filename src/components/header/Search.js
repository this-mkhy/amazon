import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Egy from '../../images/egypt.svg';
import "./Header.css";
 
function Search() {
  return (
        <div className="search">
            <input className="searchInput" type="text" />
            <SearchIcon className="searchIcon" />
            <img src={Egy} alt="Egypt flag" style={{height: "20px", width: "20px", margin: "12px"}}/>
            <ArrowDropDownIcon style={{color: "#ffffff", marginLeft:"-17"}}/>
        </div>

  )
}
export default Search