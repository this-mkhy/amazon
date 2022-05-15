import React from 'react'
import { Link } from "react-router-dom";

function BottomList({listData}) {
    // console.log(listData)
    // console.log(listData.id)
    //console.log(listData.listTitle)
    //console.log(listData.desc)
  return (
    <>  
        <li>
            <Link to="/#service" >
                {listData.listTitle}
                {listData.descriptions.map(desc => <span key={desc.id}><br/>{desc}</span>)}
            </Link>
        </li>
    </> 
  )
}
export default BottomList