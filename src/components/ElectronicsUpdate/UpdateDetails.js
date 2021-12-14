import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchElectronicById } from "../../services/electronicsService";
import AdminNavbar from "../AdminNavbar";
import './index.css';

const productDetails = (state) => state.electronics.electronics;

const UpdateDetails = () => {
    const {id} = useParams();
    console.log(id);
    const ELECTRONICS_API = "http://localhost:4000/api/electronics";
    const [electronics, setElectronics] = useState({model_name: "", highest_price: ""});
    const [inputs, setInputs] = useState({});
    // const dispatch = useDispatch();
    // useEffect(() => fetchElectronicById(dispatch, id.id), []);
    // const onQuantityChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setElectronics({...electronics, [name] : value});
    // } 
    const onPriceChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setElectronics({...electronics, [name] : value});
    } 
    const submitHandler =() => {
        fetch(`${ELECTRONICS_API}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(electronics),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(electronics => console.log(electronics));
    };
    useEffect(() =>  
        fetch(`${ELECTRONICS_API}/${id}`)
            .then(response => response.json())
            .then(electronics => {
                setElectronics(electronics)})
        , []);
   console.log()
    return(
        <div>
            <AdminNavbar/>
            <label>Model Name</label>
            <input type = "text" value = {electronics.model_name}></input>
            <br></br>
            <form>
            {/* <label>Quantity</label>
            <input type = "number" 
                value = "10"
                name="quantity"
                onChange ={onQuantityChange}
                ></input> */}
                <br></br>
            <label>Price</label>
            <input type = "number" 
                value = {electronics.highest_price} 
                name='highest_price'
                onChange ={onPriceChange}
                ></input>
            <div className = "btn">
                <Link to="/admin/update" onClick={submitHandler}>
                    Save
                </Link>
            </div>
            <div className="btn">
                <Link to="/admin/update">
                    Cancel
                </Link>
            </div>
            </form>
        </div>
    );
}

export default UpdateDetails;