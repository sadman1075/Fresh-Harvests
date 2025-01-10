import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';
import Blogs from '../Blogs/Blogs';
import TestiMonial from '../TestiMonial/TestiMonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Products></Products>
           <About></About>
           <Offer></Offer>
           <TestiMonial></TestiMonial>
           <Blogs></Blogs>
        </div>
    );
};

export default Home;