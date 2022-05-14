import React from 'react'
import Product from "./Product";
import "./home.css"; 
  
function Home2() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
            <Product
                id="9"
                title="New arrivals | Eyewear"
                price={200.99}
                rating={4}
                image="https://i.pinimg.com/originals/d0/f7/8f/d0f78ff4ae4a81ac886c594f8f8e6797.jpg"
            />
            <Product
                id="10"
                title="best audio headphones"
                price={300.99}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-5aq19y50n5zmEybSGSRwSluQnIXqcNemm_0M36Cu8ZgHOkpF3VrJN7OJ0jATuh9ybk&usqp=CAU"
            />
            <Product
                id="11"
                title="Toys & Games"
                price={50.99}
                rating={4}
                image="https://media.istockphoto.com/photos/baby-kid-toys-collection-on-blue-and-yellow-background-picture-id1182187147?b=1&k=20&m=1182187147&s=170667a&w=0&h=JsGtp6FqZC6COltbP6iiW82Bg3CZEx2ChYCxS3DmN98="
            />
          <Product
            id="12"
            title="Fashion Handbags for Women 2022"
            price={150.96}
            rating={5}
            image="https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjF5U2dnWlVQOVMuX0FDX1VMMTUwMF8uanBn.jpg"
          />
        </div>
      </div> 
    </div>
  )
}
export default Home2