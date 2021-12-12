import React from 'react';
import NavigationTop from "../NavigationTop";
import Footer from "../Footer/Footer";
import "./profile.css";
import {Card, Col} from "react-bootstrap";
import {Row} from "../Footer/FooterStyles";
import NavigationSidebar from "../NavigationSidebar";
const Profile = () => {
    return (
        <>
            <NavigationTop/>
            <h1>Welcome to your profile</h1>
            <Row>
                <Col>
                  <NavigationSidebar/>
                </Col>
            </Row>

            <Footer/>
        </>

    );
}

export default Profile;