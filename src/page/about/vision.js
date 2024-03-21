import { Container, Box, Typography, Divider, CardMedia } from "@mui/material";

const Vision = () => {
  return (
    <Box>
      <Box
        display="flex"
        paddingTop="70px"
        paddingBottom={"150px"}
        marginLeft={"180px"}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "black",
              textAlign: "left",
              fontWeight: "400",
              fontFamily: "Microsoft YaHei",
              marginBottom: "20px",
            }}
          >
            使命与愿景
          </Typography>
          <Divider
            sx={{
              height: "1rem",
              color: "black",
              width: "10%",
              borderBlockColor: "black",
              marginBottom: "5px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "black",
              textAlign: "left",
              marginTop: "20px",
              fontWeight: "400",
              fontFamily: "Microsoft YaHei",
              width: "100%",
            }}
          >
            <li>成为领先行业的特殊光技术创造者</li>
            <li>持续为医疗工作者提供创新的诊疗工具，护佑人类健康</li>
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 2 }} />
        <CardMedia
          component="img"
          sx={{ width: "40%", height: "312px" }}
          image="/about/1.gif"
          alt="Medical Device"
          tranform="translateX(50%)"
          flexGrow={1}
        />
      </Box>
      <Box display={"flex"} gap="190px" marginBottom={"98px"}>
        <Box width={"20%"} flexGrow={1}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%" }}
            image="/about/2.gif"
            alt="Medical Device"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "20%",
          }}
          flexGrow={1}
        >
          <Typography
            variant="body1"
            sx={{
              color: "black",
              textAlign: "left",
              fontWeight: "400",
              fontFamily: "Microsoft YaHei",
              marginBottom: "20px",
              padding: "20px",
              width: "60%",
            }}
          >
            显微智能科技有限公司运营管理中心于2023
            年5月正式搬迁至上海G60科创云廊，以实现公司更快、更好地发展，实现公司的全国性品牌战略；这必将是一段充满光荣和梦想的新征程。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Vision;
