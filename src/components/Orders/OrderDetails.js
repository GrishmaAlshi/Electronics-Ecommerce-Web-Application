import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavigationSidebar from "../NavigationSidebar";
import { Col } from "react-bootstrap";
import { Row } from "../Footer/FooterStyles";
import NavigationTop from "../NavigationTop";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router";
import { Card } from "react-bootstrap";
import { mobile } from "../responsive";
import { Spinner } from "react-bootstrap";
import "../../vendors/bootstrap/css/wish.css";

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

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
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

  z-index: 1;
`;

const PriceDetail = styled.div`
  color: black;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Details = styled.div`
  justify-content: center;
  z-index: 2;
  overflow: hidden;
  padding-top: 270px;
  margin-left: -150px;
  font-weight: bold;
`;

const ProductName = styled.span``;
const ProductSize = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;

const ProductPrice = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
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
  const [loaded, setLoaded] = useState(false);
  console.log(paramOrderId);
  const [orderId, setOrderId] = useState(paramOrderId);
  const [order, setOrder] = useState({});
  const [productsInOrder, setProductsInOrder] = useState([]);

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = () => {
    const email = localStorage.getItem("email");
    console.log(orderId);
    return fetch(`http://localhost:4000/api/orders/byOrderId/${orderId}`)
      .then((response) => response.json())
      .then((orders) => {
        console.log(orders);
        setOrder(orders[0]);
        const orderProducts = orders[0].products;
        const allProducts = getProducts(orderProducts);
        Promise.all(allProducts).then((data) => {
          setProductsInOrder(data);
          setLoaded(true);
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
      <br />
      <div style={{ display: "flex" }}>
        <div className="col-2 col-md-2 col-lg-1 col-xl-2 mr-2">
          <NavigationSidebar active="orders" />
        </div>
        <br />
        {loaded ? (
          <Col>
            <div className="col-10 col-sm-10 col-lg-6">
              {productsInOrder.map((product) => (
                <React.Fragment>
                  <Card style={{ width: "700px" }}>
                    <Card.Header as="h5">Order Details</Card.Header>
                    <Card.Text>
                      <Image
                        style={{
                          "margin-left": "20px",
                          padding: "5px",
                          width: "150px",
                          height: "150px",
                        }}
                        src={
                          product.img1
                            ? product.img1
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU"
                        }
                      />
                      <br />
                      <div
                        style={{
                          "margin-left": "350px",
                          "margin-top": "-90px",
                          "font-size": "20px",
                        }}
                      >
                        <b>Product:</b> {product.model_name}
                        &nbsp;
                        <br />
                        <b>Memory:</b> {product.storage}
                        &nbsp;
                        <br />
                        <b>Product Price: $</b>
                        {product.price}
                      </div>
                    </Card.Text>
                  </Card>
                  <br />
                </React.Fragment>
              ))}
            </div>
          </Col>
        ) : (
          <div className="spinner">
            <Spinner animation="border" />
          </div>
        )}
      </div>
      <br />
      <Footer />
    </>
  );
};

export default OrderDetails;
