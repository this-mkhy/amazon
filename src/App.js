import React, {useState} from 'react';

import Header from "./components/header/Header";
import HomeView from "./components/home/HomeView";
import Footer from "./components/footer/Footer";

import './App.css';
import data from './data.json'

function App() {
  const [products, setProducts] = useState(data)

  return (
    <div className="App">
      <Header />
      <HomeView products={products}/>
      <Footer />
    </div>
  );
}

export default App;
