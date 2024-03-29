import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
const MedicalDeviceNoBotton = ({ title, subtitle, description, imageUrl }) => {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "stretch",
        padding: 2,
        justifyContent: "center",
        borderBottom: "1px solid #D9D9D9",
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

          justifyContent: "flex-start",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h5"
              fontWeight={"400"}
              textAlign="left"
              sx={{
                fontSize: "clamp(1.5rem, 1.64vw, 2rem)", // Adjusts between 1rem and 2rem, depending on viewport width
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body5"
              color={"black"}
              textAlign="left"
              sx={{
                fontSize: "clamp(1rem, 1.23vw, 1.5rem)", // Adjust according to your design
              }}
            >
              {subtitle}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Box>
        <Box height={"20%"}></Box>
        <Typography
          variant="body1"
          color={"black"}
          sx={{
            marginY: 2,
            alignSelf: "flex-start",
            lineHeight: 1.5,
            fontSize: "clamp(0.9rem, 1.09vw, 1.2rem)",
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
