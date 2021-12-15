import React from 'react';
import NavigationTop from "../NavigationTop/index";
import Footer from "../Footer/Footer";
import CartComponent from "./CartComponent";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../firebase';

const Cart = () => {
    const history = useHistory();
    const id = getCurrentUser();
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
            <CartComponent id = {id}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer/>
        </>

    );
}

export default Cart;