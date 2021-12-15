import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { Carousel } from "react-bootstrap";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getCurrentUser } from "../../firebase";
import history from "../../history";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 600px;
  height: 40vh;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h2`
  font-weight: 700;
  color: black;
`;
const Desc = styled.p`
  font-size: 16px;
  color: white;
  margin: 20px 0px;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 400;
  color: white;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: white;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  font-size: 14px;
`;

const Quantity = styled.div`
  color: red;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  color: white;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid white;
  background-color: black;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: grey;
  }
`;

const Reviews = styled.div``;

const heading = styled.head`
  width: 100%;
`;

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
};

const ProductDetailsComponent = ({ item }) => {
  const [isLoaded, setLoaded] = useState(false);
  const ELECTRONICS_API = "http://localhost:4000/api/electronics";
  const CART_API = "http://localhost:4000/api/addToCart";
  const [electronics, setElectronics] = useState([]);
  const dispatch = useDispatch();
  const [review, setReview] = useState([]);

  useEffect(
    () =>
      fetch(`${ELECTRONICS_API}/${item}`)
        .then((response) => response.json())
        .then((electronics) => {
          setElectronics(electronics);
          setLoaded(true);
          setReview(electronics[0].reviews);
        }),
    []
  );
  //   const history = useHistory();
  const id = getCurrentUser();
  const isLoggedin = id === null ? false : true;
  const addToCart = () => {
    if (!isLoggedin) {
      history.push("/login");
    } else {
      fetch(`${CART_API}/${id}`, {
        method: "PUT",
        body: JSON.stringify(electronics[0]),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data + "Added to cart"));
    }
  };
  return (
    <>
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image
              className="d-block w-150"
              src={electronics.map((elec) => elec.img1)}
              alt="First slide"
            ></Image>
          </ImgContainer>
          <InfoContainer>
            <Title style={{ "font-size": "35px" }}>
              {electronics.map((elec) => elec.brand)} -{" "}
              {electronics.map((elec) => elec.model_name)}
            </Title>
            <Desc>{electronics.map((elec) => elec.gpu)}</Desc>
            <Price>${electronics.map((elec) => elec.price)}</Price>
            <Quantity>
              {electronics.map((elec) =>
                elec.quantity
                  ? parseInt(elec.quantity) > 0 && parseInt(elec.quantity) <= 5
                    ? `Hurry up! Only ${elec.quantity} left in stock.`
                    : ""
                  : ""
              )}
            </Quantity>
            <Desc>
              Operating System:{" "}
              {electronics.map((elec) => elec.operating_system)}
            </Desc>
            <Desc>Ram: {electronics.map((elec) => elec.ram)}</Desc>
            <Desc>
              Screen Size: {electronics.map((elec) => elec.screen_size)}
            </Desc>
            <Desc>Storage: {electronics.map((elec) => elec.storage)}</Desc>
            <Button onClick={() => addToCart()}>ADD TO CART</Button>
          </InfoContainer>
        </Wrapper>
      </Container>

      <h2 style={{ color: "white" }}>Reviews</h2>
      {review.length !== 0 && (
        <ul className="list-group">
          {review.map((rev) => (
            <li className="list-group-item">{rev}</li>
          ))}
        </ul>
      )}

      <br />
    </>
  );
};

export default ProductDetailsComponent;
