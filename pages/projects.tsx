import { Box } from "@mui/material";
import React, { useRef } from "react";
import { useThemeContext } from "@/components/ThemeProvider";
import ProjectsProvider from "@/components/ProjectsProvider";

const Projects = () => {
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
        <span className={`block ${subNameColor}`}>Explore My</span>
      </h5>

      <h1
        className="mb-8 text-center text-[clamp(2rem,10vmin,10rem)] font-bold leading-none tracking-tighter md:mb-0"
        aria-label={"About Me."}
      >
        <span className={`block ${nameColor}`}>Projects</span>
      </h1>

      <div className="mt-10 w-full">
        <div className="w-full overflow-x-auto scrollbar-hide lg:overflow-visible">
          <div className="flex flex-nowrap bg-transparent lg:flex-wrap gap-6 justify-start lg:justify-center items-stretch min-w-max px-4 pb-4">
            <ProjectsProvider
              src={"/images/HastaarApp.png"}
              width={300}
              height={300}
              url={"https://github.com/kishanshetty1991/Hasttar-BlockChain-App"}
              title={"Hasttar Web 3.0 BlockChain Application"}
              description={
                "Hasttar is my very first application that is based on web 3.0 its built using Solidity and React.js. The main application of the project is for connecting and storing transactions on the blockchain. User can use this application to send or receive Ethereum."
              }
              index={0}
            />

            <ProjectsProvider
              src={"/images/github.png"}
              width={300}
              height={300}
              url={"https://github.com/kishanshetty1991/Covid--19-Feedback-app"}
              title={"Covid 19 Feedback Application"}
              description={
                "Covid 19 Feedback Web App is a platform built to help employers gather feedback from employees about their experiences during the Covid 19 pandemic. It enables open communication on topics like remote work, mental well-being, and workplace safety using a clean, user-friendly interface."
              }
              index={1}
            />

            <ProjectsProvider
              src={"/images/github.png"}
              width={300}
              height={300}
              url={"https://github.com/kishanshetty1991/expensewebsite"}
              title={"Daily Expense Check Website"}
              description={
                "Daily Expense Website is a full-stack web application developed using Django for the backend and React.js for the frontend, seamlessly integrating the Chart.js library for data visualization. The platform allows users to efficiently track and manage their daily expenses through a clean, user-friendly interface."
              }
              index={0}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Projects;
