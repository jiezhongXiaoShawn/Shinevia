import React from "react";
import { useEffect } from "react";
import { Box } from "@mui/material";
import "../css/product.css"; // Ensure this points to your actual CSS file
import QA from "../component/QA";
import Certificate from "./product/certificate";
import ProductList from "./product/productList";
import Solution from "./product/solution";
function Product() {
  const handleDownload = () => {
    console.log("Download button clicked");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Certificate></Certificate>
      <ProductList></ProductList>
      <Solution></Solution>
      <QA />
    </Box>
  );
}

export default Product;
