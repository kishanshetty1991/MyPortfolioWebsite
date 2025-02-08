import { Box, Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import SendIcon from "@mui/icons-material/Send";


const About = () => {
  const component = useRef(null);
  return (
    <Box sx={{ marginTop: 20 }} ref={component}>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl-px-16 ">
      <div>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corporis ea beatae, maxime id sint et aspernatur vitae ut, eius incidunt minima esse quidem sunt vel delectus ab veniam adipisci.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corporis ea beatae, maxime id sint et aspernatur vitae ut, eius incidunt minima esse quidem sunt vel delectus ab veniam adipisci.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corporis ea beatae, maxime id sint et aspernatur vitae ut, eius incidunt minima esse quidem sunt vel delectus ab veniam adipisci.  
      </Typography>
      <div>
      <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
      </div>
      </div>
      </div>
      </Box>
  ); 
};

export default About;
