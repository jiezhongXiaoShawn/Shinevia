import Intro from "./about/intro";
import Vision from "./about/vision";
import Honer from "./about/honor";
import Ending from "./about/ending";
import { Box } from "@mui/system";

const About = () => {
  return (
    <Box>
      <Intro />
      <Vision />
      <Honer />
      <Ending />
    </Box>
  );
};
export default About;
