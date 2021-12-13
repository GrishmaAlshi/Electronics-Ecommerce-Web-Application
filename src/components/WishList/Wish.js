import React from 'react';
import {Add, Remove} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";
import {useHistory} from "react-router-dom";

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
  ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
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
  ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
color: white;
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "20px"})}
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
            wishlistProductDetails: []
        }
        this.setWish()

    }

    setWish() {
        const email = localStorage.getItem("email");
        return fetch(`http://localhost:4000/api/users/${email}`)
            .then((response) => response.json())
            .then(user => {
                const wishlist = user.wishlist;
                console.log("Wishlist",wishlist)
                this.setState({wishlist: wishlist})
                const allProducts = this.getWishListProducts()
                Promise.all(allProducts).then(productDetail => {
                    console.log("PrductDetails", productDetail)
                    this.setState({wishlistProductDetails: [...productDetail]})
                    console.log(this.state)
                })
            })
    }

    getWishListProducts() {
        const wishlist = this.state.wishlist
        return wishlist.map((product => {
            return fetch(`http://localhost:4000/api/electronics/${product}`)
                .then((response) => response.json())
                .then(productDetails => productDetails[0])
        }))
    }

    render() {
        return (
            <>
                <Container>
                    <Wrapper>
                        <Title>YOUR WISHLIST</Title>
                        <Top>
                            <TopButton1>CONTINUE SHOPPING</TopButton1>
                        </Top>
                        <Bottom>
                            <Info>
                                {this.state.wishlistProductDetails.map((product) => (

                                    <Product>
                                        <ProductDetail>
                                            <Image
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU"/>
                                            <Details>
                                                <ProductName>
                                                    {}
                                                    <b>Product:</b> {product.model_name}
                                                </ProductName>
                                                <ProductId>
                                                    <b>ID:</b> 93813718293
                                                </ProductId>
                                                <ProductColor color="grey"/>
                                                <ProductSize>
                                                    <b>Memory:</b> {product.storage}
                                                </ProductSize>
                                            </Details>
                                        </ProductDetail>
                                        <PriceDetail>
                                            <ProductPrice>$ {product.price}</ProductPrice>
                                        </PriceDetail>
                                    </Product>

                                    // <Product item={product} key={product._id} />
                                ))}
                                {/*const wishList= electronics.map((product)=>*/}
                                {/*<div key={product.id}>*/}
                                {/*    <ProductDetail>*/}
                                {/*        <Image*/}
                                {/*            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU"/>*/}
                                {/*        <Details>*/}
                                {/*            <ProductName>*/}
                                {/*                <b>Product:</b> {product.name}*/}
                                {/*            </ProductName>*/}
                                {/*            <ProductId>*/}
                                {/*                <b>ID:</b> {product.id}*/}
                                {/*            </ProductId>*/}
                                {/*            <ProductColor color="grey"/>*/}
                                {/*            <ProductSize>*/}
                                {/*                <b>Memory:</b> {product.memory}*/}
                                {/*            </ProductSize>*/}
                                {/*        </Details>*/}
                                {/*    </ProductDetail>*/}
                                {/*    <PriceDetail>*/}
                                {/*        <ProductPrice>$ 999</ProductPrice>*/}
                                {/*    </PriceDetail>*/}
                                {/*</div>*/}
                                {/*)*/}


                                {/*<Product>*/}
                                {/*    <ProductDetail>*/}
                                {/*        <Image*/}
                                {/*            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU"/>*/}
                                {/*        <Details>*/}
                                {/*            <ProductName>*/}
                                {/*                {}*/}
                                {/*                <b>Product:</b> MacBook Pro*/}
                                {/*            </ProductName>*/}
                                {/*            <ProductId>*/}
                                {/*                <b>ID:</b> 93813718293*/}
                                {/*            </ProductId>*/}
                                {/*            <ProductColor color="grey"/>*/}
                                {/*            <ProductSize>*/}
                                {/*                <b>Memory:</b> 1 TB*/}
                                {/*            </ProductSize>*/}
                                {/*        </Details>*/}
                                {/*    </ProductDetail>*/}
                                {/*    <PriceDetail>*/}
                                {/*        <ProductPrice>$ 999</ProductPrice>*/}
                                {/*    </PriceDetail>*/}
                                {/*</Product>*/}
                                {/*<Hr/>*/}
                                {/*<Product>*/}
                                {/*    <ProductDetail>*/}
                                {/*        <Image*/}
                                {/*            src="data:image/jpeg;base64,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"/>*/}
                                {/*        <Details>*/}
                                {/*            <ProductName>*/}
                                {/*                <b>Product:</b> Dell XPS*/}
                                {/*            </ProductName>*/}
                                {/*            <ProductId>*/}
                                {/*                <b>ID:</b> 93813718293*/}
                                {/*            </ProductId>*/}
                                {/*            <ProductColor color="white"/>*/}
                                {/*            <ProductSize>*/}
                                {/*                <b>Memory:</b> 2TB*/}
                                {/*            </ProductSize>*/}
                                {/*        </Details>*/}
                                {/*    </ProductDetail>*/}
                                {/*    <PriceDetail>*/}
                                {/*        <ProductPrice>$ 600</ProductPrice>*/}
                                {/*    </PriceDetail>*/}
                                {/*</Product>*/}


                            </Info>
                        </Bottom>
                    </Wrapper>
                </Container>

            </>

        );
    }
}

export default Wish;