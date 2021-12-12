import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                               active = 'editaccount'
                           }
) => {
    return(
        <>
            <div className="list-group">
                <Link to="/editaccount"
                      className={`list-group-item  ${active === 'editaccount' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block">
                            My Account
                        </div>
                    </div>
                </Link>
                <Link to="/orders"
                      className={`list-group-item  ${active === 'orders' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-hashtag"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block">
                            <span> My Orders</span>
                        </div>
                    </div>
                </Link>

                <Link to="/wishlist"
                      className={`list-group-item  ${active === 'wishlist' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-hashtag"></i>
                        </div>
                        <div className="col-10 d-none d-xl-block">
                            <span> My Wishlist</span>
                        </div>
                    </div>
                </Link>


            </div>

        </>
    );
}
export default NavigationSidebar;