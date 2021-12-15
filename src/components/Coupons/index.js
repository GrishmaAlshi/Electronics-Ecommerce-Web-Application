import React from 'react';
import NavigationTop from "../NavigationTop";
import Footer from "../Footer/Footer";
import "./profile.css";
import {Card, Col} from "react-bootstrap";
import {Row} from "../Footer/FooterStyles";
const Profile = () => {
    return (
        <>
            <NavigationTop/>
            <h1>Welcome to your profile</h1>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <a href="/editaccount">Your Account</a>
                            <br/>
                            <a href="/orders">My Orders</a>
                            <br/>
                            <a href="/coupons">My Coupons</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                </Col>
            </Row>

            <Footer/>
        </>

    );
}

export default Profile;