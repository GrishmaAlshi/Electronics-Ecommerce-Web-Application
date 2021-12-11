import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UpdateDetails from "../ElectronicsUpdate/UpdateDetails";

const ElectronicsListItem = ({electronics}) => {
    const dispatch = useDispatch();
    const editClickHandler = () => {
        return <UpdateDetails data={electronics.id}/>
    }
    return(
        <li className="list-group-item" key={electronics.id}>
            <table>
                <tr>
                    <td>
                        {electronics.model_name}
                    </td>
                    <td>
                        <Link to={`update/${electronics.id}`}>
                            <button onClick={editClickHandler}>Edit</button>
                        </Link>
                    </td>
                </tr>
            </table>
        </li>
    )
}

export default ElectronicsListItem;