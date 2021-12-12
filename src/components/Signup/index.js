import '../../vendors/bootstrap/css/signup.css';
import {useHistory} from "react-router-dom";

const Signup = () => {

    const history = useHistory();

    const cancelSignUp = () =>{
        let path = "/";
        history.push(path);
    }

    return(

        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>

            <b>Email</b>
            <input type="text" placeholder="Enter Email" name="email" required/>

            <b>Password</b>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <b>Repeat Password</b>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

            <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>

            <p className="para">By creating an account you agree to our <a href="/privacypolicy">Terms
                & Privacy</a>.</p>

            <div className="clearfix">
                <button type="button" className="cancelbtn" onClick={cancelSignUp}>Cancel</button>
                <button type="submit" className="signupbtn" >Sign Up</button>
            </div>
        </div>

    );
}
export default Signup;