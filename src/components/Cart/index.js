import React from 'react';
import NavigationTop from "../NavigationTop/index";
import Footer from "../Footer/Footer";
import CartComponent from "./CartComponent";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Cart = () => {
    const history = useHistory();
    const authListener= () => { 
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                
            } else {
                history.push("/");
            }
        });
    }
    useEffect(() => {
        authListener();
    }, []);
    return (
        <>
            <NavigationTop isLoggedIn={true}/>
            <CartComponent/>
            <Footer/>
        </>

    );
}

export default Cart;