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
  const [showPrivacyAlert, setShowPrivacyAlert] = useState(true);
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

  const getUser = () => {
    fetch(`http://localhost:4000/api/users/${localStorage.getItem("email")}`)
      .then((res) => res.json())
      .then((userData) => {
        if (userData["isPrivacyPolicyAccepted"] == false) {
          setShowPrivacyAlert(true);
        } else {
          setShowPrivacyAlert(false);
        }
      });
  };
  useEffect(() => {
    authListener();
    getUser();
  }, []);
  return (
    <>
      <NavigationTop isLoggedIn={loggedIn} />
      {showPrivacyAlert ? <PrivacyAlert /> : ""}
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
                  src="https://cdn1.vectorstock.com/i/1000x1000/67/65/free-delivery-rubber-stamp-vector-896765.jpg"
                  fluid
                />
              </Col>
              <Col>
                <Image
                  className="d-block"
                  alt="Second slide"
                  src="https://cdn2.vectorstock.com/i/1000x1000/61/46/square-grunge-red-free-delivery-stamp-vector-16336146.jpg"
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
                  src="https://thumbs.dreamstime.com/z/new-arrival-sale-market-advertising-design-laptop-discount-offer-banner-arrivals-134026483.jpg"
                  fluid
                />
              </Col>
              <Col>
                <Image
                  className="d-block"
                  alt="Second slide"
                  src="https://s3b.cashify.in/gpro/uploads/2019/09/16135517/buyback_offer_banner.png"
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
