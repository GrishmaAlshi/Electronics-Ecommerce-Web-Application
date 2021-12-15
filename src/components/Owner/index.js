import React from "react";
import { Card } from "react-bootstrap";
import OwnerNavbar from "../OwnerNavbar";
import ViewUsers from "../ViewUsers";
const Owner = (user) => {
  return (
    <>
      <OwnerNavbar />
      <Card>
        <Card.Header>Welcome !</Card.Header>
        <Card.Body>
          You can now view all the orders and user roles who have purchased
          items on your website.
        </Card.Body>
      </Card>
    </>
  );
};

export default Owner;
