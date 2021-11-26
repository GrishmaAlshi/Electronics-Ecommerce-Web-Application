import styled from "styled-components";
import NavigationTop from "../NavigationTop/index";
import Products from "../Products/index";
import Footer from "../Footer/Footer";
import { mobile } from "../../responsive";

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

const Shop = () => {
    return (
        <Container>
            <NavigationTop />
            <Title>Shop Electronics</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Electronics
                        </Option>
                        <Option>Laptops</Option>
                        <Option>Mobile Phones</Option>
                        <Option>Smart Wearables</Option>
                        <Option>Tablets</Option>

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
            <Products />
            <br/>
            <Footer />
        </Container>
    );
};

export default Shop;