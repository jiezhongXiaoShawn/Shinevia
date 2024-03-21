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
const theme = createTheme({
  Typography: {
    fontFamily: ["Microsoft YaHei", '"微软雅黑"', "sans-serif"].join(","),
  },
});

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
    </ThemeProvider>
  );
};

export default Homepage;
