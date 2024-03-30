import { Container, Typography, Box, Grid, CardMedia } from "@mui/material";

const Service = () => {
  const serviceDetails = [
    {
      title: "12 小时内建立多渠道联系",
      body: "通过图片，效果视频或者远程演示等形式展示产品效果。",
      icon: "/homepage/icon1.png",
    },
    {
      title: "专业的法务团队保障我们的合作",
      body: "高效的注册团队为我们提供注册文件。",
      icon: "/homepage/icon2.png",
    },
    {
      title: "12 小时内响应，远程视频指导",
      body: "",
      icon: "/homepage/icon3.png",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url('/homepage/service.png')",
        backgroundSize: "cover",
        paddingTop: { xs: "50px", md: "191px" },
        paddingBottom: { xs: "50px", md: "100px" },
      }}
    >
      <Container>
        <Typography
          variant="h3"
          fontWeight="600"
          color="white"
          textAlign="left"
          fontFamily="Microsoft YaHei"
          sx={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
        >
          全流程服务
        </Typography>
        <Typography
          variant="h6"
          color="white"
          textAlign="left"
          marginTop="30px"
          fontFamily="Microsoft YaHei"
          sx={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}
        >
          由专业团队执行,提供7×24小时从交付安装到设备调试的全流程服务
        </Typography>

        <Grid container rowSpacing="89px" marginTop="30px">
          {serviceDetails.map((detail, index) => (
            <Grid
              item
              xs={12}
              lg={12}
              key={index}
              sx={{ display: "flex", alignItems: "center", color: "white" }}
            >
              <Typography
                variant="h1"
                fontWeight="bold"
                textAlign="left"
                sx={{ fontSize: "clamp(100px, 10vw, 200px)", width: "10%" }}
              >
                {index + 1}
              </Typography>
              <Box flexGrow={1} />
              <Typography
                variant="h6"
                textAlign="left"
                sx={{
                  width: { xs: "100%", md: "30%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  fontSize: "clamp(0.9rem, 1.5vw + 0.5rem, 1.5rem)",
                }}
              >
                {detail.title}
                <br />
                {detail.body}
              </Typography>
              <Box flexGrow={5} />
              <CardMedia
                component="img"
                sx={{ width: "150px", height: "150px" }}
                image={detail.icon}
                alt="Service Detail Icon"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
