import Header from "./components/header/Header";
import Home1 from "./components/home/Home1";
import Home2 from "./components/home/Home2";
import Footer from "./components/footer/Footer";
import HomeImage from "./components/home/HomeImage";
import Scrollbar from "./components/home/Scollbar";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <HomeImage />
      <Home1 />
      <Scrollbar />
      <Home2 />
      <Scrollbar />




      <Footer />

    </div>
  );
}

export default App;
