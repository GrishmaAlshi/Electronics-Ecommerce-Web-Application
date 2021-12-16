import React, { useEffect, useState } from "react";
import { Card, Accordion } from "react-bootstrap";
import Order from "../Orders/Order";
import OwnerNavbar from "../OwnerNavbar";

const ViewUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    getAllUsers();

  }, []);

  const getAllUsers = () => {
    fetch(`http://localhost:4000/api/users`)
      .then((res) => res.json())
      .then((data) => {
        Promise.all(data.map((user) => {
          const link = "http://localhost:4000/api/order/count/" + user.email;
          return fetch(link)
            .then((res) => res.json())
            .then((data) => {
              user['totalOrder'] = data;
              return user
            })
          })).then(data => {
            setAllUsers(data)
          })
          // console.log(temp);
          // setAllUsers(temp)
      })
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
                  <Card.Title style={{ margin: "10px" }}>
                    Total Orders : {eachUser.totalOrder}
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
