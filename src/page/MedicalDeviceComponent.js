import React from "react";
import { Card, CardMedia, Typography, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const MedicalDeviceComponent = ({
  title,
  subtitle,
  description,
  imageUrl,
  link,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "stretch",
        padding: 2,
        justifyContent: "center",
        gap: 5,
        borderBottom: "1px solid #D9D9D9",
      }}
    >
      <Box width={{ xs: "40%", md: "20%" }}>
        <CardMedia
          variant="outlined"
          component="img"
          sx={{ width: "100%" }}
          image={imageUrl}
          sizes="cover"
          alt="Medical Device"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingX: 2,
          width: "35%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box display={"flex"} flexDirection={"column"}>
            {/* Use clamp() for responsive font size */}
            <Typography
              variant="h5"
              fontWeight={"400"}
              textAlign="left"
              sx={{
                fontSize: "clamp(0.8rem, 1.64vw, 2rem)", // Adjusts between 1rem and 2rem, depending on viewport width
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2" // changed to body2 for consistency
              color={"black"}
              textAlign="left"
              sx={{
                fontSize: "clamp(0.7rem, 1.23vw, 1.5rem)", // Adjust according to your design
              }}
            >
              {subtitle}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="outlined"
            sx={{
              background: "#D9D9D9",
              color: "#000",

              height: "clamp(40px, 6vw, 72px)", // Responsive height
              width: "clamp(40px, 6vw, 72px)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
              // Consider making button size responsive if necessary
            }}
            component={RouterLink}
            to={link}
          >
            →
          </Button>
        </Box>
        {/* //<Box height={"20%"}></Box> */}
        <Typography
          variant="body1"
          color={"black"}
          sx={{
            marginY: 2,
            alignSelf: "flex-start",
            lineHeight: 1.5,
            textAlign: "left",
            fontSize: "clamp(0.5rem, 1.09vw, 1.2rem)", // Make description text responsive
          }}
        >
          {description}
        </Typography>
        <br />
        <br />
        <br />
        <br />
      </Box>
    </Card>
  );
};

export default MedicalDeviceComponent;
