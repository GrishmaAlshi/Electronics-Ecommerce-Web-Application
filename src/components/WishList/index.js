import React from 'react';
import NavigationTop from "../NavigationTop/index";

import Footer from "../Footer/Footer";
import Wish from "./Wish";
const WishList = () => {
    return (
        <>
            <NavigationTop/>
            <br/>
            <Wish/>
            <br/>
            <Footer/>
        </>

    );
}

export default WishList;