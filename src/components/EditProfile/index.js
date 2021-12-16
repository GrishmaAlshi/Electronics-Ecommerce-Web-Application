import React from "react";
import NavigationTop from "../NavigationTop";
import Footer from "../Footer/Footer";
import { Card, Col } from "react-bootstrap";
import { Row } from "../Footer/FooterStyles";
import NavigationSidebar from "../NavigationSidebar";
import EditProfile from "./EditProfile";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import "../../vendors/bootstrap/css/wish.css";

const Edit = () => {
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
      <h1>Welcome to your profile</h1>
      <br />
      {/* <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar />
      </div>
      <br />
      <Col>
        <div
          className="col-10 col-sm-10 col-lg-6"
          style={{ "margin-left": "400px" }}
        >
          <EditProfile />
        </div>
      </Col> */}
      <div className="profile">
        <div className="col-4 col-md-2 col-lg-4 col-xl-3">
          <NavigationSidebar active="editaccount" />
        </div>
        <div className="col-8 col-sm-10 col-lg-8  col-xl-9 edit-profile-div">
          <EditProfile />
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Edit;
