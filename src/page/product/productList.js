import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MedicalDeviceComponent from "../MedicalDeviceComponent";
import MedicalDeviceNoBotton from "../MedicalDeviceNoBotton";
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
    flexDirection: "row-reverse",
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
            expandIcon={
              <ExpandMoreIcon sx={{ color: "white", fontSize: "3rem" }} />
            }
            sx={getAccordionSummaryStyle(0)}
          >
            <Typography variant="h5" sx={{ paddingLeft: "160px" }}>
              内窥镜摄像系统
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MedicalDeviceComponent
              link={"/argos-4k-medical"}
              title="ARGOS-4K MEDICAL 医用"
              subtitle={"内窥镜摄像系统"}
              description="4K医用内窥镜摄像系统使用先进光学成像和信号处理技术，打破传统腔镜概念，使组织更加清晰，特有去雾设置，可减少手术烟雾困扰，特殊功能项调节，保证手术视野清晰，呈现极致画质，为手术安全提供有效保障。"
              imageUrl="/ARGOS-4KMEDICAL/argos 医用.png"
            ></MedicalDeviceComponent>
            <MedicalDeviceComponent
              link={"/argos-4k-fluorscent"}
              title="ARGOS-4K 荧光"
              subtitle={"内窥镜摄像系统"}
              description="术中结合ICG荧光显影剂，实时示踪淋巴系统、观察组织血流灌注和精确定位肿瘤边界。4K超高清荧光导航内窥镜系统，术中可随时切换白光模式、绿色荧光模式、黑白荧光模式和梯度荧光模式四种模式，方便医生操作。"
              imageUrl="\ARGOS-4KFLUORSCENT\argos 荧光.png"
            ></MedicalDeviceComponent>
            <MedicalDeviceComponent
              link={"/horus-3d-4k"}
              title={"HORUS-3D 4K"}
              subtitle={"内窥镜摄像系统"}
              description={
                "HORUS 3D 4K 荧光一体化摄像平台为首的微创外科产品，采用先进的4K超高清技术，结合3D立体视觉，为外科医生提供了沉浸式的手术视野。荧光技术的加入，给临床专家提供更全方位的智能导航，进一步提高了手术的精准度和安全性。"
              }
              imageUrl={"/HORUS-3D4K/Horus立体.png"}
            />
          </AccordionDetails>
        </Accordion>

        {/* The next Accordion will have no space in between when the previous one is expanded */}
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "white", fontSize: "3rem" }} />
            }
            sx={getAccordionSummaryStyle(1)}
          >
            <Typography variant="h5" sx={{ paddingLeft: "160px" }}>
              内窥镜器材
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MedicalDeviceNoBotton
              title={"胸腹腔手术器械包"}
              subtitle={"内窥镜器材"}
              description={
                "胸腹腔手术器械包包含腹腔镜，分离钳、抓钳、剪刀、持针器、穿刺器、电钩等，可根据手术需要及操作习惯进行选择"
              }
              imageUrl={"/内窥镜器材/胸腹腔手术器械包.png"}
            />
            <MedicalDeviceNoBotton
              title={"妇科手术器械包"}
              subtitle={"内窥镜器材"}
              description={
                "宫腔镜手术器械主要包括电切镜及刨削系统。电切镜主要由以下组成:工作手件、内鞘、外鞘及电切环等"
              }
              imageUrl={"/内窥镜器材/妇科手术器械包.png"}
            />
            <MedicalDeviceNoBotton
              title={"耳鼻喉科手术器械包"}
              subtitle={"内窥镜器材"}
              description={
                "耳鼻喉科手术器械包括耳鼻喉科用刀、凿，耳鼻喉科用剪，耳鼻喉科用镊、夹，耳鼻喉科用钩、针等等。"
              }
              imageUrl={"/内窥镜器材/耳鼻喉科手术器械包.png"}
            />
            <MedicalDeviceNoBotton
              title={"泌尿手术器械包"}
              subtitle={"内窥镜器材"}
              description={
                "一套完整的硬性f由镜鞘、闭孔器、观察镜（光学视管）和镜桥组成，依据使用范围具有不同的规格和型号。硬镜通过尿道进入膀胱完成探查诊断目的时，常常需要配备一些外部器材给予辅助，如尿道探子、取物钳、密封帽和管路等。"
              }
              imageUrl={"/内窥镜器材/泌尿科手术器械包.png"}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "white", fontSize: "3rem" }} />
            }
            sx={getAccordionSummaryStyle(2)}
          >
            <Typography variant="h5" sx={{ paddingLeft: "160px" }}>
              电外科器材
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MedicalDeviceNoBotton
              title={"高频电流发生器"}
              subtitle={"腹腔镜仪器"}
              description={
                "高频电流发生器:是腹腔镜用于切开、凝固止血常用仪器，有单极高频电流发生器:双极电流发生器以及单、双极混合一体的高频电流发生器三种。并可以根据手术选择不同的电切、电凝或混合电切、电凝"
              }
              imageUrl={"/电外科器材/电流发生器.png"}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "white", fontSize: "3rem" }} />
            }
            sx={getAccordionSummaryStyle(3)}
          >
            <Typography variant="h5" sx={{ paddingLeft: "160px" }}>
              能量平台超声刀系统
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MedicalDeviceNoBotton
              title={"超声凝固切开装置"}
              subtitle={"超声刀仪器"}
              description={
                "超声凝固切开装置是一种兼有凝固和切割功能的新型手术器械，主要由发生器、能量转换器和手控器三大部分组成。其中发生器产生高频电流，能量转换器将电流转换成超声振动并传送到手控器械，手控器械与组织接触摩擦，产生凝固与切割作用。"
              }
              imageUrl={"/能量超声刀系统/超声切开装置.png"}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
export default ProductList;
