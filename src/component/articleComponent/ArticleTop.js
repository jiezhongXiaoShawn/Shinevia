import React from "react";
import { Box, Card, Typography, CardMedia } from "@mui/material";
export default function ArticleTop({ title, subtitle, background, imgtitle }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          marginTop: "7vh",
          marginLeft: "5rem",
          marginRight: "5rem",
          display: "flex",
          flexDirection: "column",
          width: "90vw",
          gap: "2rem",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontSize={"54px"}
          lineHeight={"77px"}
          width={"90%"}
          textAlign={"left"}
          letterSpacing={"0.18em"}
        >
          {title}
        </Typography>
        <Typography
          fontSize={"1em"}
          lineHeight={"24px"}
          sx={{ textShadow: "0px 4px 4px #00000040" }}
          letterSpacing={"0.18em"}
          width={"90%"}
          textAlign={"left"}
        >
          {subtitle}
        </Typography>
        <CardMedia
          component="div"
          sx={{
            marginTop: "7vh",
            maxWidth: "90%",
            maxHeight: "35vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={imgtitle}
            alt="Image description"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </CardMedia>
      </Box>
    </Box>
  );
}
