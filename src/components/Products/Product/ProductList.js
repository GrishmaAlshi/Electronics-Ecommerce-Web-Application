import React from "react";
import { useDispatch } from "react-redux";

const ProductList = ({electronics}) => {
    const dispatch = useDispatch();
    return(
        <li className="list-group-item">
            {electronics.brand_name}
        </li>
    )
}

export default ProductList;