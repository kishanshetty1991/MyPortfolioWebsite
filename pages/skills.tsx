import { useThemeContext } from "@/components/ThemeProvider";
import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";

const Skills = () => {
  const component = useRef(null);
  const { mode } = useThemeContext();
  const nameColor = mode === "dark" ? "text-slate-300" : "text-slate-800";
  const subNameColor = mode === "dark" ? "text-slate-500" : "text-slate-300";

  return (
    <Box
      sx={{
        mt: { xs: 20, sm: 5, md: 5, lg: 5 },
        px: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
      }}
      ref={component}
    >
      <h5
        className="mb-4 text-center text-[clamp(0.5rem, 1.5vmin, 0.5rem)] font-medium leading-tight tracking-tight md:mb-0"
        aria-label={"Get To Know More"}
      >
        <span className={`block ${subNameColor}`}>Discover My</span>
      </h5>

      <h1
        className="mb-8 text-center text-[clamp(2rem,10vmin,10rem)] font-bold leading-none tracking-tighter md:mb-0"
        aria-label={"About Me."}
      >
        <span className={`block ${nameColor}`}>Technical Skills</span>
      </h1>
    </Box>
  );
};

export default Skills;
