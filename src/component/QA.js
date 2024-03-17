import { Box, Grid, Typography, Button } from "@mui/material";

export default function QA() {
  return (
    <Box>
      <hr className="section-divider" />
      <Box sx={{ flexGrow: 1, my: 4, padding: "5rem" }}>
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
            <Typography variant="subtitle1" textAlign="left">
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
                padding: "10px",
                gap: "10px",
                borderRadius: "5px",
              }}
            >
              联系客服
            </Button>
          </Grid>
        </Grid>
      </Box>

      <hr className="section-divider" />
    </Box>
  );
}
