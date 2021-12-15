import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OfflineBolt } from "@material-ui/icons";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import {
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { logout } from "../../firebase";
import { useHistory } from "react-router-dom";

const AdminNavbar = ({ isLoggedIn }) => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState("");
    const authListener= () => { 
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setLoggedIn(true);
            } else {
              history.push("/");
                setLoggedIn(false);
            }
        });
    }
    console.log(localStorage.getItem("role"));
    useEffect(() => {
        authListener();
    }, []);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Bazinga &nbsp;
            <OfflineBolt />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin/add">Add</Nav.Link>
            <Nav.Link href="/admin/update">Update</Nav.Link>
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

export default AdminNavbar;