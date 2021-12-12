import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Useful Links</Heading>
                        <FooterLink href="#">About us</FooterLink>
                        <FooterLink href="#">FAQ's</FooterLink>
                        <FooterLink href="#">Return Policy</FooterLink>
                        <FooterLink href="/privacypolicy">Terms of use</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Products</Heading>
                        <FooterLink href="#">Laptops</FooterLink>
                        <FooterLink href="#">Tablets</FooterLink>
                        <FooterLink href="#">Mobile Phones</FooterLink>
                        <FooterLink href="#">Smart wearables</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;