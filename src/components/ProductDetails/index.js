import React, { useEffect, useState } from "react";
import NavigationTop from "../NavigationTop/index";
import Footer from "../Footer/Footer";
import ProductDetailsComponent from "./ProductDetailsComponent";
import { useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
const ProductDetails = () => {
  console.log(useParams());
  const id = useParams();
  console.log(id);
  const [loggedIn, setLoggedIn] = useState("");
    const authListener= () => { 
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });
    }
    useEffect(() => {
        authListener();
    }, []);
  return (
    <>
      <NavigationTop isLoggedIn={loggedIn}/>
      <ProductDetailsComponent item={id.id} />
      <Footer />
    </>
  );
};

export default ProductDetails;
