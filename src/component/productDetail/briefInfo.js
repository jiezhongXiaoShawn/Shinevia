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
            fontSize: "0.8rem",
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
            fontSize: "0.8rem",
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
            fontSize: "0.8rem",
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
          marginBottom: "0px", // 将内容居中对齐
        }}
      >
        <Box
          sx={{
            width: "50%", // 图片占宽度的30%
            display: "flex",
            justifyContent: "center",
            height: "10%",
          }}
        >
          <CardMedia
            variant="contained"
            component="img"
            sx={{ width: "100%", height: "auto" }} // 宽度100%意味着它会填满父容器的30%
            image={image}
            alt="Medical Device"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            paddingLeft: "5rem",
          }}
        >
          <Typography
            variant="h5"
            textAlign="left"
            fontWeight={"700"}
            fontFamily={"Microsoft YaHei , sans-serif"}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            textAlign="left"
            fontWeight={"400"}
            fontFamily={"Microsoft YaHei , sans-serif"}
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
          >
            简介
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginY: 2, color: "#4A4A4A;" }}
            textAlign="left"
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
          }}
        >
          产品高光
        </Typography>
      </Box>
    </Box>
  );
};

export default BriefInfo;
