import React from 'react'

import LocationOnIcon from '@mui/icons-material/LocationOn';

import "./Header.css";
 
function Location() {
  return (
        <div className="county">
            <div className="location">
                <LocationOnIcon />
            </div>
            <div className="deliver">
                <span className="desc1">Deliver to </span> <br />
                <span className="desc2">Egypt</span>
            </div>
        </div>
  )
}
export default Location