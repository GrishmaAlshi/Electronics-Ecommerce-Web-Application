import React, { useEffect, useState } from "react";
import { Card, Accordion } from "react-bootstrap";
import Order from "../Orders/Order";
import OwnerNavbar from "../OwnerNavbar";

const ViewOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [order, setOrder] = useState({});
  const [orderDates, setOrderDates] = useState([]);

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = () => {
    fetch(`http://localhost:4000/api/orders`)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
        const temp = data.reduce(function (acc, eachOrder) {
          if (acc[eachOrder["date"]]) {
            acc[eachOrder["date"]] = [...acc[eachOrder["date"]], eachOrder];
          } else {
            acc[eachOrder["date"]] = [eachOrder];
          }
          return acc;
        }, {});
        setOrder(temp);
        setOrderDates(Object.keys(temp));
        console.log("TEMP", temp);
      });
  };

  return (
    <>
      <OwnerNavbar />

      <Card border="dark" style={{ padding: "40px" }}>
        <Card.Title>Orders</Card.Title>
        {orderDates.map((orderDate) => (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{orderDate}</Accordion.Header>
              <Accordion.Body>
                {order[orderDate].map((order) => (
                  <Order order={order} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </Card>
    </>
  );
};

// class ViewOrders extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       allOrders: [],
//     };
//     this.getAllOrders();
//     console.log(this.state.allOrders);
//   }

//   getAllOrders() {
//     fetch(`http://localhost:4000/api/orders`)
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({ allOrders: data });
//       });
//   }

//   render() {
//     return (
//       <>
//         <Card border="dark" style={{ padding: "40px" }}>
//           <Card.Title>Orders</Card.Title>
//           {this.state.allOrders.map((eachOrder) => (
//             <Accordion>
//               <Accordion.Item eventKey="0">
//                 <Accordion.Header>{eachOrder.orderId}</Accordion.Header>
//                 <Accordion.Body></Accordion.Body>
//               </Accordion.Item>
//             </Accordion>
//           ))}
//         </Card>
//       </>
//     );
//   }
// }

export default ViewOrders;
