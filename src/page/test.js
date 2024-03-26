import React from "react";
import Slider from "react-slick";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosNewIcon from "@mui/icons-material/ArrowForwardIosNew";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "10px",
        zIndex: 1,
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <ArrowForwardIosNewIcon />
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "10px",
        zIndex: 1,
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

function Test({ departments }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Slider {...settings}>
        {departments.map((department, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            <img
              src={department.imageUrl}
              alt={department.title}
              style={{ width: "100%", height: "auto" }}
            />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "6px",
              }}
            >
              {department.title}
            </Typography>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.7)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                "&:hover": {
                  opacity: 1,
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: "white",
                  padding: "6px",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                }}
              >
                {department.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Test;
