import React, {useState} from "react";
import {Link} from "react-router-dom";
import {logout} from '../../firebase';
import { useEffect } from "react";
import {Container, Dropdown, Nav, Navbar, NavItem, NavLink} from "react-bootstrap";
import SearchBar from "./SearchBar";

const NavigationTop = ({isLoggedIn}) => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Bazinga</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>
                            <Link to="/shop">Shop</Link>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/laptops" >Laptops</Link>
                                    {/* <Nav.Link href="/shop/laptops">Laptops</Nav.Link> */}
                                </Dropdown.Item>
                                <Dropdown.Item>Television sets</Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/mobiles" >Mobile Phones</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>Tablets</Dropdown.Item>
                                <Dropdown.Item>Smart devices</Dropdown.Item>
                                <Dropdown.Item>Washing machines</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        {!isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
                        {isLoggedIn && <Nav.Link href="/profile">Profile</Nav.Link>}
                        {isLoggedIn && <Nav.Link href = "" onClick={() => logout()}>Logout</Nav.Link>}
                        {isLoggedIn && <Nav.Link href="/cart" className="float-right">Cart</Nav.Link>}
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}


export default NavigationTop;
