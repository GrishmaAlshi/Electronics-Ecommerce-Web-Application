import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchElectronicById } from "../../services/electronicsService";
import AdminNavbar from "../AdminNavbar";
import './index.css';
import NavigationTop from "../AdminNavbar";

const productDetails = (state) => state.electronics.electronics;

const UpdateDetails = (props) => {
    const {search} = useLocation()
    console.log(search);
    const id = new URLSearchParams(search).get('id')
    console.log(id);
    const ELECTRONICS_API = "http://localhost:4000/api/electronics";
    const [electronics, setElectronics] = useState({model_name: "", highest_price: ""});
    const [inputs, setInputs] = useState({});
    const onPriceChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setElectronics({...electronics, [name] : value});
    } 
    const onQuantityChange = (event) => {
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
                setElectronics(electronics[0])})
        , []);
        console.log(electronics);
    return(
        <div>
            <AdminNavbar/>
            <br></br>
            <div className="container">
            <h1>{electronics.model_name}</h1>
            <form>
                <br></br>
                <div class="form-group">
                    <label for="name">Price</label>
                    <input
                        type="number"
                        class="form-control"
                        aria-describedby="emailHelp"
                        value={electronics.price}
                        name="price"
                        onChange={onPriceChange}
                    />
                </div>
                <br></br>
                <div class="form-group">
                    <label for="name">Quantity</label>
                    <input
                        type="number"
                        class="form-control"
                        aria-describedby="emailHelp"
                        value={electronics.quantity}
                        name="quantity"
                        onChange={onQuantityChange}
                    />
                </div>
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
        </div>
    );
}

export default UpdateDetails;