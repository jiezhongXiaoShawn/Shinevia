import React from "react";
import { Box, CardMedia, Container, Typography, Divider } from "@mui/material";
export default function ArticleTemplate1(data) {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${data.topImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            gap: "2rem",
          }}
        >
          <Typography></Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography
            fontSize={"3.5rem"}
            dangerouslySetInnerHTML={{
              __html: data.title.replace(/\n/g, "<br />"),
            }}
            lineHeight={"77px"}
          ></Typography>
          <Typography
            fontSize={"1.6rem"}
            lineHeight={"36px"}
            sx={{ textShadow: "0px 4px 4px #00000040" }}
            dangerouslySetInnerHTML={{
              __html: data.subtitle.replace(/\n/g, "<br />"),
            }}
          ></Typography>
        </Box>
      </Box>
      <Container height={"200vh"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box height={"10vh"}></Box>
          <CardMedia
            component="img"
            image={data.Image1}
            alt="Product"
            // sx={{ width: "60%" }}
          />
          <Box height={"3vh"}></Box>
          <Typography
            fontSize={"1.3rem"}
            lineHeight={"30px"}
            textAlign={"left"}
            sx={{ display: "flex", textShadow: "0px 4px 4px #00000040" }}
            dangerouslySetInnerHTML={{
              __html: data.Image1Description.replace(/\n/g, "<br />"),
            }}
          ></Typography>
        </Box>
        <Box height={"10vh"}></Box>
        <Typography variant="h2" textAlign={"left"}>
          {data.start}
        </Typography>
        <Divider
          sx={{
            width: "5%",
            bgcolor: "black", // 设置分隔线颜色
            my: 2, // margin top & bottom
            borderBottomWidth: 3,
            boxShadow: "0px 4px 4px #00000040",
          }}
        />
        <Box sx={{ height: "5vh" }}></Box>
        <Typography
          textAlign={"left"}
          variant="body1"
          fontSize={"1.5rem"}
          lineHeight={"30px"}
          sx={{ textShadow: "0px 4px 4px #00000040" }}
        >
          {data.paragraph1}
          <br />
          <br />
          {data.paragraph2}
          <br />
          <br />
          {data.paragraph3}
          <br />
          {data.paragraph4}
        </Typography>
        <Box height={"5vh"}></Box>
        <CardMedia
          component="img"
          image={data.Image2}
          alt="Product"
          // sx={{ width: "60%" }}
        />
        <Box height={"10vh"}></Box>
        <Box
          sx={{
            display: "flex", // 设置为flex布局
            flexDirection: "column", // 子元素垂直排列
            alignItems: "center", // 水平居中对齐子元素
            justifyContent: "center", // 垂直居中对齐子元素
            textAlign: "center",
            padding: "59px", // 文字居中
          }}
        >
          <Divider
            sx={{
              width: "5%",
              bgcolor: "black", // 设置分隔线颜色
              my: 2, // margin top & bottom
              borderBottomWidth: 3,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              width: "55%",
              color: "black",
              fontWeight: "500",
              fontFamily: "Microsoft YaHei, Roboto",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              letterSpacing: "1.4px",
            }}
          >
            显微智能秉承 “成为特殊光技术领导者，
            持续为医疗工作者提供创新的诊疗工具，
            护佑人类健康”的使命，坚持“专业、专注、创新、利他”的经营理念，力争成为中国医疗行业的优秀民族品牌。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
