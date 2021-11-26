import React from "react";
import { useDispatch } from "react-redux";

const ElectronicsListItem = ({electronics}) => {
    const dispatch = useDispatch();
    return(
        <li className="list-group-item">
            <table>
                <tr>
                    <td>
                        {electronics.model_name}
                    </td>
                </tr>
            </table>
        </li>
    )
}

export default ElectronicsListItem;