import React from 'react'
import { Link } from "react-router-dom";

import "./footer.css";

function Footer() {
  return (
    <footer>
      <div class="top text-center">
        <Link to="/#top">Back to top</Link>
      </div>

      <div className="container">
        <div className="list">
          <h3>Get to Know US</h3>
          <p>About Amazon</p>
          <p>Careers</p> 
          <p>Amazon Science</p>
        </div>
        <div className="list">
          <h3>Shop with Us</h3>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Your Addresses</p>
          <p>Your Lists</p>
        </div>
        <div className="list">
          <h3>Make Money with Us</h3>
          <p>Sell on Amazon</p>
          <p>Fulfilment by Amazon</p>
        </div>
        <div className="list">
          <h3>Let Us Help You</h3>
          <p>Help</p>
          <p>Shipping & Delivery</p>
          <p>Returns & Replacements</p>
          <p>Amazon App Download</p>
        </div>
      </div>

      <div class="container services">
        <div class="center">
          <ul>
            <li><a href="#">Sell on Amazon.ae<br/> <span>Sell globally, start with UAE</span></a></li>
            <li><a href="#">IMDb<br/><span>Movies, TV<br/> &amp; Celebrities</span></a></li>
          </ul>
          <ul>
            <li><a href="#">Sell on Amazon.ae<br/><span>Sell globally, start with Saudi Arabia</span></a></li>
            <li><a href="#">Alexa<br/><span>Actionable Analytics<br/> for the Web</span></a></li>
          </ul>
          <ul>
            <li><a href="#">Amazon Web Services<br/><span>Scalable Cloud<br/> Computing Services</span></a></li>
            <li><a href="#">Book Depository<br/><span>Books With Free<br/> Delivery Worldwide</span></a></li>
          </ul>
          <ul>
            <li><a href="#">Goodreads<br/><span>Book reviews<br/> &amp; recommendations</span></a></li>
            <li><a href="#">Shopbop<br/><span>Designer<br/> Fashion Brands</span></a></li>
          </ul>
          <ul>
            <li><a href="#">Audible<br/><span>Download<br/> Audio Books</span></a></li>
          </ul>
          <div className="copyrights">
            <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-2022, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </footer> 
  )
}
export default Footer