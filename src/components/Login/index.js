import "../../vendors/bootstrap/css/login.css";
import React from "react";
import { useState } from "react";
import { signin } from "../../firebase";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { signInWithGoogle } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const googleSignIn = () => {
    signInWithGoogle();
  };

  const login = () => {
    signin(email, password).then((data) => {
      fetch(`http://localhost:4000/api/users/${localStorage.getItem("email")}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("role", data["role"]);
          if (data["role"] == "admin") {
            history.push("/admin/add");
          } else {
            history.goBack();
          }
        });
    });
  };

  const authListener = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetch(
          `http://localhost:4000/api/users/${localStorage.getItem("email")}`
        ).then((data) => {
          if (data["role"] == "admin") {
            history.push("/admin/add");
          } else {
            history.goBack();
          }
        });
      }
    });
  };
  useEffect(() => {
    // authListener();
  }, []);
  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Welcome to Bazinga.</h1>

          <span>
            <p>login with social media</p>
            <i
              className="fa fa-google"
              aria-hidden="true"
              onClick={() => googleSignIn()}
            ></i>
          </span>
        </div>
      </div>

      <div className="right">
        <h5>Login</h5>
        <div className="account mt-5">
          Don't have an account? <a href="/signup">Create Your Account</a> It
          takes less than a minute
        </div>
        <div className="inputs">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user name"
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>

        <br />
        <br />

        <br />
        <button onClick={() => login()}>Login</button>
      </div>
    </div>
  );
};
export default Login;
