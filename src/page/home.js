import React from "react";
import { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  List,
  ListItem,
  Container,
  ListItemText,
  Divider,
} from "@mui/material";
import "../css/home.css";
import { Link as RouterLink } from "react-router-dom";
import QA from "../component/QA";
import Intro from "./homepage/intro";
import OurProduct from "./homepage/ourproduct";
import New from "./homepage/new";
import Service from "./homepage/service";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Test from "./test";
const theme = createTheme({
  Typography: {
    fontFamily: ["Microsoft YaHei", '"微软雅黑"', "sans-serif"].join(","),
  },
});

const departments = [
  {
    imageUrl: "/product/肠胃.png",
    title: "普外科",
    description: "专注于腹部的手术治疗。",
  },
  {
    imageUrl: "/product/肝胆.png",
    title: "儿科",
    description: "提供儿童及青少年的医疗服务。",
  },
  {
    imageUrl: "/product/肠胃.png",
    title: "神经外科",
    description: "治疗神经系统相关疾病。",
  },
  {
    imageUrl: "/product/肝胆.png",
    title: "心血管外科",
    description: "专业的心脏和血管治疗。",
  },
  {
    imageUrl: "/product/肠胃.png",
    title: "神经外科",
    description: "治疗神经系统相关疾病。",
  },
  // ...更多科室
];

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Intro></Intro>
      <OurProduct></OurProduct>
      <New></New>
      <Box sx={{ padding: "1rem" }}></Box>
      <Service></Service>
      <QA></QA>
      {/* <Test departments={departments} /> */}
    </ThemeProvider>
  );
};

export default Homepage;
