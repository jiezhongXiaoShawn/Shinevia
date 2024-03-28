import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
const MedicalDeviceNoBotton = ({ title, subtitle, description, imageUrl }) => {
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

export default MedicalDeviceNoBotton;
