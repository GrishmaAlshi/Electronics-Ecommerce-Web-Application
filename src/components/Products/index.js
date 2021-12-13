import React from "react";
import styled from "styled-components";
import Product from "../Products/Product/Product";

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
        this.setState({ filteredElectronics: filteredElex });
      });
  }

  render() {
    return (
      <Container>
        {this.state.filteredElectronics.map((elecs) => (
          <Product item={elecs} key={elecs.id} />
        ))}
      </Container>
    );
  }
}

export default Products;
