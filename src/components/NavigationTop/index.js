import React from "react";
import {Link} from "react-router-dom";
import {Container, Dropdown, Nav, Navbar, NavItem, NavLink} from "react-bootstrap";

const NavigationTop = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">E-Commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>

                                Shop</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Laptops</Dropdown.Item>
                                <Dropdown.Item>Television sets</Dropdown.Item>
                                <Dropdown.Item>Mobile Phones</Dropdown.Item>
                                <Dropdown.Item>Tablets</Dropdown.Item>
                                <Dropdown.Item>Smart devices</Dropdown.Item>
                                <Dropdown.Item>Washing machines</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="/blog">Blog</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}
export default NavigationTop;
