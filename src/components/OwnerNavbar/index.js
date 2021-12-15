import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OfflineBolt } from "@material-ui/icons";
import { useEffect } from "react";
import {
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { logout } from "../../firebase";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useHistory } from "react-router-dom";

const OwnerNavbar = () => {
  const [loggedIn, setLoggedIn] = useState("");
  const history = useHistory();
  const authListener = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        history.push("/");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  const goToHome = () => {
    if (localStorage.getItem("role") == "admin") {
      history.push("/admin/add");
    } else if (localStorage.getItem("role") == "owner") {
      history.push("/ownerhome");
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Bazinga &nbsp;
            <OfflineBolt />
          </Navbar.Brand>
          <Nav className="me-auto">
            {localStorage.getItem("role") != "user" ? (
              <Nav.Link
                onClick={() => {
                  goToHome();
                }}
              >
                Home
              </Nav.Link>
            ) : (
              <></>
            )}
            {loggedIn && (
              <Nav.Link href="/owner/vieworders">View Orders</Nav.Link>
            )}
            {loggedIn && (
              <Nav.Link href="/owner/viewusers">View Users</Nav.Link>
            )}
            {loggedIn && (
              <Nav.Link href="" onClick={() => logout()}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default OwnerNavbar;
