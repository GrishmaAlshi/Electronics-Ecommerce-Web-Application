import React, { useEffect, useState } from "react";
import ElectronicsListItem from "./ElectronicsListItem";
import { fetchAllElectronics } from "../../services/electronicsService";
import {useDispatch, useSelector} from "react-redux";

// const selectAllElectronics = (state) => state.electronics.electronics;

const ElectronicsList = () => {
    const [electronics, setElectronics] = useState([]);
    // electronics = useSelector(selectAllElectronics);
    const dispatch = useDispatch();
    // useEffect(() => fetchAllElectronics(dispatch), []);
    useEffect(() =>
        fetch("http://localhost:4000/api/electronics")
            .then(response => response.json())
            .then(electronics => setElectronics(electronics))
        , []);
    return(
        <div className="container">
        <ul className = "list-group">
            {
                electronics.map(elecs =>
                    <ElectronicsListItem electronics = {elecs}/>
                )
            }
        </ul>
        </div>
    )
}

export default ElectronicsList;