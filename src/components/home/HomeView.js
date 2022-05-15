import React from 'react';

import MainProducts from "./MainProducts";
import ArrivalsProducts from "./ArrivalsProducts";
import HomeImage from "./HomeImage";
import Scrollbar from "./Scollbar";
import ScrollbarBottom from "./ScrollbarBottom";

function HomeView(props) {
  // console.log(props.products)

  return (
    <div className="HomeView">
      <HomeImage />
      <MainProducts />
      <Scrollbar/>
      <ArrivalsProducts />
      <ScrollbarBottom products={props.products}/>
      <ArrivalsProducts />
      <Scrollbar />
    </div>
  );
}

export default HomeView;
