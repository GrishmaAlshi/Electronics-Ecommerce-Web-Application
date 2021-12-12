import React from 'react';
import NavigationTop from "../NavigationTop/index";
import CarouselSlide from "../Carousel";
import CarouselShop from "../Carousel/CarouselShop";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../Footer/Footer";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { useState } from 'react';

const Home = () => {
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
            <NavigationTop isLoggedIn = {loggedIn}/>
            <br/>
            <CarouselSlide/>
            <br/>
            <Container>
                <Row>
                    <Col>
                        <img
                            className="d-block"
                            alt="Second slide"
                            src="https://i.pinimg.com/originals/67/ab/52/67ab5239e6ea87d79ca578fbe6ec982c.png"
                        />
                    </Col>
                    <Col>
                        <img
                            className="d-block"
                            alt="Second slide"
                            src="https://i.pinimg.com/originals/67/ab/52/67ab5239e6ea87d79ca578fbe6ec982c.png"
                        />
                    </Col>

                </Row>
            </Container>
            <br/>
            <CarouselShop/>
            <br/>
            <Footer/>
        </>

    );
}

export default Home;