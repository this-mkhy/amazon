import React from 'react'

import Product from "./Product";
import "./home.css"; 

function Home1() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <Product
            id="1"
            title="Laptops | Up to 10% off"
            price={1199.99}
            rating={4}
            image="https://i5.walmartimages.com/asr/9a1753f5-103a-4601-a41d-0fb6dca615be.8b951e44a5583012faae538e547c23f0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
          />
          <Product
            id="2"
            title="Kitchen appliances"
            price={500.0}
            rating={3}
            image="https://graphicriver.img.customer.envatousercontent.com/files/271849073/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=01c60848e12d3fac5e7c9d316d640ce6"
          />
          <Product
            id="3"
            title="Your favorite makeup"
            price={199.99}
            rating={2}
            image="https://cdn2.momjunction.com/wp-content/uploads/2021/03/Best-Makeup-Brands-In-India-In-910x1024.jpg"
          />
          <Product
            id="4"
            title="Kids & Baby one-stop shop"
            price={50.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2u8S6herI6ryN5VGUSLur3XhU5nXaKU999U3Zuz1eWBHQwh6Uu1AHhBFHob2jznj060&usqp=CAU"
          />
        </div>

        <div className="row">
          <Product
            id="5"
            title="Sports & Fitness"
            price={700.99}
            rating={5}
            image="https://image.made-in-china.com/2f0j00VehRkHvlZPqB/Barbell-Yoga-Mat-Fitness-Equipment-Strength-Sports-Exercise-Dumbbell-Gym-Equipment-Accessories.jpg"
          />
          <Product
            id="6"
            title="Men's Clothing"
            price={200.99}
            rating={3}
            image="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4de49fb9e6b146149ddbaca000cb9ff9_9366/adidas-designed-2-move-3-stripes-primeblue-shorts.jpg"
          />
          <Product
            id="7"
            title="Women's Clothing "
            price={250.99}
            rating={3}
            image="https://images.contentstack.io/v3/assets/blta13d3f2430daf2db/blt86d0c3ac3650e3ec/627123e05d936230ca8eaf46/DSK_Promo_Fluid_4Offer_Alt4_Carousel_1080X1080_A_Category3.jpg?format=pjpg&auto=webp&quality=60&fit=bounds"
          />
          <Product
            id="8"
            title="Amazon Prime Video"
            price={ 139.00}
            rating={5}
            image="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/ios_users_can_now_share_30-sec_video_clips_from_amazon_prime_video_on_social_media_0.jpg?itok=MOzKrzHO"
          />
        </div>
      </div> 
    </div>
  )
}
export default Home1