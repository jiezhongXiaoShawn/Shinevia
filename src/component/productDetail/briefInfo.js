import {
  CardMedia,
  Typography,
  Box,
  Container,
  Divider,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BriefInfo = ({ image, title, subTitle, description }) => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} gap={1} p={1}>
        <Typography
          component={RouterLink}
          to="/"
          sx={{
            color: "black",
            fontFamily: "Microsoft YaHei , sans-serif",
            fontWeight: "700",
            fontSize: "clamp(0.7rem, 1vw, 0.8rem)", // 自适应字体大小
          }}
        >
          主页
        </Typography>
        <Typography>&gt;</Typography>
        <Typography
          variant="text"
          component={RouterLink}
          to="/product"
          sx={{
            color: "black",
            fontFamily: "Microsoft YaHei , sans-serif",
            fontWeight: "400",
            fontSize: "clamp(0.7rem, 1vw, 0.8rem)", // 自适应字体大小
          }}
        >
          产品中心
        </Typography>
        <Typography>&gt;</Typography>
        <Typography
          variant="text"
          sx={{
            color: "black",
            fontFamily: "Microsoft YaHei , sans-serif",
            fontWeight: "400",
            fontSize: "clamp(0.8rem, 1.1vw, 1rem)", // 自适应字体大小
          }}
        >
          {title}
        </Typography>
      </Box>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5rem",
          paddingBottom: "0px",
          marginBottom: "0px",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            height: "10%",
          }}
        >
          <CardMedia
            variant="contained"
            component="img"
            sx={{ width: "100%", height: "auto" }}
            image={image}
            alt="Medical Device"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "30%", xs: "50%" },
            paddingLeft: { md: "5rem", xs: "0" },
          }}
        >
          <Typography
            variant="h5"
            textAlign="left"
            fontWeight={"700"}
            fontFamily={"Microsoft YaHei , sans-serif"}
            sx={{ fontSize: "clamp(1.4rem, 2.7vw, 1.7rem)" }} // 自适应字体大小
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            textAlign="left"
            fontWeight={"400"}
            fontFamily={"Microsoft YaHei , sans-serif"}
            sx={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }} // 自适应字体大小
          >
            {subTitle}
          </Typography>
          <Divider
            sx={{
              width: "100%",
              bgcolor: "black",
              my: 2,
            }}
          />
          <Typography
            variant="body1"
            color={"#757575"}
            textAlign={"left"}
            fontFamily={'"Microsoft YaHei , sans-serif"'}
            sx={{ fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }} // 自适应字体大小
          >
            简介
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginY: 2,
              color: "#4A4A4A",
              textAlign: "left",
              fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)",
            }} // 自适应字体大小
          >
            {description}
          </Typography>
        </Box>
      </Container>
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Divider
          sx={{
            width: "20%",
            bgcolor: "black",
            my: 1,
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "#757575",
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "Microsoft YaHei , sans-serif",
            my: 1,
            fontSize: "clamp(0.8rem, 1.5vw, 1rem)", // 自适应字体大小
          }}
        >
          产品高光
        </Typography>
      </Box>
    </Box>
  );
};

export default BriefInfo;
