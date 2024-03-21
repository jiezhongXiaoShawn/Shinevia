import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link as RouterLink, NavLink } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <AppBar position="static" style={{ background: "#001144", color: "#fff" }}>
      <Toolbar style={{ minHeight: "150px" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          component={RouterLink}
          to="/"
        >
          <img
            src="/component/Navigation.png"
            alt="logo"
            height={"88px"}
            width={"189px"}
          />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        {/* Navigation Links - center */}
        <Box
          sx={{
            flexGrow: 2,
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <NavLink to="/about" className="nav-link">
            关于我们
          </NavLink>
          <NavLink to="/product" className="nav-link">
            产品中心
          </NavLink>
          <NavLink to="/news" className="nav-link">
            新闻中心
          </NavLink>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          sx={{
            background: "#000",
            width: "251px",
            height: "75px",
            //padding: "10px",
            gap: "10px",
            borderRadius: "5px",
            fontFamily: "Microsoft YaHei , sans-serif",
            "&:hover": {
              background: "#fff",
              color: "#000",
            },
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
