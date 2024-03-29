import { Box, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const Intro = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundImage: "url('/homepage/topImg.gif')",
          backgroundSize: "cover",
          width: "100%",
          //height: "100%",
          height: "100vh",
          // transform: "rotate(-4deg) translateY(-10%) translateX(1.5%)",
          // borderRadius: "1%",
        }}
      >
        <Box display={"flex"} gap={1} p={1} color={"black"}>
          <Typography
            component={RouterLink}
            to="/"
            sx={{
              color: "black",
              fontFamily: "Microsoft YaHei , sans-serif",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            主页
          </Typography>
          <Typography>&gt;</Typography>
          <Typography
            variant="text"
            sx={{
              color: "black",
              fontFamily: "Microsoft YaHei , sans-serif",
              fontWeight: "400",
              fontSize: "1rem",
            }}
          >
            关于我们
          </Typography>
        </Box>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginBottom: "5%",
            maxWidth: "md",
            // transform: "rotate(4deg) translateY(20%) translateX(-1.5%)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              textAlign: "left",
              fontWeight: "400",
              fontFamily: "Microsoft YaHei",
            }}
          >
            驭光而行，照亮生命
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#CECECE",
              textAlign: "left",
              marginTop: "20px",
              fontWeight: "400",
              fontFamily: "Microsoft YaHei",
              width: "50%",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              letterSpacing: "1.4px",
            }}
          >
            显微智能科技有限公司成立于2017年，是集科研、设计、生产制造、销售、服务为一体的国家高新技术企业。公司总部位于山东省济南市，分别在上海设立运营管理中心，在杭州设立研发中心，在长沙浏阳经开区和济南章丘区设立两大生产基地
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
export default Intro;
