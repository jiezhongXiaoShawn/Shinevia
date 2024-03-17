import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
export default function Navbar() {
  return (
    <AppBar position="static" style={{ background: "#001144", color: "#fff" }}>
      <Toolbar style={{ minHeight: "150px" }}>
        {/* Logo/Title - align left */}
        {/* <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ color: "inherit", textDecoration: "none" }}
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Shinevia
        </Typography> */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          component={RouterLink}
          to="/"
        >
          <img src="Navbar.png" alt="logo" />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        {/* Navigation Links - center */}
        <Box sx={{ flexGrow: 1.5, display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              color: " #EAF3FB",
              fontFamily: "Heiti SC",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "12px" /* 75% */,
            }}
            component={RouterLink}
            to="/about"
          >
            关于我们
          </Button>
          <Button
            sx={{
              color: " #EAF3FB",
              fontFamily: "Heiti SC",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "12px" /* 75% */,
            }}
            component={RouterLink}
            to="/product"
          >
            产品中心
          </Button>
          {/* <Button color="inherit" component={RouterLink} to="/solutions">
            Solutions
          </Button> */}
          <Button
            sx={{
              color: " #EAF3FB",
              fontFamily: "Heiti SC",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "12px" /* 75% */,
            }}
            component={RouterLink}
            to="/support"
          >
            服务中心
          </Button>
        </Box>
        {/* Spacing Box - align right */}
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          sx={{ ml: 2 }}
          style={{
            background: "#000",
            width: "251px",
            height: "75px",
            padding: "10px",
            gap: "10px",
            borderRadius: "5px",
          }}
          component={RouterLink}
          to="/"
        >
          联络方式
        </Button>
      </Toolbar>
    </AppBar>
  );
}
