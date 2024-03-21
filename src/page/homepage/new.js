import { Container, Typography, Box, Grid, CardMedia } from "@mui/material";
import { useState } from "react";
const New = () => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      sx={{
        backgroundImage: "url(/homepage/new.png)",
        backgroundSize: "cover",
      }}
    >
      <Container
        sx={{ display: "flex", flexDirection: "column", color: "#FFF" }}
      >
        <Typography
          variant="h3"
          textAlign={"left"}
          fontWeight={"600"}
          marginTop={"69px"}
        >
          企业动态
        </Typography>
        <Typography
          variant="h6"
          textAlign={"left"}
          width={"50%"}
          marginTop={"15px"}
        >
          我们致力于为全人类的健康事业贡献力量，一国产品牌的担当，微医疗健康事业注入智慧与活力。
        </Typography>

        <Grid
          container
          rowSpacing={"21px"}
          columnSpacing={"28px"}
          marginTop={"90px"}
          marginBottom={"65px"}
        >
          <Grid
            item
            xs={6}
            sx={{
              position: "relative",
              width: "100%", // 确保宽度适配
              "&:hover .MuiCardMedia-root": {
                filter: "brightness(50%)", // 鼠标悬停时图片变暗
              },
              "&:hover .text-overlay": {
                opacity: 1, // 鼠标悬停时显示文字
                transform: "translateY(0)", // 文字上移
              },
            }}
          >
            <CardMedia
              variant="outlined"
              component="img"
              sx={{
                width: "100%",
                height: "100%",
              }}
              image="/homepage/Rectangle 1.png"
              alt="Medical Device"
            ></CardMedia>
            <Box
              className="text-overlay"
              sx={{
                position: "absolute",
                bottom: "0", // 文字起始在底部
                width: "70%",
                height: "50%", // 文字宽度与容器相同
                //bgcolor: "rgba(0, 0, 0, 0.5)", // 半透明背景
                color: "white", // 文字颜色
                opacity: 0, // 默认隐藏文字
                transition: "opacity 0.5s ease, transform 0.5s ease", // 平滑过渡
                transform: "translateY(100%)", // 初始状态文字被隐藏
              }}
            >
              <Container display={"flex"} flexDirection={"column"} sx={{}}>
                <Typography variant="body1" textAlign="left">
                  显微智能内窥镜荣获2022年度五星奖十佳产品提名奖,
                  显微智能4K内窥镜荧光摄像系统欧盟CE认证通过。
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600" }}
                  textAlign={"left"}
                >
                  显微智能荣获第七届五星奖
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              position: "relative",
              width: "100%", // 确保宽度适配
              "&:hover .MuiCardMedia-root": {
                filter: "brightness(50%)", // 鼠标悬停时图片变暗
              },
              "&:hover .text-overlay": {
                opacity: 1, // 鼠标悬停时显示文字
                transform: "translateY(0)", // 文字上移
              },
            }}
          >
            <CardMedia
              variant="outlined"
              component="img"
              sx={{ width: "100%", height: "100%" }}
              image="/homepage/Rectangle 2.png"
              alt="Medical Device"
            ></CardMedia>
            <Box
              className="text-overlay"
              sx={{
                position: "absolute",
                bottom: "0", // 文字起始在底部
                width: "70%",
                height: "50%", // 文字宽度与容器相同
                //bgcolor: "rgba(0, 0, 0, 0.5)", // 半透明背景
                color: "white", // 文字颜色
                opacity: 0, // 默认隐藏文字
                transition: "opacity 0.5s ease, transform 0.5s ease", // 平滑过渡
                transform: "translateY(100%)", // 初始状态文字被隐藏
              }}
            >
              <Container display={"flex"} flexDirection={"column"} sx={{}}>
                <Typography variant="body1" textAlign="left">
                  上海管理运营中心将满载着各位领导、各位股东、各位朋友的厚爱与期待，同时也满载着显微智能全体员工的理想和信念正式起航。
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600" }}
                  textAlign={"left"}
                >
                  上海运营管理中心隆重开业
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              position: "relative",
              width: "100%", // 确保宽度适配
              "&:hover .MuiCardMedia-root": {
                filter: "brightness(50%)", // 鼠标悬停时图片变暗
              },
              "&:hover .text-overlay": {
                opacity: 1, // 鼠标悬停时显示文字
                transform: "translateY(0)", // 文字上移
              },
            }}
          >
            <CardMedia
              variant="outlined"
              component="img"
              sx={{ width: "100%", height: "100%" }}
              image="/homepage/Rectangle 3.png"
              alt="Medical Device"
            ></CardMedia>
            <Box
              className="text-overlay"
              sx={{
                position: "absolute",
                bottom: "0", // 文字起始在底部
                width: "70%",
                height: "70%", // 文字宽度与容器相同
                //bgcolor: "rgba(0, 0, 0, 0.5)", // 半透明背景
                color: "white", // 文字颜色
                opacity: 0, // 默认隐藏文字
                transition: "opacity 0.5s ease, transform 0.5s ease", // 平滑过渡
                transform: "translateY(100%)", // 初始状态文字被隐藏
              }}
            >
              <Container display={"flex"} flexDirection={"column"} sx={{}}>
                <Typography variant="body1" textAlign="left">
                  杨聪先生带领的团队始终把“技术创新”放在首位，原研首创的皮摩尔级超高灵敏度图像探测器全球领先，为现代精准外科的发展献上了重要实践和理论支持。
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600" }}
                  textAlign={"left"}
                >
                  显微智能总经理杨聪先生被评为
                  “山东省泰山产业领军人才创业领军人才”
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              position: "relative",
              width: "100%", // 确保宽度适配
              "&:hover .MuiCardMedia-root": {
                filter: "brightness(50%)", // 鼠标悬停时图片变暗
              },
              "&:hover .text-overlay": {
                opacity: 1, // 鼠标悬停时显示文字
                transform: "translateY(0)", // 文字上移
              },
            }}
          >
            <CardMedia
              variant="outlined"
              component="img"
              sx={{ width: "100%", height: "100%" }}
              image="/homepage/Rectangle 4.png"
              alt="Medical Device"
            ></CardMedia>
            <Box
              className="text-overlay"
              sx={{
                position: "absolute",
                bottom: "0", // 文字起始在底部
                width: "70%",
                height: "90%", // 文字宽度与容器相同
                //bgcolor: "rgba(0, 0, 0, 0.5)", // 半透明背景
                color: "white", // 文字颜色
                opacity: 0, // 默认隐藏文字
                transition: "opacity 0.5s ease, transform 0.5s ease", // 平滑过渡
                transform: "translateY(100%)", // 初始状态文字被隐藏
              }}
            >
              <Container display={"flex"} flexDirection={"column"} sx={{}}>
                <Typography variant="body1" textAlign="left">
                  '内镜十大品牌”荣誉的获得，充分展现了显微智能多年来在自主创新方面的卓越成就。我们深知技术创新源自人才强盛，多年来显微智能汇聚了一批业界顶尖的人才团队，是公司发展的核心竞争力所在。
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600" }}
                  textAlign={"left"}
                >
                  显微智能荣获2023中国内镜十大品牌
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              position: "relative",
              width: "100%", // 确保宽度适配
              "&:hover .MuiCardMedia-root": {
                filter: "brightness(50%)", // 鼠标悬停时图片变暗
              },
              "&:hover .text-overlay": {
                opacity: 1, // 鼠标悬停时显示文字
                transform: "translateY(0)", // 文字上移
              },
            }}
          >
            <CardMedia
              variant="outlined"
              component="img"
              sx={{ width: "100%", height: "100%" }}
              image="/homepage/Rectangle 5.png"
              alt="Medical Device"
            ></CardMedia>
            <Box
              className="text-overlay"
              sx={{
                position: "absolute",
                bottom: "0", // 文字起始在底部
                width: "70%",
                height: "90%", // 文字宽度与容器相同
                //bgcolor: "rgba(0, 0, 0, 0.5)", // 半透明背景
                color: "white", // 文字颜色
                opacity: 0, // 默认隐藏文字
                transition: "opacity 0.5s ease, transform 0.5s ease", // 平滑过渡
                transform: "translateY(100%)", // 初始状态文字被隐藏
              }}
            >
              <Container display={"flex"} flexDirection={"column"} sx={{}}>
                <Typography variant="body1" textAlign="left">
                  显微智能与合肥工业大学管理学院成立“微创机器人与智能感知”联合实验室，共同打造以科技为中心的智能微创外科创新解决方案。
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600" }}
                  textAlign={"left"}
                >
                  合肥工业大学战略合作仪式
                </Typography>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default New;
