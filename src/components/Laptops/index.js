import styled from "styled-components";
import NavigationTop from "../NavigationTop/index";
import Products from "../Products/index";
import Footer from "../Footer/Footer";
import { mobile } from "../../responsive";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../NavigationTop/SearchBar";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Laptops = () => {
  const [keyword, setKeyword] = useState("");
  function onChange(newValue) {
    console.log(newValue);
    setKeyword(newValue);
  }
  return (
    <Container>
      <NavigationTop />
      <Title>Shop Laptops</Title>
        <SearchBar keyword={keyword} setKeyword={onChange} />
      <Products category="laptops" keyword={keyword} />
      <br />
      <Footer />
    </Container>
  );
};

export default Laptops;
