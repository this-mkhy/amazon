import React from 'react'
import BottomList from './BottomList';
import Copyrights from './Copyrights';

import "./footer.css";

function BottomFooter() {
    const details = [
        {id: 1, listTitle: "Sell on Amazon.ae", descriptions: ["Sell globally, start with UAE"]},
        {id: 2, listTitle: "IMDb", descriptions: ["Movies, TV", "& Celebrities"]},
        {id: 3, listTitle: "Sell on Amazon.ae", descriptions: ["Sell globally, start with Saudi Arabia"]},
        {id: 4, listTitle: "Alexa", descriptions: ["Actionable Analytics", "for the Web"]},
        {id: 5, listTitle: "Amazon Web Services", descriptions: ["Scalable Cloud", "Computing Services"]},
        {id: 6, listTitle: "Book Depository", descriptions: ["Books With Free", "Delivery Worldwide"]},
        {id: 7, listTitle: "Goodreads", descriptions: ["Book reviews", "& recommendations"]},
        {id: 8, listTitle: "Shopbop", descriptions: ["Designer", "Fashion Brands"]},
        {id: 9, listTitle: "Audible", descriptions: ["Download", "Audio Books"]},
    ]

  return (  
        <div class="container services">
            <div class="center">
                <ul>
                    <BottomList listData={details[0]}/>
                    <BottomList listData={details[1]}/>
                </ul>
                <ul>
                    <BottomList listData={details[2]}/>
                    <BottomList listData={details[3]}/>
                </ul>
                <ul>
                    <BottomList listData={details[4]}/>
                    <BottomList listData={details[5]}/>
                </ul>
                <ul>
                    <BottomList listData={details[6]}/>
                    <BottomList listData={details[7]}/>
                </ul>      
                <ul>
                    <BottomList listData={details[8]}/>
                </ul>   
                <Copyrights />
            </div>
        </div> 
  )
}
export default BottomFooter