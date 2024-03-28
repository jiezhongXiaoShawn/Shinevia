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
      sx={{
        display: "flex",
        alignItems: "stretch",
        padding: 2,
        justifyContent: "center",
        gap: 5,
      }}
    >
      {/* <Box sx={{ paddingRight: "20rem" }}></Box> */}
      <CardMedia
        variant="outlined"
        component="img"
        sx={{ width: "20%" }}
        image={imageUrl}
        alt="Medical Device"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingX: 2,
          //paddingLeft: "5rem",
          width: "35%",

          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography variant="h5" fontWeight={"400"} textAlign="left">
              {title}
            </Typography>
            <Typography variant="body5" color={"black"} textAlign="left">
              {subtitle}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="outlined"
            sx={{
              background: "#D9D9D9",
              color: "#000",
              //marginLeft: 10,
              height: "72px",
              width: "72px",
              fontSize: "1.5rem",
            }}
            component={RouterLink}
            to={link}
          >
            →
          </Button>
        </Box>

        <Typography
          variant="body1"
          color={"black"}
          sx={{
            marginY: 2,
            alignSelf: "flex-start",
            lineHeight: 1.5,
            // bottom: 10,
          }}
          textAlign="left"
        >
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

export default MedicalDeviceComponent;

// Usage example:
// <MedicalDeviceComponent
//   title="ARGOS-4K MEDICAL Device"
//   description="Advanced endoscopy system for enhanced diagnostic accuracy."
//   imageUrl="/path-to-your-image.jpg"
// />
