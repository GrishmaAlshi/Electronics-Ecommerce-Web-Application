
import React, {useEffect, useState} from "react";
import {popularProducts} from "../../data/products";
import Product from "../Products/Product/Product";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Orders = () => {

    return (
        <>
            <Container>
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </Container>
        </>
    )
}

export default Orders;

