import { Box, Typography, Divider, CardMedia } from "@mui/material";

const Honer = () => {
  return (
    <Box>
      <Box display={"flex"}>
        <Box
          paddingLeft={"180px"}
          display={"flex"}
          flexDirection={"column"}
          width={"60%"}
        >
          <Typography
            variant="h3"
            sx={{
              color: "black",
              textAlign: "left",
              fontWeight: "400",
              fontFamily: "Microsoft YaHei",
              marginBottom: "20px",
              width: "50%",
            }}
          >
            荣誉与资质
          </Typography>
          <Divider
            sx={{
              height: "1rem",
              color: "black",
              width: "5%",
              borderBlockColor: "black",
              marginBottom: "5px",
            }}
          />
          <Typography
            paddingLeft={"2rem"}
            variant="body1"
            sx={{
              color: "black",
              textAlign: "left",
              marginTop: "20px",
              fontWeight: "500",
              fontFamily: "Microsoft YaHei, sans-serif,Roboto",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              letterSpacing: "1.4px",
            }}
          >
            显微智能始终将“技术创新”放在首位，现已取得知识产权近二百项，创建了全球领先的荧光分子成像技术--特殊光成像技术平台，原研首创的皮摩尔级超高灵敏度图像探测器全球领先，在诸多外科细分领域实现了技术突破和产品布局，为临床外科医生提供精准的手术解决方案。
            <br />
            <br />
            <br />
            截至目前，显微智能已获得山东省专精特新企业、济南市专精特新企业、山东省科学技术进步二等奖、山东省优质品牌、山东省知名品牌、济南市瞪羚企业、中国医疗设备“最具社会责任奖”、
            山东省科技型中小企业创新能力提升工程立项、济南市科技型中小企业创新能力提升工程立项、山东医疗器械行业协会会员单位、五星奖十佳产品提名奖、第九届中国医疗产业创新大赛“最具投资价值奖”等多项荣誉资质。
            <br />
            <br />
            <br />
          </Typography>
        </Box>
        {/* //<Box sx={{ flexGrow: 1 }} /> */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"40%"}
          height={"auto"}
          flexGrow={1}
        >
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%" }}
            image="/about/3.gif"
            alt="Medical Device"
          />
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%" }}
            image="/about/4.gif"
            alt="Medical Device"
          />
        </Box>
      </Box>
      <Box display={"flex"}>
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "312px" }}
          image="/about/5.gif"
          alt="Medical Device"
        />
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "312px" }}
          image="/about/6.gif"
          alt="Medical Device"
        />
      </Box>
    </Box>
  );
};
export default Honer;
