import React, { useState, useEffect } from "react";
import NavigationTop from "../NavigationTop/index";

import Footer from "../Footer/Footer";
import Wish from "./Wish";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const WishList = () => {
  const [loggedIn, setLoggedIn] = useState("");
  const authListener = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      <NavigationTop isLoggedIn={loggedIn} />
      <br />
      <Wish />
      <br />
      <Footer />
    </>
  );
};

export default WishList;
