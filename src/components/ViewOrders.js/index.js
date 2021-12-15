import React, { useEffect, useState } from "react";
import { Card, Accordion } from "react-bootstrap";
import Order from "../Orders/Order";
import OwnerNavbar from "../OwnerNavbar";

const ViewOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = () => {
    fetch(`http://localhost:4000/api/orders`)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  };

  return (
    <>
      <OwnerNavbar />

      <Card border="dark" style={{ padding: "40px" }}>
        <Card.Title>Orders</Card.Title>
        {allOrders.map((eachOrder) => (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{eachOrder.orderId}</Accordion.Header>
              <Accordion.Body>
                <Order order={eachOrder} />
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
