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
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: ["Microsoft YaHei", '"微软雅黑"', "sans-serif"].join(","),
  },
  // ...其他主题配置
});
const iconPaths = [
  'url(${require("./image/icon1.png")})',
  'url(${require("./image/icon2.png")})',
  'url(${require("./image/icon3.png")})',
];
const sentences = [
  "12 小时内建立多渠道联系 \n通过图片，效果视频或者远程演示等形式 \n展示产品效果",
  "专业的法务团队保障我们的合作 \n高效的注册团队为我们提供注册文件",
  "12 小时内响应，远程视频指导",
];
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box className="home" style={{ fontFamily: "Yahei" }}>
        <Box className="intro" sx={{ position: "relative", height: "100vh" }}>
          <video autoPlay loop muted playsInline className="background-video">
            <source src={require("./video/blue.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box
            className="content"
            sx={{
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: "#fff", mb: 2, display: "flex" }}
            >
              领先技术，人性关怀
            </Typography>
            <Typography sx={{ color: "#fff", mb: 4, display: "flex" }}>
              显微智能,全球唯一能达到三示荧光成像技术的企业，
            </Typography>
            <Button
              variant="contained"
              textAlign="left"
              sx={{
                color: "Gray",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "12px" /* 100% */,
                letterSpacing: "2.4px",
                background: "#000",
                color: "#fff",
                width: "222px",
                height: "71px",
                flexShrink: 0,
                display: "flex",
              }}
            >
              了解更多 →
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end", // Keeps children at the bottom
            alignItems: "flex-end", // Aligns children to the right
            pt: "15rem", // Larger top padding
            pb: "0rem", // Smaller bottom padding
            pr: "7rem", // Right padding (you may adjust this as necessary)
            pl: "7rem", // Left padding (you may adjust this as necessary)
            backgroundImage: `url(${require("./image/background.png")})`,
            backgroundSize: "cover",
            backgroundPosition: "center top -62rem", // This will affect the position of your background image
            height: "300px", // Adjust the height as needed
            width: "100%", // Ensures the Box spans the full width
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: "right",
              paddingRight: "0rem",
            }}
          >
            <Typography variant="h3" gutterBottom>
              我们的产品
            </Typography>
            <Typography variant="body1" gutterBottom>
              中国市场占有率最高的开放式荧光成像产品
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/product"
              sx={{
                color: "Gray",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "12px" /* 100% */,
                letterSpacing: "2.4px",
                background: "#000",
                color: "#fff",
                width: "222px",
                height: "71px",
                flexShrink: 0,
                display: "flex-start",
              }}
            >
              产品目录 →
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            height: "auto",
            backgroundImage: `url(${require("./image/solution.png")})`,
            backgroundSize: "cover",
            padding: "5rem",
            backgroundPosition: "center top -50px",
            color: "white",
            height: "135vh",
          }}
        >
          <Typography variant="h3" gutterBottom textAlign="left">
            企业动态
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 2, whiteSpace: "pre-line" }}
            textAlign="left"
          >
            我们致力于为全人类的健康事业贡献力量，一国产品牌的
            <br />
            担当，微医疗健康事业注入智慧与活力。
          </Typography>
          <Box sx={{ padding: "1rem" }}></Box>
          <Grid container spacing={2}>
            {/* First image placeholders */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  background: "#ccc",
                  backgroundImage: `url(${require("./image/company1.png")})`,
                  backgroundSize: "cover",
                  overflow: "hidden",
                  "&::before": {
                    content: '""', // This creates a pseudo-element
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Start transparent
                    transition: "background-color 0.3s", // Smooth transition for the background color
                  },
                  "&:hover::before": {
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Darken the background on hover
                  },
                  "&:hover .hoverText": {
                    transform: "translateY(0)", // Reset the position to show the text
                  },
                  transition: "transform 0.3s", // Smooth transition for the transform
                }}
              >
                <Typography
                  variant="button"
                  className="hoverText"
                  fontSize="2rem"
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    color: "#fff",
                    transform: "translateY(100px)", // Initially move the text down
                    transition: "transform 0.3s", // Smooth transition for the transform
                  }}
                >
                  显微智能荣获第七届五星奖 →
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  background: "#ccc",
                  backgroundImage: `url(${require("./image/company2.png")})`,
                  backgroundSize: "cover",
                  overflow: "hidden",
                  "&::before": {
                    content: '""', // This creates a pseudo-element
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0)", // Start transparent
                    transition: "background-color 0.3s", // Smooth transition for the background color
                  },
                  "&:hover::before": {
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Darken the background on hover
                  },
                  "&:hover .hoverText": {
                    transform: "translateY(0)", // Reset the position to show the text
                  },

                  transition: "transform 0.3s",
                }}
              >
                <Typography
                  variant="button"
                  className="hoverText"
                  fontSize="2rem"
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    color: "#fff",
                    transform: "translateY(100px)", // Initially move the text down
                    transition: "transform 0.3s", // Smooth transition for the transform
                  }}
                >
                  上海运营管理中心隆重开业 →
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  background: "#ccc",

                  backgroundSize: "cover",
                }}
              >
                {/* Second image placeholder */}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  background: "#ccc",

                  backgroundSize: "cover",
                }}
              >
                {/* Second image placeholder */}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  background: "#ccc",

                  backgroundSize: "cover",
                }}
              >
                {/* Second image placeholder */}
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5rem",
            backgroundImage: `url(${require("./image/background.png")})`,
            backgroundSize: "cover",
            backgroundPosition: "center top -40rem",
          }}
        ></Box>
        <Box
          sx={{
            backgroundImage: `url(${require("./image/service.png")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            height: "150vh",
            py: 20,
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            textAlign="left"
            paddingLeft="10rem"
            fontWeight="bold"
          >
            全流程跟踪
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            textAlign="left"
            paddingLeft="10rem"
          >
            由专业团队执行，提供7*24小时不间断的设备追踪与监控的全流程服务
          </Typography>
          <List>
            {sentences.map((sentence, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{ py: 2, alignItems: "center" }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: "10rem",
                    fontWeight: "bold",
                    mr: 2,
                    paddingLeft: "10rem",
                  }}
                >
                  {index + 1}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontsize: "5rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  {sentence}
                </Typography>
                {/* <Box
                  alt={`Icon ${index + 1}`}
                  sx={{
                    width: 48, // 或者是您想要的图标大小
                    height: 48, // 或者是您想要的图标大小
                    backgrountImage: `url(${require("./image/icon1.png")})`,
                    backgroundSize: "cover",
                  }}
                /> */}
              </ListItem>
            ))}
          </List>
        </Box>

        <QA />
      </Box>
    </ThemeProvider>
  );
};

export default Homepage;
