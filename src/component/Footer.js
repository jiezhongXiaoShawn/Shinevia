import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouterLink } from "react-router-dom";
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        color: "white",
        backgroundColor: "black",
        py: 6,
        ".MuiTypography-h6": {
          // Applying responsive font size for h6 elements
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        },
        ".MuiTypography-subtitle1": {
          // Adjusting for subtitle1
          fontSize: "clamp(0.875rem, 2vw, 1rem)",
        },
        ".MuiTypography-subtitle2": {
          // Adjusting for subtitle2, like lower links
          fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
        },
        ".MuiTypography-body1": {
          fontSize: "clamp(0.875rem, 1.094vw, 1.125rem)", // Adjusted for body1
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Branding and copyright */}
          <Grid item xs={12} sm={3}>
            {/* <Typography
              variant="h6"
              color="inherit"
              gutterBottom
              style={{ fontSize: "4rem", fontWeight: "bold" }}
            >
              Shinevia
            </Typography> */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              component={RouterLink}
              to="/"
            >
              <img
                src="/component/Navigation.png"
                alt="logo"
                style={{ height: "88px", width: "189px" }}
              ></img>
            </IconButton>
            <Typography variant="subtitle1" color="inherit">
              © 2024 All Rights Reserved
            </Typography>
          </Grid>

          {/* Information links */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              本站信息
            </Typography>
            {/* Add Link components with to="" as per your routing setup */}
            <Link href="/product" variant="subtitle1" color="inherit">
              产品中心
            </Link>
            <br />
            <Link href="/about" variant="subtitle1" color="inherit">
              关于我们
            </Link>
          </Grid>

          {/* Contact details */}
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              color="inherit"
              gutterBottom
              textAlign={"left"}
            >
              联系方式
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
            >
              <Box alignItems={"center"}>
                <LocationOnOutlinedIcon color="white" />
              </Box>
              <Box>
                <Typography variant="body1" color="inherit" textAlign={"left"}>
                  济南市历城区经十东路
                  <br />
                  30899号济南生物医药港
                </Typography>
                <Typography variant="body1" color="inherit" textAlign={"left"}>
                  中区9号楼
                </Typography>
              </Box>
            </Box>
            <br />
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
            >
              <Box>
                <SmartphoneOutlinedIcon color="white" />
              </Box>
              <Typography variant="body1" color="inherit">
                +86 400-1647789
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
            >
              <Box>
                <MailOutlineIcon color="white" />
              </Box>
              <Typography variant="body1" color="inherit">
                sales@shinevia.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Social Media
            </Typography>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* Lower links */}
        <Box mt={5} borderTop={1} borderColor="grey.500">
          <Grid container spacing={2} mt={1}>
            <Grid item xs={6} sm={6}>
              <Link href="#" variant="subtitle2" color="inherit">
                隐私政策
              </Link>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Link href="#" variant="subtitle2" color="inherit">
                条款协议
              </Link>
            </Grid>
            {/* <Grid item xs={6} sm={3}>
              <Link href="#" variant="subtitle2" color="inherit">
                Copyright
              </Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Link href="#" variant="subtitle2" color="inherit">
                General Terms
              </Link>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
