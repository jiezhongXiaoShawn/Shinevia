import { Box, Container, Grid, Paper, Typography } from "@mui/material";
const Solution = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: 'url("/product/product.png")',
        backgroundSize: "cover",
        padding: "5rem",
        paddingLeft: "40px",
        backgroundPosition: "center top ",
        color: "white",
        height: "140vh",
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
        <Grid container spacing={2} sx={{ height: "90vh" }}>
          {/* First image placeholders */}
          <Grid item xs={3} md={3} lg={3}>
            <Paper
              sx={{
                position: "relative",
                paddingBottom: "56.25%",
                background: "#ccc",
                backgroundImage: `url("/product/腔镜.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                height: "100%",
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
                fontSize="2rem"
                sx={{
                  textAlign: "center",
                  position: "absolute",
                  top: "50%", // Center the text vertically
                  left: "30%", // Center the text horizontally
                  color: "#fff",
                  fontWeight: "bold",
                  //transform: "translateY(-100px)", // Initially move the text down
                  transition: "transform 0.3s", // Smooth transition for the transform
                }}
              >
                腔镜外科
              </Typography>
              <Typography
                variant="button"
                className="hoverText"
                fontSize="1rem"
                bottom="15%"
                left="5%"
                sx={{
                  position: "absolute",
                  color: "#fff",
                  transform: "translateY(500px)", // Initially move the text down
                  transition: "transform 0.3s", // Smooth transition for the transform
                }}
              >
                3D腹腔镜:还原真实视觉手术视野，粉组织结构,减少术中损伤。荧光腔镜:实时定位导航，智能腔镜技术，无限拓展
                精细辨别
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Paper
              sx={{
                position: "relative",
                paddingBottom: "56.25%",
                background: "#ccc",
                backgroundImage: `url("/product/肝胆.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                height: "100%",
                "&::before": {
                  content: '""',
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
              {" "}
              <Typography
                fontSize="2rem"
                sx={{
                  textAlign: "center",
                  position: "absolute",
                  top: "50%", // Center the text vertically
                  left: "30%", // Center the text horizontally
                  color: "#fff",
                  fontWeight: "bold",
                  //transform: "translateY(-100px)", // Initially move the text down
                  transition: "transform 0.3s", // Smooth transition for the transform
                }}
              >
                肝胆外科
              </Typography>
              <Typography
                variant="button"
                className="hoverText"
                fontSize="1rem"
                bottom="10%"
                left="5%"
                sx={{
                  position: "absolute",
                  color: "#fff",
                  transform: "translateY(500px)", // Initially move the text down
                  transition: "transform 0.3s", // Smooth transition for the transform
                }}
              >
                解剖性肝段切除术中肝段定位；肿瘤位置、边缘，微小卫星灶及复杂胆道
                识别，肝切除创面的修复；肝移植术中血管、胆道吻合效果的评估
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Paper
              sx={{
                position: "relative",
                paddingBottom: "56.25%",
                background: "#ccc",
                backgroundImage: `url("/product/肠胃.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                height: "100%",
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
              {" "}
              <Typography
                fontSize="2rem"
                sx={{
                  textAlign: "center",
                  position: "absolute",
                  top: "50%", // Center the text vertically
                  left: "30%", // Center the text horizontally
                  color: "#fff",
                  fontWeight: "bold",
                  //transform: "translateY(-100px)", // Initially move the text down
                  transition: "transform 0.3s", // Smooth transition for the transform
                }}
              >
                胃肠外科
              </Typography>
              <Typography
                variant="button"
                className="hoverText"
                fontSize="1rem"
                bottom="20%"
                left="5%"
                sx={{
                  position: "absolute",
                  color: "#fff",
                  transform: "translateY(500px)", // Initially move the text down
                  transition: "transform 0.3s", // Smooth transition for the transform
                }}
              >
                胃肠道吻合口血流灌注评估;肿瘤术中导航定位，淋巴结实时导航
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Paper
              sx={{
                position: "relative",
                paddingBottom: "56.25%",
                background: "#ccc",
                backgroundImage: `url("/product/胸外科.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                height: "100%",
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
              {" "}
              <Typography
                fontSize="2rem"
                sx={{
                  textAlign: "center",
                  position: "absolute",
                  top: "50%", // Center the text vertically
                  left: "30%", // Center the text horizontally
                  color: "#fff",
                  fontWeight: "bold",
                  //transform: "translateY(-100px)", // Initially move the text down
                  transition: "transform 0.3s", // Smooth transition for the transform
                }}
              >
                胸外科
              </Typography>
              <Typography
                variant="button"
                className="hoverText"
                fontSize="1rem"
                bottom="10%"
                left="5%"
                sx={{
                  position: "absolute",
                  color: "#fff",
                  transform: "translateY(500px)", // Initially move the text down
                  transition: "transform 0.3s", // Smooth transition for the transform
                }}
              >
                肺叶、肺段边界识别;肺结节和肺癌病灶定位;淋巴结示踪;食管癌吻合口
                血供评估;胸导管术中显像和乳糜胸的治疗;胸交感神经节定位
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Solution;
