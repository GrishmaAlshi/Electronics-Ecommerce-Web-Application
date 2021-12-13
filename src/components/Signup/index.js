import '../../vendors/bootstrap/css/signup.css';
import { signup } from '../../firebase';
import { useState } from "react";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const authListener= () => { 
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                history.goBack();
            } else {
                console.log("Please register");
            }
        });
    }
    useEffect(() => {
        authListener();
    }, []);

    const cancelSignUp = () =>{
        let path = "/";
        history.push(path);
    }

    return(

        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>

            <b>First Name</b>
            <input type="text" placeholder="Enter First Name" name="firstname" required/>

            <b>Last Name</b>
            <input type="text" placeholder="Enter Last Name" name="lastname" required/>

            <b>Email</b>
            <input type="text" 
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            placeholder="Enter Email" 
            name="email" required/>

            <b>Password</b>
            <input type="password" 
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            placeholder="Enter Password" name="psw" required/>

            <b>Repeat Password</b>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

            <p className="para">By creating an account you agree to our <a href="/privacypolicy">Terms
                & Privacy</a>.</p>

            <div className="clearfix">
                <button type="submit" className="signupbtn" onClick={() => signup(email, password)}>Sign Up</button>
                <button type="button" className="cancelbtn" onclick={() => cancelSignUp()}>Cancel</button>
            </div>
        </div>

    );
}
export default Signup;