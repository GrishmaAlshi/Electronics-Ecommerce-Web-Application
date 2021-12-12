import '../../vendors/bootstrap/css/login.css';
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <div className="box-form">

            <div className="left">
                <div className="overlay">
                    <h1>Welcome to Bazinga.</h1>

                    <span>
                <p>Login with Google</p>
                <a href="#"><i className="fa fa-google" aria-hidden="true"></i></a>
            </span>
                </div>
            </div>


            <div className="right">
                <h5>Login</h5>
                <div className="account mt-5">Don't have an account? <a href="/signup">Create Your Account</a> It takes less than a minute
                </div>
                <div className="inputs">
                    <input type="text" placeholder="user name"/>
                    <br/>
                    <input type="password" placeholder="password"/>
                </div>

                <br/><br/>

                <br/>
                <button>Login</button>
            </div>

        </div>
    );
}
export default Login;