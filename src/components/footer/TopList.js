import React from 'react'

import "./footer.css";

function TopList({listData}) {
    // console.log(listData)
    // console.log(listData.id)
    //console.log(listData.listTitle)
    //console.log(listData.services)
  return (
    <>
        <div className="list">
          <h3>{listData.listTitle}</h3>
          {listData.services.map(one => <p key={one.id}>{one}</p>)}
        </div> 
    </> 
  )
}
export default TopList