import styled from "styled-components";
import NavigationTop from "../NavigationTop/index";
import Products from "../Products/index";
import Footer from "../Footer/Footer";
import { mobile } from "../../responsive";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllElectronics } from "../../services/electronicsService";

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

const Laptops = ({keyword}) => {
  return (
    <Container>
      <NavigationTop />
      <Title>Shop Laptops</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option defaultValue="electronics">All</Option>
            <Option value="laptops">Laptops</Option>
            <Option value="mobiles">Mobile Phones</Option>
            {/* <Option>Smart Wearables</Option>
            <Option>Tablets</Option> */}
          </Select>
          <Select>
            <Option disabled selected>
              Brands
            </Option>
            <Option>Apple</Option>
            <Option>Samsung</Option>
            <Option>Nokia</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Lowest to Highest Price</Option>
            <Option>Highest to Lowest Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category="laptops" keyword={keyword}/>
      <br />
      <Footer />
    </Container>
  );
};

export default Laptops;
