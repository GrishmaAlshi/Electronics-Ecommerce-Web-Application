import '../../vendors/bootstrap/css/login.css';
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <div className="box-form">

            <div className="left">
                <div className="overlay">
                    <h1>Welcome to ABC.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur et est sed felis aliquet sollicitudin</p>
                    <span>
                <p>login with social media</p>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-google" aria-hidden="true"></i></a>
            </span>
                </div>
            </div>


            <div className="right">
                <h5>Login</h5>
                <div className="account mt-5">Don't have an account? <a href="/signup">Create Your Account</a> it takes less than a minute
                </div>
                <div className="inputs">
                    <input type="text" placeholder="user name"/>
                    <br/>
                    <input type="password" placeholder="password"/>
                </div>

                <br/><br/>

                <div className="remember-me--forget-password">
                    <label>
                        <input type="checkbox" name="item"/>
                        <span className="text-checkbox">Remember me</span>
                    </label>
                    <p>forget password?</p>
                </div>

                <br/>
                <button>Login</button>
            </div>

        </div>
    );
}
export default Login;