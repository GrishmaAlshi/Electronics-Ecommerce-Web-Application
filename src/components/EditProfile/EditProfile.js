import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import { Card, Button } from "react-bootstrap";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [apartment, setApartment] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    fetch(`http://localhost:4000/api/users/${email}`)
      .then((data) => data.json())
      .then((data) => {
        setEmail(data.email);
        setName(data.firstName + " " + data.lastName);
        setContact(data.contact ? data.contact : "");
        const address = data.address;
        console.log(address);
        setApartment(address.apartment);
        setAddress(address.address);
        setCity(address.city);
        setCountry(address.country);
        setPincode(address.zipcode);
        setState(address.state);
        console.log("USER DATA", data);
      });
  }, []);

  const updateUserDetails = () => {
    fetch(`http://localhost:4000/api/users/${email}`, {
      method: "PUT",
      body: JSON.stringify({
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1],
        contact,
        address: {
          address,
          country,
          state,
          city,
          zipcode: pincode,
          apartment_no: apartment,
        },
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        window.location.reload();
      });
  };

  return (
    <>
      <Card>
        <Card.Header style={{ "font-size": "30px", "font-weight": "bold" }}>
          Edit Account Details
        </Card.Header>
        <form>
          <b style={{ color: "black" }}>Name:</b>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <b style={{ color: "black" }}>Email:</b>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <b style={{ color: "black" }}>Apartment No:</b>
          <input
            type="text"
            onChange={(e) => setApartment(e.target.value)}
            placeholder="Enter Apartment Number"
            name="apartment"
            defaultValue={apartment}
          />
          <b style={{ color: "black" }}>Address:</b>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Address"
            name="address"
            defaultValue={address}
          />
          <b style={{ color: "black" }}>City:</b>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City"
            name="city"
            defaultValue={city}
          />
          <b style={{ color: "black" }}>State:</b>
          <input
            type="text"
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter State"
            name="state"
            defaultValue={state}
          />
          <b style={{ color: "black" }}>Country:</b>
          <input
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter Country"
            name="country"
            defaultValue={country}
          />
          <b style={{ color: "black" }}>Pincode:</b>
          <input
            type="text"
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter Pincode"
            name="pincode"
            defaultValue={pincode}
          />
          <b style={{ color: "black" }}>Contact info:</b>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </form>
        <Button
          style={{ width: "500px", "margin-left": "80px" }}
          onClick={() => {
            updateUserDetails();
          }}
        >
          Save
        </Button>
      </Card>
    </>
  );
};

export default EditProfile;
