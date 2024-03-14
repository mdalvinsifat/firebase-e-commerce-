import React, { useContext } from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Cateogroy from '../../Components/Category/Cateogroy';
import HomePageProductCard from '../../Components/HomePageProductCard/HomePageProductCard';
import Track from '../../Components/Track/Track';
import Testimonial from '../../Components/Testimonial/Testimonial';
import LayOut from '../../Components/LayOut/LayOut';
import myContaxt from "../../Context/myContext";
const Homepage = () => {

    return (
        <LayOut>
            <HeroSection/>
            <Cateogroy/>
            <HomePageProductCard/>
            <Track/>
            <Testimonial/>
         
        </LayOut>
    );
};

export default Homepage;