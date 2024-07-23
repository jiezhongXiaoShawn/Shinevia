import React from "react";
import { Box, Typography } from "@mui/material";

export default function ActivityTop({ title, subtitle, topImg }) {
  // console.log(title, subtitle, topImg);
  return (
    <Box
      sx={{
        backgroundImage: `url(${topImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   width: "60%",
          gap: "2rem",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontSize={"54px"}
          lineHeight={"77px"}
          width={"60%"}
          textAlign={"center"}
        >
          {title}
        </Typography>
        <Typography
          fontSize={"24px"}
          lineHeight={"36px"}
          sx={{ textShadow: "0px 4px 4px #00000040" }}
          width={"70%"}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
