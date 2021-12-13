import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { getCurrentUser } from "../../firebase";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

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
  width: 40%
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

const CartComponent = () => {

    const [products, setProducts] = useState([]);
    const ELECTRONICS_API = "http://localhost:4000/api/cartProducts";
    const remove_api = "http://localhost:4000/api/removeFromCart";
    const dispatch = useDispatch();
    let total = 0;
    const id = getCurrentUser();

    const removeFromCart = (data) => {
      fetch(`${remove_api}/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(electronics => console.log(electronics));
      window.location.reload(false);
    }  

    const checkout = () => {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let orderData = {};
      orderData.date = date;
      orderData.userid = id;
      orderData.total_amount = total;
      let productID = [];
      products.forEach((prod) => {
        productID = [
          ...productID,
          prod.id
        ]
      });
      orderData.products = productID;
      fetch("http://localhost:4000/api/orders/", {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(electronics => console.log(electronics))
        alert("Order Placed");
        products.forEach((prod) => {
          removeFromCart(prod);
        })
      }
      
    useEffect(
        () =>
            {
              fetch(`${ELECTRONICS_API}/${id}`)
                .then((response) => response.json())
                .then((products) => {setProducts(products);})
            },
        []
    );
    console.log(products);
    {products.map((product) => ( total = total + parseInt(product.price)))}
   
    return (
        <Container>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton1>CONTINUE SHOPPING</TopButton1>
                    <TopText>Your Wishlist</TopText>
                </Top>
                <Bottom>
                    <Info>
                        {products.map((product) => (
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
                                    <button className="btn-danger" onClick={() => removeFromCart(product)}>Remove From Cart</button>
                                </PriceDetail>
                            </Product>

                                      )
                        )
                        }
                    </Info>


                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ {0.05*total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Tax</SummaryItemText>
                            <SummaryItemPrice>$ {0.05*total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {total+0.05*total+0.05*total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button onClick={() => checkout()}>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default CartComponent;