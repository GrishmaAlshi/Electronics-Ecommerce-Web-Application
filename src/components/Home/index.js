import React from "react";
import NavigationTop from "../NavigationTop/index";
import CarouselSlide from "../Carousel";
import CarouselShop from "../Carousel/CarouselShop";
import { Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import PrivacyAlert from "../PrivacyAlert";
const Home = () => {
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
      <PrivacyAlert />
      <br />
      <CarouselSlide />
      <br />
      <Container fluid>
        {loggedIn ? (
          <>
            <Row>
              <Col>
                <Image
                  className="d-block"
                  alt="Second slide"
                  src="https://cdn4.vectorstock.com/i/1000x1000/04/13/free-delivery-badge-with-truck-stock-vector-30920413.jpg"
                  fluid
                />
              </Col>
              <Col>
                <Image
                  className="d-block"
                  alt="Second slide"
                  src="https://cdn4.vectorstock.com/i/1000x1000/04/13/free-delivery-badge-with-truck-stock-vector-30920413.jpg"
                  fluid
                />
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col>
                <Image
                  className="d-block"
                  alt="Second slide"
                  src="https://i.pinimg.com/originals/67/ab/52/67ab5239e6ea87d79ca578fbe6ec982c.png"
                  fluid
                />
              </Col>
              <Col>
                <Image
                  className="d-block"
                  alt="Second slide"
                  src="https://i.pinimg.com/originals/67/ab/52/67ab5239e6ea87d79ca578fbe6ec982c.png"
                  fluid
                />
              </Col>
            </Row>
          </>
        )}
      </Container>
      <br />
      <CarouselShop />
      <br />
      <Footer />
    </>
  );
};

export default Home;
