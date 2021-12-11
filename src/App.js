import Home from './components/Home/index';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Shop from "./components/Shop/index";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import Profile from "./components/Profile/index";
import EditProfile from "./components/EditProfile/EditProfile";
import Edit from "./components/EditProfile";
import Order from "./components/Orders";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/shop">
                    <Shop/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/orders">
                    <Order/>
                </Route>
                <Route path="/editaccount">
                    <Edit/>
                </Route>
                <Route path="/wishlist">
                    {/*<Wishlist/>*/}
                </Route>
            </div>
        </BrowserRouter>

    );
}

export default App;
