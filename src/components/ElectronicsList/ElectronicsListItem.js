import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UpdateDetails from "../ElectronicsUpdate/UpdateDetails";
import { useHistory } from "react-router-dom";
import "./elist.css";

const ElectronicsListItem = ({electronics}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const link = "/admin/update/" + electronics.id;
    const editClickHandler = () => {
        history.push(link);
    }
    return(
        <li className="list-group-item" key={electronics.id}>
            <div className="row">
                <div className="col-11">
                    {electronics.model_name}
                </div>
                    <div className="col">
                        <button className="editbutton" onClick={editClickHandler}>Edit</button>
                    </div>
            </div>
        </li>
    )
}

export default ElectronicsListItem;