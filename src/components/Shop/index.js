import { useState } from "react";
import styled from "styled-components";
import NavigationTop from "../NavigationTop/index";
import Products from "../Products/index";
import Footer from "../Footer/Footer";
import { mobile } from "../../responsive";
import SearchBar from "../NavigationTop/SearchBar";

import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

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
  const [keyword, setKeyword] = useState("");
  function onChange(newValue) {
    setKeyword(newValue);
  }
  const [loggedIn, setLoggedIn] = useState("");
  const authListener = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <Container>
      <NavigationTop isLoggedIn={loggedIn} />
      <Title>Shop Electronics</Title>
      <SearchBar keyword={keyword} setKeyword={onChange} />
      <Products category="electronics" keyword={keyword} />
      <br />
      <Footer />
    </Container>
  );
};

export default Shop;
