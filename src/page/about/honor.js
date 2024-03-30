import { Box, Typography, Divider, CardMedia } from "@mui/material";

const Honer = () => {
  return (
    <Box>
      {/* 文字介绍 + 图片 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "stretch",
          // 为了保证左右有足够的间距
        }}
      >
        {/* 文字部分 */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            pr: { md: "20%" },
            pl: { md: "10%" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "black",
              textAlign: "left",
              fontWeight: "400",
              fontFamily: "Microsoft YaHei",
              mb: "20px",
              fontSize: {
                xs: "1.25rem",
                sm: "1.5rem",
                md: "1.75rem",
                lg: "2rem",
                xl: "2.25rem",
              },
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
              mb: "5px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "black",
              textAlign: "left",
              mt: "20px",
              fontWeight: "500",
              fontFamily: "Microsoft YaHei, sans-serif, Roboto",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              letterSpacing: "1.4px",
              marginLeft: "5%",
              pb: { md: "20%" },
              fontSize: {
                xs: "1rem",
                sm: "0.8rem",
                md: "0.9rem",
                lg: "1rem",
                xl: "1.3rem",
              },
            }}
          >
            显微智能始终将“技术创新”放在首位，现已取得知识产权近二百项，创建了全球领先的荧光分子成像技术--特殊光成像技术平台，原研首创的皮摩尔级超高灵敏度图像探测器全球领先，在诸多外科细分领域实现了技术突破和产品布局，为临床外科医生提供精准的手术解决方案。
            <br />
            <br />
            截至目前，显微智能已获得山东省专精特新企业、济南市专精特新企业、山东省科学技术进步二等奖、山东省优质品牌、山东省知名品牌、济南市瞪羚企业、中国医疗设备“最具社会责任奖”、
            山东省科技型中小企业创新能力提升工程立项、济南市科技型中小企业创新能力提升工程立项、山东医疗器械行业协会会员单位、五星奖十佳产品提名奖、第九届中国医疗产业创新大赛“最具投资价值奖”等多项荣誉资质。
          </Typography>
        </Box>

        {/* 图片部分，紧贴右端 */}
        <Box
          sx={{
            width: { xs: "100%", md: "60%" }, // 调整为55%，以使图片更接近右侧
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "right",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "50%", mb: "0px" }} // 移除图片间的空隙
            image="/about/3.gif"
            alt="Medical Device"
          />
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "50%", mt: "0px" }} // 确保紧接上一张图片
            image="/about/4.gif"
            alt="Medical Device"
          />
        </Box>
      </Box>

      {/* 底部图片，确保紧贴且占满50%宽度 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          mt: { xs: "0", md: "0" }, // 移动设备上添加顶部间距，桌面设备上不需要
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "50%", height: "312px", pr: "0px" }} // 移除右侧间距
          image="/about/5.gif"
          alt="Medical Device"
        />
        <CardMedia
          component="img"
          sx={{ width: "50%", height: "312px", pl: "0px" }} // 移除左侧间距
          image="/about/6.gif"
          alt="Medical Device"
        />
      </Box>
    </Box>
  );
};

export default Honer;
