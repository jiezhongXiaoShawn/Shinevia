import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const Certificate = () => {
  const handleDownload = () => {
    console.log("Download button clicked");
  };
  return (
    <Container maxWidth="lg">
      <Box display={"flex"} gap={1} p={1}>
        <Typography
          component={RouterLink}
          to="/"
          sx={{
            color: "black",
            fontFamily: "Microsoft YaHei , sans-serif",
            fontWeight: "400",
            fontSize: "0.8rem",
          }}
        >
          主页
        </Typography>
        <Typography>&gt;</Typography>
        <Typography
          variant="text"
          sx={{
            color: "black",
            fontFamily: "Microsoft YaHei , sans-serif",
            fontWeight: "400",
            fontSize: "0.8rem",
          }}
        >
          产品中心
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box sx={{ paddingTop: "4rem" }}>
          <Typography
            variant="h3"
            component="h1"
            textAlign="left"
            sx={{ fontWeight: "bold", paddingBottom: "1.5rem" }}
          >
            产品中心
          </Typography>
          <Typography variant="body1" textAlign="left" width={"80%"}>
            我们提供的不仅仅是优秀的产品，优秀的设备，以及符合不断变化的标准要求。无论是团队，流程还是个人用户，我们的产品都经过严格的质量控制和测试，确保满足最严格的质量要求。
          </Typography>
        </Box>
        <Box flexGrow={1}></Box>
        <Box
          display="flex"
          alignItems="right"
          sx={{ gap: "25px", justifyContent: "flex-end" }}
        >
          <img
            src="/product/iaf.png"
            alt="IAF Icon"
            style={{ height: "73px", width: "99px" }}
          />
          <img
            src="/product/ztc.png"
            alt="ztc Icon"
            style={{ height: "73px", width: "98px" }}
          />
          <img
            src="/product/CNAS.png"
            alt="Third Icon"
            style={{ height: "73px", width: "98px" }}
          />
        </Box>
      </Box>
      <Box sx={{ padding: "10px" }}></Box>
      <Button
        variant="outlined"
        sx={{
          borderRadius: "5px",
          background: "#D9D9D9",
          display: "flex",
          color: "#000",
          width: "177px",
          height: "71px",
          borderColor: "black",
        }}
        stroke="black"
        stroke-width="0.5"
      >
        下载产品目录
      </Button>
    </Container>
  );
};
export default Certificate;
