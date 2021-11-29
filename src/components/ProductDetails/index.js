import React from 'react';
import NavigationTop from "../NavigationTop/index";
import Footer from "../Footer/Footer";
import ProductDetailsComponent from "./ProductDetailsComponent";
import CarouselShop from "../Carousel/CarouselShop";
const ProductDetails = () => {
    return (
        <>
            <NavigationTop/>
            <ProductDetailsComponent/>
            <Footer/>
        </>

    );
}

export default ProductDetails;