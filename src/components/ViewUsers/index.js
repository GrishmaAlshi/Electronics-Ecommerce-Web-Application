import React, { useEffect, useState } from "react";
import { Card, Accordion } from "react-bootstrap";
import Order from "../Orders/Order";
import OwnerNavbar from "../OwnerNavbar";

const ViewUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch(`http://localhost:4000/api/users`)
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      });
  };

  return (
    <>
      <OwnerNavbar />

      <Card border="dark" style={{ padding: "40px" }}>
        <Card.Title>Users</Card.Title>
        {allUsers.map((eachUser) => (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Username : {eachUser.firstName + " " + eachUser.lastName}
              </Accordion.Header>
              <Accordion.Body>
                <Card>
                  <Card.Title style={{ margin: "10px" }}>
                    Email : {eachUser.email}
                  </Card.Title>
                  <br />
                  <Card.Title style={{ margin: "10px" }}>
                    Role : {eachUser.role}
                  </Card.Title>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </Card>
    </>
  );
};

export default ViewUsers;
