import React from "react";
import { useEffect } from "react";
import "../css/product.css"; // Ensure this points to your actual CSS file
import { Button, Box, Select, MenuItem, Grid, Paper } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import QA from "../component/QA";
import MedicalDeviceComponent from "./MedicalDeviceComponent";
const backgroundImageUrls = [
  "url('https://s3-alpha-sig.figma.com/img/e167/cfae/f4fc593cf5acc895a5e55b5b63ae1672?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AUW-6Fz0IsmNadzsg9~wKIIm1H5hK1l2wIZcjj~UeM6SrxkuDvwKXBIzGg6b16e8NLu1Z7Htj7rhbPhZu989fPuAhCaT5Di0gdVhly9mpeNbHrmdzGZweAS6j~O3vhxdnbCafEDoiuRO43n-qIER45t~U40iryFtOSR~AK5J6-RO~P4VuhHKPlrjDhZ~WAf3ycAM32Hjl-wORHT1siOUMkZ-fnPMM1gjx9s0FbBUVZk8PV3NFPpOzf0Pl7ywXVeTE794govHeXi1NKdpCGIEMrcwMPLnbFAqeGFKOoY4Z4KEIYD~WXboq4cG1~orOtEq2RHj5jMBKWJWNkJ3w~EU-w__')",
  "url('https://s3-alpha-sig.figma.com/img/ae54/331f/bae67b98db034270fbf2c2b5210bfb2b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oZvaDqp01KMR0Eo3jvcZbrvelz~CxkSohX2DRKRYq3OPx0fVJF~9NVq0YiHRtXpEerrgbKiHt7SirUc9zmNJ4dYGbxKQP6HLVoo3CuXp1IqCR08BU2z7mtBMUUtu1rhpN8-0EGh8JfNXMziVrvuKyuJ8pjAsW0mVd5wyvirhqxcoJE0aRKf1YCREKr5rz~p8JG3-BItLLYEhJRezPABahVV0wryw4UMkh53sZ6Mu0THBG8WuWOml18DzPaFzCJ-nO9xD4nTIiCBRDY848OnNFbrWrrzHmOR1l0FcV48PCdOa0NEj-xQOMbELMsmL7mVvwB2WvEPdQZ~lwZd54yYwpw__')",
  "url('https://s3-alpha-sig.figma.com/img/bdee/395f/da2ef16edbd85dd973d04ddf30c3625f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CEF~Po-Bx68SNe97CuZtWdezSJHaY0CqLSXtt6M4nuplajQdiqY5FIlC2mkrKKZM3WAzMxF250DFPiJBu3NY5Eg13fIRWJ41rnwfElVseOpmrwOFtjXBZN-ubeWH6K8JJsrOcdbEkLLjAH2Hv7w6OBm8M6DbbpzUNiiObYJBVnnci4-fIMjzP1Zt47WCvyTGkrWa2EdwcDNZfZsnAYVP~x~4mTv8WFTtoPKdvTiHQc2bUKlftRlW05fTl1aQnuEdaiQTVEYnS-utr~p8I7ks1ZmCIJ68z9TGiOgblc2V9ukGelpEuz32JiXmehq0OXz2ofsjiVBefp9SuY6Tsm7-JA__')",
  "url('https://s3-alpha-sig.figma.com/img/3ad1/eb32/c1667e3e7809cc3285f48551db8d93d9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UzI6YDUUuFG7GJYSp1~4AyYgKCDE68n5FuuyRW0nCn9oiw4J-x-dtosuQKrdMkc6~cTZHm3TyXcN6aw23owhW2HZr0wIqGxBKRV9pHg5ey0ukyBwO1O73p2vlbugQWyVAe6itE~Vkq3DWkvxUt-lEM9WKqBMXjT7Ez5wZVN9-oJ6IHFIILd04J9wAG~mQ8DnkN63vj5qD3i8G3g~pqMusZfir-inr5zIvAVlhFYVPdx-KYVwyErk217ThYgogJM7wrQKaMkDCixy1nqiI6LKvkCbqUr6X9fpi97FNmNOrYchS0hNPvBbrPU7j6Klm9LaQlMcd67s11Xk0N4zODQJyg__')",
  // ... add more as needed
];
const accordionStyle = {
  boxShadow: "none",
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: "0",
  },
  "& .MuiAccordionSummary-root": {
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    minHeight: 56,
    "&.Mui-expanded": {
      minHeight: 56,
    },
    // Add background size and position as needed
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  "& .MuiAccordionDetails-root": {
    paddingTop: 0,
    paddingBottom: 0,
  },
};

const getAccordionSummaryStyle = (index) => ({
  ...accordionStyle["& .MuiAccordionSummary-root"], // Spread in the existing styles
  backgroundImage: backgroundImageUrls[index],
  color: "white",
  height: "180px", // Example text color, adjust as needed for visibility
});
function Product() {
  const handleDownload = () => {
    console.log("Download button clicked");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Box sx={{ paddingLeft: "60px" }}>
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
            <Typography variant="body1" textAlign="left">
              我们提供的不仅仅是优秀的产品，优秀的设备，以及符合不断变化的标准要求。无论是团队，流程还是个人用户，我们的产品都经过严格的质量控制和测试，确保满足最严格的质量要求。
            </Typography>
          </Box>
          <Box display="flex" alignItems="right" sx={{ paddingLeft: "10rem" }}>
            <img
              src="iaf.png"
              alt="IAF Icon"
              style={{ height: "73px", width: "99px" }}
            />
            <img
              src="ztc.png"
              alt="CNAS Icon"
              style={{ height: "73px", width: "98px" }}
            />
            <img
              src="CNAS.png"
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
        <Typography
          variant="h5"
          textAlign="left"
          sx={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          产品集合
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        {/* Repeat this structure for each expandable item, make sure to pass the index to getAccordionSummaryStyle */}
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={getAccordionSummaryStyle(0)}
          >
            <Typography variant="h5">内窥镜摄像系统</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MedicalDeviceComponent
              title="ARGOS-4K MEDICAL Device"
              description="Advanced endoscopy system for enhanced diagnostic accuracy."
              imageUrl="https://s3-alpha-sig.figma.com/img/d704/3dc1/ec816a5271ab47d547be2d7626095b99?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kd6igX5-clrwa8l1H0UQpIlERSRsKN4GHkTF-O97rknnChRxl03CdLguUlSWAgORHskB~Aj1-0YJ9mLDDPDdu8egy1DgO8zrNyQk~EHtAvEfVHwkvWd90T55XpMOpETUhhtOsiB9Fvv5za9kyugsoUCyJbnbVFTm5-me-ZdV7Or3uvSXtjyfjcq26mvVEJAdXjuwLnSBw2R-cOQ7~JM6sSIFMt4xL5nKmLFcH5OYgjdIimzo0V6XnqCkJf6jWDm~TeW3Ze9l9Vxl7AhZzMH8D~O5sppJLKOgX0t~Cu6MOcsKvD56DEbAzDgJkxnExI92NdNuWFn94j56JjrL46hjbw__"
            ></MedicalDeviceComponent>
            <MedicalDeviceComponent
              title="ARGOS-4K 荧光"
              description="Advanced endoscopy system for enhanced diagnostic accuracy."
              imageUrl="https://s3-alpha-sig.figma.com/img/9eff/7bbb/a2bce16c039bbc36cfd95d468d53e813?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hFNQg313mJiIwMZL9PeQac~EzUvJInKH1IDgMbHFwm4Wb~DsMk-0ei88XqE21F9RylkAZqFO9sSFJlbAGJ57y5-zkL4xE3Sc4neqYw-GzRc8v5Jrck7Og4tMZl~woa~5KmJXkrxk~Gyz79BPneZ7~CAO6VSyh3xU9ho-kwqrcNZctU~-3vWAbPEhuw8eWDovJaFFScaixzHQSTYNTN2A~KC8kwlEwjWXQIE2We2ZWs-XVy-nm7ENOszpeid8zQ8cajqgWngcJ07JdxgriN0fkAFrgJ0emvlyRWDMbL8wUsfGw7IwVuHc3hAffLw3R6NndeI6uyx2Ej61SKtmC-hMHQ__"
            ></MedicalDeviceComponent>
          </AccordionDetails>
        </Accordion>

        {/* The next Accordion will have no space in between when the previous one is expanded */}
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={getAccordionSummaryStyle(1)}
          >
            <Typography variant="h5">内窥镜器材</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Content of the second item */}
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={getAccordionSummaryStyle(2)}
          >
            <Typography variant="h5">一次性内窥镜系统</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Content of the second item */}
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={getAccordionSummaryStyle(3)}
          >
            <Typography variant="h5">能量平台超声刀系统</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Content of the second item */}
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box
        sx={{
          position: "relative",

          backgroundImage: `url(${require("./image/product.png")})`,
          backgroundSize: "cover",
          padding: "5rem",
          paddingLeft: "10rem",
          backgroundPosition: "center top ",
          color: "white",
          height: "140vh",
        }}
      >
        <Typography variant="h3" gutterBottom textAlign="left">
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
                backgroundImage: `url(${require("./image/腔镜.png")})`,
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
                bottom="30%"
                left="10%"
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
                //backgroundImage: `url(${require("./image/腔镜.png")})`,
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
            ></Paper>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Paper
              sx={{
                position: "relative",
                paddingBottom: "56.25%",
                background: "#ccc",
                //backgroundImage: `url(${require("./image/腔镜.png")})`,
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
            ></Paper>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Paper
              sx={{
                position: "relative",
                paddingBottom: "56.25%",
                background: "#ccc",
                //backgroundImage: `url(${require("/")})`,
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
            ></Paper>
          </Grid>
        </Grid>
      </Box>
      <QA />
    </Box>
  );
}

export default Product;
