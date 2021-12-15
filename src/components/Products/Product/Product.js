import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import ProductList from "./ProductList";
import ProductDetails from "../../ProductDetails";
import ProductDetailsComponent from "../../ProductDetails/ProductDetailsComponent";
import { getCurrentUser } from "../../../firebase";
import { useHistory } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  z-index: 1;
`;

const Details = styled.div`
  justify-content: center;
  z-index: 2;
  overflow: hidden;
  padding-top: 270px;
  margin-left: -150px;
  font-weight: bold;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const ELECTRONICS_API = "http://localhost:4000/api/addToCart";
  const history = useHistory();
  const id = getCurrentUser();
  const isLoggedin = id === null ? false : true;
  console.log(id);

  const onClickProduct = () => {
    let path = "/productDetails/" + item.id;
    console.log(path);
    history.push(path);
    // console.log(item);
    // return <ProductDetailsComponent id={item}/>
  };

  const addToCart = () => {
    if (!isLoggedin) {
      history.push("/login");
    } else {
      fetch(`${ELECTRONICS_API}/${id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data + "Added to cart"));
    }
  };

  const onClickFav = () => {
    console.log("Wishlist updated");
    let path = "/wishlist";
    fetch("http://localhost:4000/api/users/updateWishlist/", {
      method: 'PUT',
      body: JSON.stringify({
        id: item.id,
        email: localStorage.getItem("email"),
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((productDetails) => {
        history.push(path);
      })
      .catch((err) => {
        console.log(err);
      })
      ;
  };

  return (
    <Container>
      {/*<Circle />*/}
      <Image
        src={item.img1}
        style={{ "margin-left": "-50px", width: "200px", height: "200px" }}
      />
      <Details className="row">{item.model_name}</Details>

      <Info>
        <Icon>
          <ShoppingCartOutlined onClick={addToCart} />
        </Icon>
        <Icon>
          <SearchOutlined onClick={onClickProduct} />
        </Icon>
        {isLoggedin && (
          <Icon>
            <FavoriteBorderOutlined onClick={onClickFav} />
          </Icon>
        )}
      </Info>
    </Container>
  );
};

export default Product;
