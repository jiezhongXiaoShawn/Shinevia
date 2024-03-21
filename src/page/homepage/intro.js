import { Container, Box, Typography, Button } from "@mui/material";
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
          height: "100%",
          height: "80vh",
          transform: "rotate(-4deg) translateY(-10%) translateX(1.5%)",
          borderRadius: "1%",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            transform: "rotate(4deg) translateY(20%) translateX(-1.5%)",
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
            领先技术，入微关怀
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#CECECE",
              textAlign: "left",
              marginTop: "20px",
              fontWeight: "400",
              fontFamily: "Microsoft YaHei",
            }}
          >
            显微智能,全球唯一能达到三示踪荧光成像技术的企业.
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
            to="/about"
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
              关于我们→&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Intro;
