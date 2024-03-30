import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Certificate = () => {
  return (
    <Container maxWidth="lg">
      <Box display={"flex"} gap={1} p={1}>
        {/* Breadcrumbs */}
        <Typography
          component={RouterLink}
          to="/"
          sx={{
            color: "black",
            fontFamily: "Microsoft YaHei , sans-serif",
            fontWeight: "700",
            fontSize: { xs: "0.75rem", sm: "0.8rem", md: "1rem" }, // Responsive font size
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
            fontSize: { xs: "0.75rem", sm: "0.8rem", md: "1rem" }, // Responsive font size
          }}
        >
          产品中心
        </Typography>
      </Box>

      {/* Product Center and Description */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box sx={{ paddingTop: "4rem", textAlign: "left" }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "bold",
              paddingBottom: "1.5rem",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }} // Responsive font size
          >
            产品中心
          </Typography>
          <Typography variant="body1" width={{ xs: "100%", md: "80%" }}>
            我们提供的不仅仅是优秀的产品，优秀的设备，以及符合不断变化的标准要求。无论是团队，流程还是个人用户，我们的产品都经过严格的质量控制和测试，确保满足最严格的质量要求。
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            gap: { xs: "10px", md: "25px" },
            justifyContent: "flex-end",
            paddingTop: { xs: "20px", md: "0" },
          }}
        >
          {/* Images */}
          {["/product/iaf.png", "/product/ztc.png", "/product/CNAS.png"].map(
            (src, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "50px", sm: "75px", md: "99px" },
                  height: { xs: "50px", sm: "75px", md: "73px" },
                }}
              >
                <img
                  src={src}
                  alt={`Icon ${index + 1}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            )
          )}
        </Box>
      </Box>
      <Box display={"flex"}>
        <Button
          variant="outlined"
          onClick={() => console.log("Download button clicked")}
          sx={{
            mt: 4,
            borderRadius: "5px",
            background: "#D9D9D9",
            color: "#000",
            width: { xs: "150px", sm: "177px" },
            height: { xs: "56px", sm: "71px" },
            borderColor: "black",
            fontSize: { xs: "0.75rem", sm: "1rem" }, // Responsive font size for button text
          }}
        >
          下载产品目录
        </Button>
      </Box>
    </Container>
  );
};

export default Certificate;
