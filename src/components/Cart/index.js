import React from 'react';
import NavigationTop from "../NavigationTop/index";
import Footer from "../Footer/Footer";
import CartComponent from "./CartComponent";
const Cart = () => {
    return (
        <>
            <NavigationTop/>
            <CartComponent/>
            <Footer/>
        </>

    );
}

export default Cart;