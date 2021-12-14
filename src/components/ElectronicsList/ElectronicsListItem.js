import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UpdateDetails from "../ElectronicsUpdate/UpdateDetails";
import "./elist.css";

const ElectronicsListItem = ({electronics}) => {
    const dispatch = useDispatch();
    const link = "/admin/update/" + electronics.id;
    const editClickHandler = () => {
        console.log("From List Item " + electronics.id);
        console.log(link);
    }
    return(
        <li className="list-group-item" key={electronics.id}>
            <div className="row">
                <div className="col-11">
                    {electronics.model_name}
                </div>
                <Link to={link}>
                    <div className="col">
                        <button className="editbutton" onClick={editClickHandler}>Edit</button>
                    </div>
                </Link>
            </div>
        </li>
    )
}

export default ElectronicsListItem;