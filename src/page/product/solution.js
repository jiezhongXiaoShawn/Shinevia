import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
const ProductTheme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          padding: "0.4rem",
          //marginRight: "0.2rem",
          width: "25%", // 控制Tab的宽度
          height: "90vh", // 控制Tab的高度
          fontSize: "2rem",
          display: "flex", // 使Tab内容居中
          flexDirection: "column", // 排列方向
          justifyContent: "center", // 垂直居中
          alignItems: "center", // 水平居中
          // transition: "opacity 0.5s ease",
          // // "&:hover": {
          // //   opacity: 1, // 鼠标悬停时背景不变暗
          // // },
        },
      },
    },
  },
});
const CustomTabLabel = ({ backgroundUrl, label, hoverText }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        // transition: "background-color 0.5s ease",
        "&:hover": {
          // 鼠标悬停时变暗
          // "& .background-overlay": {
          //   bacjgroundColor: "rgba(0, 0, 0, 0.5)", // 鼠标悬停时变暗
          // },
          "& .hover-text": {
            visibility: "visible",
            opacity: 1,
          },
        },
      }}
    >
      {/* 背景遮罩层 */}
      <Box
        className="background-overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "rgba(0, 0, 0, 0)", // 初始不变暗
          transition: "background-color 0.7s ease",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
          },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="600"
          color="common.white"
          alignItems={"center"}
          textAlign={"center"}
          justifyContent={"center"}
          sx={{ zIndex: 2 }}
        >
          {label}
        </Typography>

        {/* 悬停文本 */}
        <Box
          className="hover-text"
          sx={{
            transition: "visibility 0s, opacity 0.7s ease",
            visibility: "hidden",
            opacity: 0,
            position: "absolute",
            bottom: 50,
            width: "80%",
            textAlign: "left",
            //backgroundColor: "transparent",
            color: "white",
            //transition: "visibility 0s, opacity 0.5s ease",
            //zIndex: 2,
            p: 1, // 添加内边距
            fontSize: "1rem",
            fontWeight: "400",
            //paddingBottom: "3rem",
          }}
        >
          {hoverText.split("\\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const Solution = () => {
  return (
    <ThemeProvider theme={ProductTheme}>
      <Box
        sx={{
          position: "relative",
          backgroundImage: 'url("/product/product.png")',
          backgroundSize: "cover",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          paddingRight: "0px",
          paddingLeft: "40px",
          //backgroundPosition: "center top ",
          color: "white",
          height: "120vh",
          fontWeight: "600",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            gutterBottom
            textAlign="left"
            fontWeight={"600"}
          >
            专业科室方案定制
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
          <Tabs
            width="100%"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab
              label={
                <CustomTabLabel
                  backgroundUrl="/product/腔镜.png"
                  label="腔镜外科"
                  hoverText="-\n3D腹腔镜:还原真实视觉手术视野，精细辨别组织结构,减少术中损伤。\n \n荧光腔镜:实时定位导航，智能腔镜技术,无限拓展"
                />
              }
            />
            <Tab
              label={
                <CustomTabLabel
                  backgroundUrl="/product/肝胆.png"
                  label="肝胆外科"
                  hoverText="-\n解剖性肝段切除术中肝段定位；肿瘤位置、边缘，微小卫星灶及复杂胆道\n\n识别，肝切除创面的修复；肝移植术中血管、胆道吻合效果的评估"
                />
              }
            />
            <Tab
              label={
                <CustomTabLabel
                  backgroundUrl="/product/肠胃.png"
                  label="胃肠外科"
                  hoverText="-\n胃肠道吻合口血流灌注评估;肿瘤术中导航定位，淋巴结实时导航"
                />
              }
            />

            <Tab
              label={
                <CustomTabLabel
                  backgroundUrl="/product/胸外科.png"
                  label="胸外科"
                  hoverText="-\n肺叶、肺段边界识别;肺结节和肺癌病灶定位;淋巴结示踪;食管癌吻合口 血供评估;胸导管术中显像和乳糜胸的治疗;胸交感神经节定位"
                />
              }
            />
            <Tab
              label={
                <CustomTabLabel
                  backgroundUrl="/product/妇科.png"
                  label="妇科"
                  hoverText="-\n宫颈、内膜癌、外阴癌的前哨淋巴结示踪;子宫内膜异位症中病灶定位，确 定肠管切除范围及输尿管荧光定位保护等"
                />
              }
            />
            <Tab
              label={
                <CustomTabLabel
                  backgroundUrl="/product/甲乳.png"
                  label="甲乳外科"
                  hoverText="-\n甲状旁腺识别与定位;甲状旁腺血运评估;乳腺肿瘤定位，前哨淋巴结示踪"
                />
              }
            />
          </Tabs>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Solution;
