import React from 'react';
import NavigationTop from "../NavigationTop";
import Footer from "../Footer/Footer";
import {Card, Col} from "react-bootstrap";
import {Row} from "../Footer/FooterStyles";
import NavigationSidebar from "../NavigationSidebar";
import EditProfile from "./EditProfile";
const Edit = () => {
    return (
        <>
            <NavigationTop/>
            <h1>Welcome to your profile</h1>
            <br/>
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <br/>
            <Col>
            <div className="col-10 col-sm-10 col-lg-6" style={{"margin-left":"400px"}}>
                <EditProfile/>
            </div>
            </Col>
            <br/>
            <Footer/>
        </>
    );
}

export default Edit;