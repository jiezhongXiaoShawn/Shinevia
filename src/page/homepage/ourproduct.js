import {
  Container,
  Button,
  CardMedia,
  ImageList,
  IconButton,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../css/ourproduct.css";
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
        gap: "100px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex" }} width={"50%"}>
        <IconButton onClick={handlePrev}>
          <ArrowBackIosIcon />
        </IconButton>
        <CardMedia
          variant="outlined"
          component="img"
          sx={{ width: "100%", height: "100%" }}
          image={imageList[current]}
          alt="Medical Device"
        />
        <IconButton onClick={handlePrev}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "flex-end",
          width: "50%",
          bottom: "0",
        }}
      >
        <Box>
          <Typography variant="h4" textAlign="left">
            {titleList[current]}
          </Typography>
          <Typography variant="h6" textAlign="left">
            {subtitleList[current]}
          </Typography>
        </Box>
        <hr className="section-divider" />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="left"
          alignContent="left"
        >
          <Typography
            variant="h2"
            textAlign="left"
            sx={{ fontWeight: "600", lineHeight: "55px" }}
          >
            我们的产品
          </Typography>
          <Typography
            variant="p"
            textAlign="left"
            sx={{ color: "#4A4A4A", marginTop: "15px" }}
          >
            中国市场占有率最高的开放式荧光成像产品
          </Typography>
          <Button
            alignContent="left"
            variant="contained"
            sx={{
              background: "#000",
              color: "#fff",
              width: "222px",
              height: "71px",
              marginTop: "20px",
              flexShrink: "0",
              textAlign: "left",
              fontWeight: "700",
              "&:hover": {
                background: "#fff",
                color: "#000",
              },
            }}
            component={RouterLink}
            to="/product"
          >
            <Typography
              display="flex"
              flexDirection="column"
              letterSpacing="2.4px"
              alignItems={"flex-start"}
              sx={{
                fontFamily: "Microsoft YaHei",
                fontWeight: "700",
                fontStyle: "normal",
                fontSize: "12px",
                textAlign: "left",
              }}
            >
              产品目录→&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default OurProduct;
