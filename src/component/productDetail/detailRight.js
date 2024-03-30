import { Box, CardMedia, List, ListItem, Typography } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";

const DetailRight = ({ image, title, data }) => {
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
          flex: "1 1 30%",
          maxWidth: { md: "30%", xs: "80%" },
          margin: "0 2%",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="Product"
          sx={{ width: "100%", height: "auto" }}
        />
      </Box>

      <Box sx={{ flex: "1 1 30%", maxWidth: "30%", margin: "0 2%" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
          mb={2}
        >
          <SquareIcon fontSize="large" sx={{ marginRight: "8px" }} />
          <Typography
            variant="h4"
            fontFamily="Microsoft YaHei , sans-serif"
            fontWeight="400"
            sx={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)", // Adjusts between 1.5rem and 2.5rem
            }}
          >
            {title}
          </Typography>
        </Box>

        <List sx={{ width: "100%" }}>
          {data.map(({ key, value }, index) => (
            <ListItem
              key={key}
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: index % 2 === 0 ? "#F2FBFF" : "#F2F2F2",
                textAlign: "left",
                width: "100%",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  width: "50%",
                  fontSize: "clamp(0.75rem, 2vw, 1rem)", // Dynamically adjusts font size
                }}
                fontFamily={"Microsoft YaHei , sans-serif"}
                fontWeight={"400"}
              >
                {key}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  width: "50%",
                  fontSize: "clamp(0.75rem, 2vw, 1rem)", // Dynamically adjusts font size
                }}
                fontFamily={"Microsoft YaHei , sans-serif"}
                fontWeight={"400"}
              >
                {value}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default DetailRight;
