import { Box, CardMedia, Typography, List, ListItem } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
const DetailLeft = ({ image, title, items }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={2}
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
          marginBottom="47px"
        >
          <SquareIcon fontSize="large" />
          <Typography
            variant="h4"
            fontFamily="Microsoft YaHei , sans-serif"
            fontWeight="400"
            textAlign="left"
            alignItems={"center"}
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
                width: "100%", // Make sure the list items fill their container
              }}
            >
              <Typography
                variant="body2"
                textAlign="left"
                fontWeight="500"
                fontFamily="Microsoft YaHei , sans-serif"
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
          maxWidth: "30%",
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
            width: "100%", // Make sure the image fills its container
            maxWidth: "100%", // Limit image width to not exceed its container
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};
export default DetailLeft;
