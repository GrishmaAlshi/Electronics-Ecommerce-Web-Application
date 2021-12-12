
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./EditProfile.css";
import {Card} from "react-bootstrap";


const EditProfile = () => {

    const [name, setName] = useState("");

    return (
        <>
            {/*<div className="row">*/}
            {/*    <Link to ="/profile" className="col-1 pt-1 fa fa-times"></Link>*/}
            {/*    <span className="col-9 wd-edit-profile-title">Edit Profile</span>*/}

            {/*    <Link to="/profile" className="col-2 wd-save-profile rounded-pill">Save</Link>*/}
            {/*</div>*/}
            {/*<div className="pt-2"></div>*/}
            {/*<div className="col-10 col-sm-10 col-lg-6">*/}

            {/*</div>*/}

            {/*<div className="wd-profile-picture">*/}

            {/*</div>*/}

            {/*<div className="pt-5"></div>*/}

            {/*<div className="row rounded test">*/}
            {/*    <div className="wd-title">Name</div>*/}

            {/*</div>*/}

            {/*<div className="pt-4"></div>*/}
            {/*<div className="row  rounded test">*/}
            {/*    <div className="wd-title">Email id</div>*/}
            {/*</div>*/}

            {/*<div className="pt-4"></div>*/}
            {/*<div className="row rounded test">*/}
            {/*    <div className="wd-title">Address</div>*/}

            {/*</div>*/}

            {/*<div className="pt-4"></div>*/}
            {/*<div className="row rounded test">*/}
            {/*    <div className="wd-title">Card details</div>*/}
            {/*    </div>*/}
<Card>

        <form>
            Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

            Change your shipping address:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

            Change your billing address:
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            Change your contact info:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

        </form>

</Card>
        </>
    )
}

export default EditProfile;

