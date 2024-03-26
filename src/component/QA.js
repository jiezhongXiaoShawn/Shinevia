import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Divider,
} from "@mui/material";
import Contact from "../page/Contact";
import { useState } from "react";

export default function QA() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container display="flex" maxWidth="lg" marginTop="10rem">
      <Divider
        sx={{
          bgcolor: "grey",
          height: "0.4px",
          my: 5,
        }}
      />
      <Box sx={{ flexGrow: 1, my: 4 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={8}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              textAlign="left"
            >
              如有任何疑问 ?
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign="left"
              fontWeight={"400"}
              fontFamily={'"Microsoft YaHei , sans-serif"'}
            >
              如果您对我们的设备、定制需求和一般查询有疑问，请随时与我们的专业支持团队联系。
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="right">
            <Button
              variant="contained"
              sx={{
                background: "#000",
                width: "251px",
                height: "75px",
                //padding: "10px",
                gap: "10px",
                borderRadius: "5px",
                fontweight: "700",
                fontSize: "14px",
                fontFamily: "Microsoft YaHei , sans-serif",
                "&:hover": {
                  background: "#fff",
                  color: "#000",
                },
              }}
              onClick={handleClickOpen}
            >
              联系客服
            </Button>
            <Contact open={open} handleClose={handleClose} />
          </Grid>
        </Grid>
      </Box>
      <Divider
        sx={{
          bgcolor: "grey",
          height: "0.4px",
          my: 5,
        }}
      />
    </Container>
  );
}
