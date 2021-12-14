import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import { Card, Button } from "react-bootstrap";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    fetch(`http://localhost:4000/api/users/${email}`)
      .then((data) => data.json())
      .then((data) => {
        setEmail(data.email);
        setName(data.firstName + " " + data.lastName);
        setAddress(data.address ? data.address : "");
        setContact(data.contact ? data.contact : "");
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
        address,
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
      {/*<div className="row">*/}
      {/*    <Link to ="/profile" className="col-1 pt-1 fa fa-times"></Link>*/}
      {/*    <span className="col-9 wd-edit-profile-title">Edit Profile</span>*/}

      {/*    <Link to="/profile" className="col-2 wd-save-profile rounded-pill">Save</Link>*/}
      {/*</div>*/}
      {/*<div className="pt-2"></div>*/}
      {/*<div className="col-10 col-sm-10 col-lg-6">*/}

      {/*</div>*/}

      {/*<div className="wd-profile-picture">*/}

      {/*</div>*/}

      {/*<div className="pt-5"></div>*/}

      {/*<div className="row rounded test">*/}
      {/*    <div className="wd-title">Name</div>*/}

      {/*</div>*/}

      {/*<div className="pt-4"></div>*/}
      {/*<div className="row  rounded test">*/}
      {/*    <div className="wd-title">Email id</div>*/}
      {/*</div>*/}

      {/*<div className="pt-4"></div>*/}
      {/*<div className="row rounded test">*/}
      {/*    <div className="wd-title">Address</div>*/}

      {/*</div>*/}

      {/*<div className="pt-4"></div>*/}
      {/*<div className="row rounded test">*/}
      {/*    <div className="wd-title">Card details</div>*/}
      {/*    </div>*/}
      <Card>
        <form>
          Edit your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          Edit your email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          Edit your shipping address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          Edit your contact info:
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
          Edit Account
        </Button>
      </Card>
    </>
  );
};

export default EditProfile;
