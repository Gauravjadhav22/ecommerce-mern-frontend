import React from "react";
import Navbar from "../Components/Navbar"
import Updates from "../Components/Updates"
import Slider from "../Components/Slider"
import  Categories  from "../Components/Categories";
import  NewsLetter  from "../Components/NewsLetter";
import Products from "../Components/Products"
import Footer from "../Components/Footer"
const Home = ()=>{
    return(
        <div>
            
        <Updates />
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
        </div>
    )
}

export default  Home;