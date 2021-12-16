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
import Orders from "./components/Orders";
import About from "./components/About";
import Construction from "./components/PageInConstruction";
import OrderDetails from "./components/Orders/OrderDetails";
import WishList from "./components/WishList";
import ProductDetailsComponent from "./components/ProductDetails/ProductDetailsComponent";
import Shipping from "./components/Checkout/AddressDetails";
import OrderPlaced from "./components/Checkout/OrderPlaced";
import FAQ from "./components/FAQ";
import "./App.css";
import ElectronicsAdd from "./components/ElectronicsAdd";
import ElectronicsUpdate from "./components/ElectronicsUpdate";
import UpdateDetails from "./components/ElectronicsUpdate/UpdateDetails";
import ReturnPolicy from "./components/ReturnPolicy";
import ViewOrders from "./components/ViewOrders.js";
import ViewUsers from "./components/ViewUsers";
import Owner from "./components/Owner";

const reducer = combineReducers({ electronics: electronics });
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/editaccount">
            <Edit />
          </Route>
          <Route path="/wishlist">
            <WishList />
          </Route>
          <Route path="/productDetails/:id" exact={true}>
            <ProductDetails />
          </Route>
          <Route path="/laptops">
            <Laptops />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/mobiles">
            <Mobiles />
          </Route>
          <Route path="/privacypolicy">
            <Privacy />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/construction">
            <Construction />
          </Route>
          <Route path="/orderDetails">
            <OrderDetails />
          </Route>
          <Route path="/shippingDetails">
            <Shipping />
          </Route>
          <Route path="/orderPlaced">
            <OrderPlaced />
          </Route>
          <Route path="/admin/add" exact={true}>
            <ElectronicsAdd />
          </Route>
          <Route path="/admin/update" exact={true}>
            <ElectronicsUpdate />
          </Route>
          <Route path="/admin/updateElectronics">
            <UpdateDetails />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="/returnpolicy">
            <ReturnPolicy />
          </Route>
          <Route path="/ownerhome">
            <Owner />
          </Route>
          <Route path="/owner/vieworders">
            <ViewOrders />
          </Route>
          <Route path="/owner/viewusers">
            <ViewUsers />
          </Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
