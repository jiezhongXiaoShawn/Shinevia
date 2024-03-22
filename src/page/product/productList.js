import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MedicalDeviceComponent from "../MedicalDeviceComponent";

const backgroundImageUrls = [
  "url('/product/background1.png')",
  "url('/product/background2.png')",
  "url('/product/background3.png')",
  "url('/product/background4.png')",
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

const ProductList = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        textAlign="left"
        sx={{ paddingTop: "20px", paddingBottom: "20px", paddingLeft: "180px" }}
      >
        产品集合
      </Typography>
      <Box sx={{ width: "100%" }}>
        {/* Repeat this structure for each expandable item, make sure to pass the index to getAccordionSummaryStyle */}
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={getAccordionSummaryStyle(0)}
          >
            <Typography variant="h5" sx={{ paddingLeft: "160px" }}>
              内窥镜摄像系统
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MedicalDeviceComponent
              link={"/argos-4k-medical"}
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
            <Typography variant="h5" sx={{ paddingLeft: "160px" }}>
              内窥镜器材
            </Typography>
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
            <Typography variant="h5" sx={{ paddingLeft: "160px" }}>
              电外科器材
            </Typography>
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
            <Typography variant="h5" sx={{ paddingLeft: "160px" }}>
              能量平台超声刀系统
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Content of the second item */}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
export default ProductList;
