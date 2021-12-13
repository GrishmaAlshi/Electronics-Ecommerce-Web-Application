import Home from "./components/Home/index";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Shop from "./components/Shop/index";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import Profile from "./components/Profile/index";
import EditProfile from "./components/EditProfile/EditProfile";
import Edit from "./components/EditProfile";
import Order from "./components/Orders";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import electronics from "./reducers/electronics";
import Privacy from "./components/Privacy/index";
import ProductList from "./components/Products/Product/ProductList";
import Laptops from "./components/Laptops";
import Mobiles from "./components/Mobiles";
import About from "./components/About";
import Construction from "./components/PageInConstruction";
import WishList from "./components/WishList" ;
import ProductDetailsComponent from "./components/ProductDetails/ProductDetailsComponent";

const reducer = combineReducers({ electronics: electronics });
const store = createStore(reducer);



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
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
                    <WishList/>
                </Route>
                <Route path="/productDetails/:id" exact={true}>
                    <ProductDetails />
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
                <Route path="/laptops">
                    <Laptops />
                </Route>
                <Route path="/mobiles">
                    <Mobiles />
                </Route>
                <Route path="/privacypolicy">
                    <Privacy/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/construction">
                    <Construction/>
                </Route>
            </div>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
