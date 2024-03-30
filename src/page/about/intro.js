import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Intro = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage: "url('/homepage/topImg.gif')",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          p: 1,
          color: "black",
          zIndex: 10,
        }}
      >
        <Typography
          component={RouterLink}
          to="/"
          sx={{
            color: "black",
            fontFamily: "Microsoft YaHei , sans-serif",
            fontWeight: "600",
            fontSize: { xs: "0.75rem", md: "1rem", lg: "1.25rem" }, // 添加 lg 大屏幕的响应式字体大小
          }}
        >
          主页
        </Typography>
        <Typography>&gt;</Typography>
        <Typography
          sx={{
            color: "black",
            fontFamily: "Microsoft YaHei , sans-serif",
            fontWeight: "400",
            fontSize: { xs: "0.75rem", md: "1rem", lg: "1.25rem" }, // 添加 lg 大屏幕的响应式字体大小
          }}
        >
          关于我们
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: { xs: "100%", md: "50%", lg: "40%" }, // 考虑大屏幕时宽度占比调整
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "400",
            fontFamily: "Microsoft YaHei",
            textAlign: "left",
            fontSize: { xs: "1.5rem", md: "3rem", lg: "4rem" }, // 添加 lg 大屏幕的响应式标题字体大小
          }}
        >
          驭光而行，照亮生命
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#CECECE",
            marginTop: "20px",
            fontWeight: "400",
            fontFamily: "Microsoft YaHei",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            letterSpacing: "1.4px",
            textAlign: "left",
            fontSize: { xs: "0.7rem", md: "1.1rem", lg: "1.25rem" }, // 添加 lg 大屏幕的响应式文本字体大小
          }}
        >
          显微智能科技有限公司成立于2017年，是集科研、设计、生产制造、销售、服务为一体的国家高新技术企业。公司总部位于山东省济南市，分别在上海设立运营管理中心，在杭州设立研发中心，在长沙浏阳经开区和济南章丘区设立两大生产基地
        </Typography>
      </Box>
    </Box>
  );
};

export default Intro;
