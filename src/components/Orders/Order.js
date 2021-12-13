import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { popularProducts } from "../../data/products";
import Product from "../Products/Product/Product";
import styled from "styled-components";
import { Button, Card, Row, Col, Image } from "react-bootstrap";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 600px;
`;

const ImageContainer = styled.div`
  height: 5rem;
  width: 5rem;
`;

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.order,
    };
  }

  render() {
    return (
      <>
        <Container>
          {/* {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
          ))} */}
          <Card>
            <Card.Header as="h5">
              # Order - {this.state.order.orderId}
            </Card.Header>
            <Card.Body>
              <Card.Title>{this.state.order.date}</Card.Title>
              <Card.Text>
                <Row>
                  <Col xs={6} md={4}>
                    <Image
                      src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461987_sd.jpg;maxHeight=640;maxWidth=550"
                      roundedCircle
                      height="30"
                    />
                  </Col>
                </Row>
              </Card.Text>
              <Link to="">View Order</Link>
              {/* <Button variant="primary">View Order</Button> */}
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default Order;
