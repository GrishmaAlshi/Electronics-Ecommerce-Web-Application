import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { Facebook, Twitter, Instagram, YouTube } from "@material-ui/icons";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Useful Links</Heading>
            <FooterLink href="/about">About us</FooterLink>
            <FooterLink href="/FAQ">FAQ's</FooterLink>
            <FooterLink href="/returnpolicy">Return Policy</FooterLink>
            <FooterLink href="/privacypolicy">Terms of use</FooterLink>
          </Column>
          <Column>
            <Heading>Products</Heading>
            <FooterLink href="/laptops">Laptops</FooterLink>
            <FooterLink href="/construction">Tablets</FooterLink>
            <FooterLink href="/mobiles">Mobile Phones</FooterLink>
            <FooterLink href="/construction">Smart wearables</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="/construction">
              <Facebook />
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </FooterLink>
            <FooterLink href="/construction">
              <Instagram />
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </FooterLink>
            <FooterLink href="/construction">
              <Twitter />
              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </FooterLink>
            <FooterLink href="/construction">
              <YouTube />
              <span style={{ marginLeft: "10px" }}>Youtube</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
