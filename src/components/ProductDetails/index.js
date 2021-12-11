import React from 'react';
import NavigationTop from "../NavigationTop/index";
import Footer from "../Footer/Footer";
import ProductDetailsComponent from "./ProductDetailsComponent";
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