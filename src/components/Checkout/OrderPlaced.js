import "../../vendors/bootstrap/css/order.css";

const OrderPlaced = () => {
  return (
    <div className="container">
      <h1 className="heading">Order Placed</h1>
      <br />
      <p className="para">Thank you for your order.</p>
      <br />
      <p>
        Check out our similar products, return back to <a href="/">home</a>.
      </p>
    </div>
  );
};
export default OrderPlaced;
