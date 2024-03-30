import {
  Container,
  Button,
  CardMedia,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// 假设 "../../css/ourproduct.css" 已经正确导入

const imageList = [
  "/ARGOS-4KFLUORSCENT/Argos-4k 荧光.png",
  "ARGOS-4KMEDICAL/Argos-4k Medical.png",
  "HORUS-3D4K/HORUS 3D 4K.png",
];
const titleList = ["ARGOS-4K 荧光", "ARGOS-4K MEDICAL", "HORUS-3D 4K"];
const subtitleList = ["医用内窥镜系统", "医用内窥镜系统", "医用内窥镜系统"];

const OurProduct = () => {
  const [current, setCurrent] = useState(0);
  const numImages = imageList.length;

  const handlePrev = () => {
    setCurrent(current === 0 ? numImages - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === numImages - 1 ? 0 : current + 1);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "stretch" },
        justifyContent: "center",
        // marginTop: "5%",
        // marginBottom: "5%",
      }}
    >
      <Box width={"60%"} display={"flex"}>
        {/* 图片切换按钮 */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <IconButton
            onClick={handlePrev}
            sx={{ display: { xs: "flex", md: "flex" } }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Box>
        <CardMedia
          component="img"
          sx={{
            width: "80%",
            height: "auto",
            maxWidth: { xs: "80%", md: "80%" },
          }}
          image={imageList[current]}
          alt="Medical Device"
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <IconButton
            onClick={handleNext}
            sx={{ display: { xs: "flex", md: "flex" } }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
      {/* 文字部分 */}
      <Box
        sx={{ width: { xs: "40%", md: "40%" } }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        //alignItems={{ md: "left", xs: "center" }}
      >
        <Typography
          variant="h4"
          textAlign="left"
          sx={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 2.5rem)" }}
        >
          {titleList[current]}
        </Typography>
        <Typography
          variant="h6"
          textAlign="left"
          sx={{ fontSize: "clamp(1rem, 1.5vw + 1rem, 1.75rem)" }}
        >
          {subtitleList[current]}
        </Typography>
        <hr className="section-divider" />
        <Typography
          variant="h2"
          textAlign="left"
          sx={{ fontWeight: "600", lineHeight: "55px" }}
          fontSize={{ xs: "1.5rem", md: "2rem", lg: "2.5rem" }}
        >
          我们的产品
        </Typography>
        <Typography
          variant="body1"
          textAlign="left"
          sx={{
            color: "#4A4A4A",
            marginTop: "15px",
            fontSize: "clamp(0.875rem, 1vw + 0.5rem, 1.25rem)",
          }}
        >
          中国市场占有率最高的开放式荧光成像产品
        </Typography>
        <Box display={"flex"}>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              background: "#000",
              color: "#fff",
              "&:hover": { background: "#fff", color: "#000" },
              width: { xs: "150px", sm: "180px", md: "222px" },
              height: { xs: "48px", sm: "56px", md: "71px" },
              fontSize: "clamp(0.75rem, 1.25vw + 0.5rem, 1rem)",
            }}
            component={RouterLink}
            to="/product"
          >
            产品目录→
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default OurProduct;
