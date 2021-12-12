import styled from "styled-components";
// import { popularProducts } from "../../data/products";
import Product from "../Products/Product/Product";
// import {fetchAllElectronics} from "../../fromservices/electronicsService";
import { useEffect, useState } from "react";
import * as electronicsService from "../../services/electronicsService";
import { fetchAllElectronics } from "../../services/electronicsService";
import { Provider, useDispatch, useSelector } from "react-redux";
import ProductList from "./Product/ProductList";

const selectAllElectronics = (state) => state.electronics.electronics;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, keyword }) => {
  console.log("Cat", category);
  //   const electronics = useSelector(selectAllElectronics);
  // const dispatch = useDispatch();
  //   useEffect(() => fetchAllElectronics(dispatch), []);
  const [electronics, setElectronics] = useState([]);

  // electronics = useSelector(selectAllElectronics);
  const dispatch = useDispatch();
  console.log("====", keyword)
  useEffect(
    () =>
      fetch(`http://localhost:4000/api/${category}`)
        .then((response) => response.json())
        .then((electronics) => {
            console.log(electronics)
            const filteredElectronics = electronics.filter(e=>
                e['brand'].includes(keyword)

            )
          dispatch({
            type: "fetch-all-electronics",
              filteredElectronics,
          });
          setElectronics(filteredElectronics);
        }),
    []
  );

  return (
    <Container>
      {electronics.map((elecs) => (
        <Product item={elecs} key={elecs._id} />
      ))}
    </Container>
  );
};

export default Products;
