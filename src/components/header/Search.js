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
            <img className="egyFlag" src={Egy} alt="Egypt flag"/>
            <ArrowDropDownIcon style={{color: "#ffffff", marginLeft:"-17"}}/>
        </div>

  )
}
export default Search