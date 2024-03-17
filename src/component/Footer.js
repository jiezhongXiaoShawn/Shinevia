import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouterLink } from "react-router-dom";
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ color: "white", backgroundColor: "black", py: 6 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Branding and copyright */}
          <Grid item xs={12} sm={4}>
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
                src="footer.png"
                alt="logo"
                style={{ height: "80%", width: "80%" }}
              ></img>
            </IconButton>
            <Typography variant="subtitle1" color="inherit">
              © 2024 All Rights Reserved
            </Typography>
          </Grid>

          {/* Information links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Information
            </Typography>
            {/* Add Link components with to="" as per your routing setup */}
            <Link href="/product" variant="subtitle1" color="inherit">
              Products
            </Link>
            <br />
            <Link href="certification" variant="subtitle1" color="inherit">
              Certifications
            </Link>
            <br />
            <Link href="support" variant="subtitle1" color="inherit">
              Support
            </Link>
            <br />
            <Link href="/about" variant="subtitle1" color="inherit">
              About Us
            </Link>
          </Grid>

          {/* Contact details */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Contacts
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              1234 Sample Street
              <br />
              Austin Texas 78704
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              512.333.2222
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              sampleemail@gmail.com
            </Typography>

            {/* Social Media Icons */}
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
            <Grid item xs={6} sm={3}>
              <Link href="#" variant="subtitle2" color="inherit">
                Privacy Policy
              </Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Link href="#" variant="subtitle2" color="inherit">
                Terms & Conditions
              </Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Link href="#" variant="subtitle2" color="inherit">
                Copyright
              </Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Link href="#" variant="subtitle2" color="inherit">
                General Terms
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
