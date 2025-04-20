import SkillDataProvider from "@/components/SkillDataProvider";
import { useThemeContext } from "@/components/ThemeProvider";
import { Backend_skill, Frontend_skill, Full_stack } from "@/constants";
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
        mt: { xs: 2, sm: 20, md: 5, lg: 5 },
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
        className="text-center text-[clamp(2rem,10vmin,10rem)] font-bold leading-none tracking-tighter md:mb-0"
        aria-label={"About Me."}
      >
        <span className={`block ${nameColor}`}>Technical Skills</span>
      </h1>

      <section
        className="flex flex-col items-center gap-6 h-full relative overflow-hidden sm:scale-100"
        style={{ transform: "scale(0.9)" }}
      >
        <div className="w-full overflow-x-auto scrollbar-hide sm:overflow-visible px-2">
          <div
            className="
          grid 
          grid-rows-4
          grid-flow-col 
          gap-4 
          sm:grid-rows-none sm:grid-flow-row 
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 
          justify-center 
          items-center 
          sm:w-full 
          w-max
          max-w-[1600px] mx-auto
        "
          >
            {[...Frontend_skill, ...Backend_skill, ...Full_stack].map(
              (skill, index) => (
                <div key={index} className="min-w-[120px] sm:min-w-0">
                  <SkillDataProvider
                    src={skill.Image}
                    width={skill.width}
                    height={skill.height}
                    index={index}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Skills;
