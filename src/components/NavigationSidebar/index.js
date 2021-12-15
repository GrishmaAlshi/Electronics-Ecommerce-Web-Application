import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  FavoriteBorderOutlined,
  BookmarkBorderOutlined,
  Book,
} from "@material-ui/icons";

const NavigationSidebar = ({ active = "editaccount" }) => {
  return (
    <>
      <div className="list-group">
        <Link
          to="/editaccount"
          className={`list-group-item  ${
            active === "editaccount" ? "active" : ""
          }`}
        >
          <div className="row">
            <div className="col-2">
              <Home />
            </div>
            <div className="col-10 d-none d-xl-block">My Account</div>
          </div>
        </Link>
        <Link
          to="/orders"
          className={`list-group-item  ${active === "orders" ? "active" : ""}`}
        >
          <div className="row">
            <div className="col-2">
              <BookmarkBorderOutlined />
            </div>
            <div className="col-10 d-none d-xl-block">
              <span> My Orders</span>
            </div>
          </div>
        </Link>

        <Link
          to="/wishlist"
          className={`list-group-item  ${
            active === "wishlist" ? "active" : ""
          }`}
        >
          <div className="row">
            <div className="col-2">
              <FavoriteBorderOutlined />
            </div>
            <div className="col-10 d-none d-xl-block">
              <span> My Wishlist</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default NavigationSidebar;
