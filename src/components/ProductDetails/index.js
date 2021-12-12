import React, {useEffect, useState} from 'react';
import NavigationTop from "../NavigationTop/index";
import Footer from "../Footer/Footer";
import ProductDetailsComponent from "./ProductDetailsComponent";
import {useDispatch} from "react-redux";
const ProductDetails = (id) => {


    return (
        <>
            <NavigationTop/>
            <ProductDetailsComponent item={id}/>
            <Footer/>
        </>

    );
}

export default ProductDetails;