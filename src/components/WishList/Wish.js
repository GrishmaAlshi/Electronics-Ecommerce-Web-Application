import React from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../../vendors/bootstrap/css/wish.css";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: black;
  font-weight: 700;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton1 = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid white;
  background-color: transparent;
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopButton2 = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: black;
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  color: black;
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
`;

const Details = styled.div`
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  color: black;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  color: black;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  color: black;
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  color: white;
`;

const SummaryItem = styled.div`
  color: white;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

class Wish extends React.Component {
  // const history = useHistory();
  //
  // const backToShop = () =>{
  //     let path = "/shop";
  //     history.push(path);
  // }
  constructor(props) {
    super(props);
    this.state = {
      wishlist: [],
      wishlistProductDetails: [],
      isLoaded: false,
    };
    this.setWish();
  }

  setWish() {
    const email = localStorage.getItem("email");
    return fetch(`http://localhost:4000/api/users/${email}`)
      .then((response) => response.json())
      .then((user) => {
        const wishlist = user.wishlist;
        console.log("Wishlist", wishlist);
        this.setState({ wishlist: wishlist });
        const allProducts = this.getWishListProducts();
        Promise.all(allProducts).then((productDetail) => {
          console.log("PrductDetails", productDetail);
          this.setState({
            wishlistProductDetails: [...productDetail],
            isLoaded: true,
          });
          console.log(this.state);
        });
      });
  }

  getWishListProducts() {
    const wishlist = this.state.wishlist;
    return wishlist.map((product) => {
      return fetch(`http://localhost:4000/api/electronics/${product}`)
        .then((response) => response.json())
        .then((productDetails) => productDetails[0]);
    });
  }

  removeFromWishList(product) {
    console.log(product);
    fetch(`http://localhost:4000/api/wishlist/remove`, {
      method: "PUT",
      body: JSON.stringify({
        id: product.id,
        email: localStorage.getItem("email"),
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((updatedWishlist) => {
        window.location.reload();
      });
  }

  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <Title>YOUR WISHLIST</Title>

            {this.state.isLoaded ? (
              <>
                <Link to="/shop">
                  <Top>
                    <Link
                      to="/shop"
                      style={{
                        "background-color": "#ddd",
                        border: "none",
                        color: "black",
                        padding: "10px 20px",
                        "text-align": "center",
                        "text-decoration": "none",
                        display: "inline-block",
                        margin: "4px 2px",
                        cursor: "pointer",
                        "border-radius": "16px",
                      }}
                    >
                      CONTINUE SHOPPING
                    </Link>
                  </Top>
                </Link>
                <Bottom>
                  <Info>
                    {this.state.wishlistProductDetails.map((product) => (
                      // <Product>
                      //   <ProductDetail>
                      //     <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU" />
                      //     <Details>
                      //       <ProductName>
                      //         {}
                      //         <b>Product:</b> {product.model_name}
                      //       </ProductName>
                      //       <ProductId>
                      //         <b>ID:</b> 93813718293
                      //       </ProductId>
                      //       <ProductColor color="grey" />
                      //       <ProductSize>
                      //         <b>Memory:</b> {product.storage}
                      //       </ProductSize>
                      //     </Details>
                      //   </ProductDetail>
                      //   <PriceDetail>
                      //     <ProductPrice>$ {product.price}</ProductPrice>
                      //   </PriceDetail>
                      // </Product>
                      <Product>
                        <ProductDetail>
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU" />
                          <Details>
                            <ProductName>
                              <b>Brand:</b> {product.brand}
                            </ProductName>
                            <ProductId>
                              <b>Model:</b> {product.model_name}
                            </ProductId>
                            <ProductSize>
                              <b>Storage:</b> {product.storage}
                            </ProductSize>
                            <ProductSize>
                              <b>Screen Size:</b> {product.screen_size}
                            </ProductSize>
                          </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <ProductPrice>$ {product.price}</ProductPrice>
                          <button
                            className="btn-danger"
                            onClick={() => this.removeFromWishList(product)}
                          >
                            Remove From Wishlist
                          </button>
                        </PriceDetail>
                      </Product>
                    ))}
                  </Info>
                </Bottom>
              </>
            ) : (
              <div className="spinner-container">
                <Spinner animation="border" />
              </div>
            )}
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default Wish;
