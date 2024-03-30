import { Box, Typography, Divider, CardMedia } from "@mui/material";

const Vision = () => {
  return (
    <Box>
      {/* 第一部分：使命与愿景 + 图片 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          paddingTop: "70px",
          paddingBottom: "150px",
          justifyContent: { md: "space-between" },
          alignItems: { md: "flex-end" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            marginLeft: { md: "10%" },
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
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // 响应式字体大小
            }}
          >
            使命与愿景
          </Typography>
          <Divider
            sx={{
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
              fontWeight: "400",
              fontFamily: "Microsoft YaHei",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              letterSpacing: "1.4px",
              fontSize: {
                xs: "1rem",
                sm: "0.8rem",
                md: "0.9rem",
                lg: "1.1rem",
                xl: "1.2rem",
              }, // 响应式字体大小
            }}
          >
            <li>成为领先行业的特殊光技术创造者</li>
            <li>持续为医疗工作者提供创新的诊疗工具，护佑人类健康</li>
          </Typography>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%", md: "40%" }, height: "auto" }}
          image="/about/1.gif"
          alt="Medical Device"
        />
      </Box>

      {/* 第二部分：图片 + 文字 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "20px", md: "0" },
          marginBottom: "98px",
          justifyContent: { md: "space-between" },
          alignItems: { md: "flex-end" },
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%", md: "40%" }, height: "auto" }}
          image="/about/2.gif"
          alt="Medical Device"
        />
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            marginRight: { md: "1.5%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "black",
              textAlign: "left",
              fontWeight: "400",
              fontFamily: "Microsoft YaHei",
              padding: "20px",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              letterSpacing: "1.4px",
              width: "80%",
              fontSize: {
                xs: "1rem",
                sm: "0.8rem",
                md: "0.9rem",
                lg: "1.1rem",
                xl: "1.2rem",
              }, // 响应式字体大小
            }}
          >
            显微智能科技有限公司运营管理中心于2023年5月正式搬迁至上海G60科创云廊，以实现公司更快、更好地发展，实现公司的全国性品牌战略；这必将是一段充满光荣和梦想的新征程。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Vision;
