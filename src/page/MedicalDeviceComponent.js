import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const MedicalDeviceComponent = ({ title, description, imageUrl, link }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        justifyContent: "center",
      }}
    >
      {/* <Box sx={{ paddingRight: "20rem" }}></Box> */}
      <CardMedia
        variant="outlined"
        component="img"
        sx={{ width: 200, height: "auto" }}
        image={imageUrl}
        alt="Medical Device"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingX: 2,
          paddingLeft: "5rem",
          width: "30rem",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5" textAlign="left">
            {title}
          </Typography>
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
          variant="body2"
          color="text.secondary"
          sx={{ marginY: 2 }}
          textAlign="left"
        >
          {description}
        </Typography>
        <Box>
          {/* Description placeholders */}
          {Array.from({ length: 10 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "grey.300",
                height: "20px",
                marginY: "5px",
                width: "100%",
              }}
            />
          ))}
        </Box>
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
