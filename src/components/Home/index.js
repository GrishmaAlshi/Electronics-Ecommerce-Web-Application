import React from 'react';
import NavigationTop from "../NavigationTop/index";
import CarouselSlide from "../Carousel";
import CarouselShop from "../Carousel/CarouselShop";
import {Col, Container, Image, Row} from "react-bootstrap";
import Footer from "../Footer/Footer";
import PrivacyAlert from "../PrivacyAlert";
const Home = () => {
    return (
        <>
            <PrivacyAlert/>
            <NavigationTop/>
            <br/>
            <CarouselSlide/>
            <br/>
            <Container fluid>
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
            </Container>
            <br/>
            <CarouselShop/>
            <br/>
            <Footer/>
        </>

    );
}

export default Home;