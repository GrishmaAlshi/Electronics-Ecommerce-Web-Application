import React from "react";
import styled from "styled-components";
import Product from "../Products/Product/Product";
import "../../vendors/bootstrap/css/wish.css";
import { Spinner } from "react-bootstrap";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      electronics: [],
      filteredElectronics: [],
      isLoaded: false,
    };
    this.setElectronics();
  }

  componentDidUpdate(prevProps, prevData) {
    if (prevProps["keyword"] && prevProps["keyword"] != this.props.keyword) {
      const filteredElex = this.state.electronics.filter(
        (e) =>
          e["brand"].toLowerCase().includes(this.props.keyword.toLowerCase()) ||
          e["model_name"]
            .toLowerCase()
            .includes(this.props.keyword.toLowerCase())
      );
      this.setState({ filteredElectronics: filteredElex });
    }
  }

  setElectronics() {
    fetch(`http://localhost:4000/api/${this.props.category}`)
      .then((response) => response.json())
      .then((electronics) => {
        console.log(electronics);
        this.setState({ electronics: electronics });
        const filteredElex = electronics.filter((e) => {
          return e["brand"]
            .toLowerCase()
            .includes(this.props.keyword.toLowerCase());
        });
        this.setState({ filteredElectronics: filteredElex, isLoaded: true });
      });
  }

  render() {
    return (
      <Container>
        {this.state.isLoaded ? (
          this.state.filteredElectronics.map((elecs) => (
            <Product item={elecs} key={elecs.id} />
          ))
        ) : (
          <div className="spinner-container">
            <Spinner animation="border" />
          </div>
        )}
      </Container>
    );
  }
}

export default Products;
