import Home from './components/Home/index';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Shop from "./components/Shop/index";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

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
                <Route path="/productDetails">
                    <ProductDetails/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
            </div>
        </BrowserRouter>

    );
}

export default App;
