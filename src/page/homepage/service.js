import { Container, Box, Typography, CardMedia, Grid } from "@mui/material";

const Service = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/homepage/service.png')",
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Box marginTop={"191px"} marginBottom={"100px"}>
          <Typography
            variant="h3"
            fontWeight={"600"}
            color={"white"}
            textAlign={"left"}
            fontFamily={"Microsoft YaHei"}
          >
            全流程服务
          </Typography>
          <Typography
            variant="h6"
            color={"white"}
            textAlign={"left"}
            marginTop={"30px"}
            fontFamily={"Microsoft YaHei"}
          >
            由专业团队执行,提供7×24 小时从交付安装到设备调试的全流程服务
          </Typography>
        </Box>
        <Grid container rowSpacing={"89px"}>
          <Grid item xs={12} lg={12} color={"white"} display={"flex"}>
            <Typography
              variant="h1"
              fontWeight={"bold"}
              textAlign={"left"}
              height={"auto"}
              fontSize={"200px"}
            >
              1
            </Typography>
            <Box flexGrow={0.5}></Box>
            <Typography
              variant="h6"
              textAlign={"left"}
              width={"30%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              12 小时内建立多渠道联系
              通过图片，效果视频或者远程演示等形式展示产品效果
            </Typography>
            <Box flexGrow={5}></Box>
            <CardMedia
              variant="cover"
              component="img"
              sx={{ width: "150px", height: "150px" }}
              image="/homepage/icon1.png"
              alt="Medical Device"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            ></CardMedia>
          </Grid>
          <Grid item xs={12} lg={12} color={"white"} display={"flex"}>
            <Typography
              variant="h1"
              fontWeight={"bold"}
              textAlign={"left"}
              height={"auto"}
              fontSize={"200px"}
            >
              2
            </Typography>
            <Box flexGrow={0.5}></Box>
            <Typography
              variant="h6"
              textAlign={"left"}
              width={"30%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              专业的法务团队保障我们的合作 高效的注册团队为我们提供注册文件
            </Typography>
            <Box flexGrow={5}></Box>
            <CardMedia
              variant="outlined"
              component="img"
              sx={{ width: "150px", height: "150px" }}
              image="/homepage/icon2.png"
              alt="Medical Device"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            ></CardMedia>
          </Grid>
          <Grid item xs={12} lg={12} color={"white"} display={"flex"}>
            <Typography
              variant="h1"
              fontWeight={"bold"}
              textAlign={"left"}
              height={"auto"}
              fontSize={"200px"}
            >
              3
            </Typography>
            <Box flexGrow={0.5}></Box>
            <Typography
              variant="h6"
              textAlign={"left"}
              width={"30%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              12 小时内响应，远程视频指导
            </Typography>
            <Box flexGrow={5}></Box>
            <CardMedia
              variant="outlined"
              component="img"
              sx={{ width: "150px", height: "150px" }}
              image="/homepage/icon3.png"
              alt="Medical Device"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            ></CardMedia>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
