import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavigationSidebar from "../NavigationSidebar";
import { Col } from "react-bootstrap";
import { Row } from "../Footer/FooterStyles";
import NavigationTop from "../NavigationTop";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 50%;
  border-radius: 50%;
  z-index: 1;
`;

const Details = styled.div`
  justify-content: center;
  z-index: 2;
  overflow: hidden;
  padding-top: 270px;
  margin-left: -150px;
  font-weight: bold;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const OrderDetails = (props) => {
  const { search } = useLocation();
  const paramOrderId = new URLSearchParams(search).get("orderId");
  console.log(paramOrderId);
  const [orderId, setOrderId] = useState(paramOrderId);
  const [order, setOrder] = useState({});
  const [productsInOrder, setProductsInOrder] = useState([]);

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = () => {
    const email = localStorage.getItem("email");
    return fetch(`http://localhost:4000/api/orders/${email}/${orderId}`)
      .then((response) => response.json())
      .then((orders) => {
        setOrder(orders[0]);
        const orderProducts = orders[0].products;
        const allProducts = getProducts(orderProducts);
        Promise.all(allProducts).then((data) => {
          setProductsInOrder(data);
        });
      });
  };

  const getProducts = (products) => {
    return products.map((product) => {
      return fetch(`http://localhost:4000/api/electronics/${product}`)
        .then((response) => response.json())
        .then((productDetails) => {
          return productDetails[0];
        });
    });
  };
  return (
    <>
      <NavigationTop />
      <h1>Order Details</h1>
      <Row>
        <Col>
          <NavigationSidebar />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default OrderDetails;
