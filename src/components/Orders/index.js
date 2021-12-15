import NavigationSidebar from "../NavigationSidebar";
import { Col } from "react-bootstrap";
import { Row } from "../Footer/FooterStyles";
import NavigationTop from "../NavigationTop";
import Footer from "../Footer/Footer";
import React from "react";
import Order from "./Order";
class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
    this.getUserOrders();
  }

  getUserOrders() {
    const userEmail = localStorage.getItem("email");
    console.log("USERMAL", userEmail);
    fetch(`http://localhost:4000/api/orders/${userEmail}`)
      .then((response) => response.json())
      .then((orders) => {
        this.setState({ orders: orders });
      });
  }

  render() {
    return (
      <>
        <NavigationTop />
        <h1>Welcome to your profile</h1>
        <div style={{ display: "flex" }}>
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active="orders" />
          </div>
          <div
            className="col-10 col-sm-10 col-lg-6"
            style={{ "margin-left": "50px" }}
          >
            {this.state.orders.map((order) => (
              <Order order={order} />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Orders;
