import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { useState } from "react";
// 假设 "../css/navbar.css" 中定义了一些基本的样式，例如 .nav-link 的样式
import "../css/navbar.css";
import Contact from "../page/Contact";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" sx={{ background: "#001144", color: "#fff" }}>
      <Toolbar sx={{ minHeight: { xs: "100px", sm: "150px", lg: "180px" } }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          component={RouterLink}
          to="/"
          sx={{
            width: { xs: "94px", sm: "189px", lg: "220px" },
            height: { xs: "44px", sm: "88px", lg: "100px" },
          }}
        >
          <img
            src="/component/Navigation.png"
            alt="logo"
            style={{ width: "100%", height: "100%" }} // 使图标响应式
          />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        {/* Navigation Links - Center */}
        <Box
          sx={{
            flexGrow: 2,
            display: { xs: "none", md: "flex" }, // 移动视图时隐藏
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
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            background: "#000",
            width: { xs: "150px", sm: "251px", lg: "300px" }, // 响应式宽度
            height: { xs: "50px", sm: "75px", lg: "90px" }, // 响应式高度
            borderRadius: "5px",
            fontFamily: "Microsoft YaHei , sans-serif",
            "&:hover": {
              background: "#fff",
              color: "#000",
            },
            fontWeight: "700",
            fontSize: "clamp(0.7rem, 1vw, 1rem)", // 调整大屏幕上的最大字体大小
          }}
        >
          联络方式
        </Button>
        <Contact open={open} handleClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
}
