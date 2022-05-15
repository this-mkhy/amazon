import React from 'react'

import { Link } from "react-router-dom";
import TopList from './TopList';

import "./footer.css";

function TopFooter() {
    const details = [
        {id: 1, listTitle: "Get to Know US", services: ["About Amazon", "Careers", "Amazon Science"]},
        {id: 2, listTitle: "Shop with Us", services: ["Your Account", "Your Orders", "Your Addresses", "Your Lists"]},
        {id: 3, listTitle: "Make Money with Us", services: ["Sell on Amazon", "Fulfilment by Amazon"]},
        {id: 4, listTitle: "Let Us Help You", services: ["Help", "Shipping & Delivery", "Returns & Replacements", "Amazon App Download"]}
    ]

  return (
    <>
      <div class="top text-center">
        <Link to="/#top">Back to top</Link>
      </div>

      <div className="container">
        <TopList listData={details[0]}/>
        <TopList listData={details[1]}/>
        <TopList listData={details[2]}/>
        <TopList listData={details[3]}/>
      </div>
    </> 
  )
}
export default TopFooter