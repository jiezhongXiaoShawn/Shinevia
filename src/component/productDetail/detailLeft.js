import { Box, CardMedia, Typography, List, ListItem } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";

const DetailLeft = ({ image, title, items }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      pb={2}
      width="100%"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: "1 1 30%", // flex-grow | flex-shrink | flex-basis
          maxWidth: "30%",
          margin: "0 2%",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="left"
          width="100%"
          marginBottom="5%"
        >
          <SquareIcon fontSize="large" />
          <Typography
            variant="h4"
            fontFamily="Microsoft YaHei , sans-serif"
            fontWeight="400"
            textAlign="left"
            alignItems={"center"}
            sx={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)", // Adjusts between 1.5rem and 2.5rem, depending on viewport width
            }}
          >
            {title}
          </Typography>
        </Box>
        <List sx={{ width: "100%" }}>
          {items.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                background: index % 2 === 0 ? "#F2FBFF" : "#F2F2F2",
                display: "flex",
                justifyContent: "left",
                width: "100%",
              }}
            >
              <Typography
                variant="body2"
                textAlign="left"
                fontWeight="500"
                fontFamily="Microsoft YaHei , sans-serif"
                sx={{
                  fontSize: "clamp(0.8rem, 2.05vw, 1.05rem)", // Dynamically adjusts font size
                }}
              >
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          flex: "1 1 30%",
          maxWidth: { md: "30%", xs: "80%" },
          margin: "0 2%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="Product"
          sx={{
            width: "100%",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default DetailLeft;
