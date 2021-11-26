import React, { useEffect } from "react";
import ElectronicsListItem from "./ElectronicsListItem";
import { fetchAllElectronics } from "../../services/electronicsService";
import {useDispatch, useSelector} from "react-redux";

const selectAllElectronics = (state) => state.electronics.electronics;

const ElectronicsList = () => {
    const electronics = useSelector(selectAllElectronics);
    const dispatch = useDispatch();
    useEffect(() => fetchAllElectronics(dispatch), []);
    return(
        <ul className = "list-group">
            {
                electronics.map(elecs =>
                    <ElectronicsListItem electronics = {elecs}/>
                )
            }
        </ul>


    )
}

export default ElectronicsList;