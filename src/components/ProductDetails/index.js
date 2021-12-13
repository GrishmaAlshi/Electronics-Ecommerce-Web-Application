import React, { useEffect, useState } from "react";
import NavigationTop from "../NavigationTop/index";
import Footer from "../Footer/Footer";
import ProductDetailsComponent from "./ProductDetailsComponent";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  console.log(useParams());
  const id = useParams();
  console.log(id);
  return (
    <>
      <NavigationTop />
      <ProductDetailsComponent item={id.id} />
      <Footer />
    </>
  );
};

export default ProductDetails;
