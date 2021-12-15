import "../../vendors/bootstrap/css/signup.css";
import { signup } from "../../firebase";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";

const Shipping = () => {
  const [apartment, setApartment] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const history = useHistory();
  const id = localStorage.getItem("email");
  let total = 0;
  const email = localStorage.getItem("email");
  const ELECTRONICS_API = "http://localhost:4000/api/cartProducts";
  const remove_api = "http://localhost:4000/api/removeFromCart";
  const address_api = "http://localhost:4000/api/users/addAddress";
  const user_api = "http://localhost:4000/api/users";
  const cancelSignUp = () => {
    let path = "/cart";
    history.push(path);
  };
  const [products, setProducts] = useState([]);

  const removeFromCart = (data) => {
    fetch(`${remove_api}/${id}`, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((electronics) => console.log(electronics));
  };

  const addAddress = () => {
    let userAddress = {
      apartment_no: apartment,
      address: address,
      city: city,
      state: state,
      country: country,
      zipcode: pincode,
    };
    fetch(`${address_api}/${email}`, {
      method: "PUT",
      body: JSON.stringify(userAddress),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(console.log("Address Saved"));
  };

  const getAddress = () => {
    console.log(email);
    fetch(`${user_api}/${email}`)
      .then((response) => response.json())
      .then((userData) => {
        const address = userData.address;
        console.log(address);
        setApartment(address.apartment_no);
        setAddress(address.address);
        setCity(address.city);
        setCountry(address.country);
        setPincode(address.zipcode);
        setState(address.state);
      });
  };

  const order = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let orderData = {};
    orderData.date = date;
    orderData.userId = id;
    orderData.total_amount = total;
    let productID = [];
    products.forEach((prod) => {
      productID = [...productID, prod.id];
    });
    orderData.products = productID;
    fetch("http://localhost:4000/api/orders/", {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((electronics) => console.log(electronics));
    products.forEach((prod) => {
      removeFromCart(prod);
    });
    addAddress();
    history.push("/orderPlaced");
  };

  useEffect(() => {
    // authListener();
    fetch(`${ELECTRONICS_API}/${email}`)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
    getAddress();
  }, []);
  {
    products.map((product) => (total = total + parseInt(product.price)));
  }
  return (
    <div className="container">
      <h1>Shipping Details</h1>
      {/*<p>Please fill in this form to create an account.</p>*/}
      <hr />

      <b style={{ color: "black" }}>Apartment No:</b>
      <input
        type="text"
        onChange={(e) => setApartment(e.target.value)}
        placeholder="Enter Apartment Number"
        name="apartment"
        defaultValue={apartment}
        required
      />

      <b style={{ color: "black" }}>Address:</b>
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter Address"
        name="address"
        defaultValue={address}
        required
      />

      <b style={{ color: "black" }}>City:</b>
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
        name="city"
        defaultValue={city}
        required
      />

      <b style={{ color: "black" }}>State:</b>
      <input
        type="text"
        onChange={(e) => setState(e.target.value)}
        placeholder="Enter State"
        name="state"
        defaultValue={state}
        required
      />

      <b style={{ color: "black" }}>Country:</b>
      <input
        type="text"
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter Country"
        name="country"
        defaultValue={country}
        required
      />

      <b style={{ color: "black" }}>Pincode:</b>
      <input
        type="text"
        onChange={(e) => setPincode(e.target.value)}
        placeholder="Enter Pincode"
        name="pincode"
        defaultValue={pincode}
        required
      />

      <div className="clearfix">
        <button type="submit" className="signupbtn" onClick={() => order()}>
          Submit
        </button>
        <button
          type="button"
          className="cancelbtn"
          onClick={() => cancelSignUp()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default Shipping;
