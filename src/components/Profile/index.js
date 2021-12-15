import React from 'react';
import NavigationTop from "../NavigationTop";
import Footer from "../Footer/Footer";
import "./profile.css";
import {Card, Col} from "react-bootstrap";
import {Row} from "../Footer/FooterStyles";
import NavigationSidebar from "../NavigationSidebar";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const history = useHistory();
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