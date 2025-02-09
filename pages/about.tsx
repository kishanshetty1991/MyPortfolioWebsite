import { Box, Button, Container, Typography } from "@mui/material";
import { useThemeContext } from "@/components/ThemeProvider";
import React, { useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import AwardIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import moment from "moment";
import { dancingScript, roboto } from "@/components/Navbar/Navbar";

const About = () => {
  const component = useRef(null);
  const { mode } = useThemeContext();

  const calculateExperience = () => moment().year() - 2022;

  const backColor =
    mode === "dark"
      ? "bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500"
      : "bg-gradient-to-tr from-amber-600 via-pink-600 to-purple-800";
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
        <span className={`block ${subNameColor}`}>Get To Know More</span>
      </h5>

      <h1
        className="mb-8 text-center text-[clamp(2rem,10vmin,10rem)] font-bold leading-none tracking-tighter md:mb-0"
        aria-label={"About Me."}
      >
        <span className={`block ${nameColor}`}>About Me</span>
      </h1>
      <Container maxWidth="lg" style={{ textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 2, sm: 4, md: 8 },
            py: { xs: 0, sm: 5, md: 10 },
          }}
        >
          {/* Left Side - Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant={{ xs: "h6", sm: "h5", md: "h4", lg: "h2" }} // Dynamically adjust heading size
              sx={{
                fontFamily: roboto.style.fontFamily,
                maxWidth: { xs: "95%", sm: "85%", md: "75%", lg: "100%" }, // Control text width
                textAlign: { xs: "center", md: "left" }, // Center for mobile, left-align for larger screens
                wordWrap: "break-word",
                overflowWrap: "break-word",
                mx: "auto", // Centers the text horizontally on smaller screens
                lineHeight: { xs: "1.4", md: "1.6" }, // Adjust line height for readability
              }}
            >
              I am a passionate <strong>Full-Stack Developer</strong> with
              expertise in the
              <strong> MERN (MongoDB, Express.js, React, Node.js) Stack</strong>,
              dedicated to building scalable and efficient web applications. I
              have also worked with
              <strong> Python, Java, and .NET Full-Stack</strong> technologies.
              Additionally, I have explored blockchain development with{" "}
              <strong> Solidity</strong>, contributing to smart contract-based
              applications. Beyond traditional web development, I am deeply
              interested in{" "}
              <strong> Artificial Intelligence (AI) and Machine Learning</strong>
              , constantly learning and adapting to advancements in the field.
              My problem-solving mindset and passion for innovation drive me to
              create robust, efficient, and impactful solutions that shape the
              future of technology.
            </Typography>

            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button variant="contained" size="large" endIcon={<SendIcon />}>
                Send
              </Button>
            </Box>
          </Box>

          {/* Right Side - Experience & Education Cards */}
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Stacks on mobile, row on tablet/desktop
                gap: 3,
                width: "100%",
                marginBottom: 10,
              }}
            >
              {/* Experience Card */}
              <Box
                sx={{
                  p: { xs: 2, sm: 4 }, // Adjust padding
                  width: { xs: "100%", sm: "80%" }, // Full width on very small screens
                  height: { xs: "auto", sm: 200 }, // Auto height for text wrapping on small devices
                  display: "flex",
                  flexDirection: { xs: "row", sm: "column" }, // Row on small, column on larger screens
                  alignItems: "center",
                  justifyContent: { xs: "space-between", sm: "center" },
                  bgcolor: mode === "dark" ? "black" : "white",
                  borderRadius: 3,
                  textAlign: { xs: "left", sm: "center" }, // Left align for row layout, center for column
                  boxShadow: 3,
                  gap: { xs: 2, sm: 1 }, // Spacing between elements
                }}
                className={backColor}
              >
                <AwardIcon
                  fontSize="large"
                  sx={{ color: mode === "dark" ? "black" : "whitesmoke" }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: mode === "dark" ? "black" : "white" }}
                >
                  Experience
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: mode === "dark" ? "black" : "white" }}
                >
                  {calculateExperience()}+ Years FullStack Development
                </Typography>
              </Box>

              {/* Education Card */}
              <Box
                sx={{
                  p: { xs: 2, sm: 4 }, // Adjust padding
                  width: { xs: "100%", sm: "80%" }, // Full width on very small screens
                  height: { xs: "auto", sm: 200 }, // Auto height for text wrapping on small devices
                  display: "flex",
                  flexDirection: { xs: "row", sm: "column" }, // Row on small, column on larger screens
                  alignItems: "center",
                  justifyContent: { xs: "space-between", sm: "center" },
                  bgcolor: mode === "dark" ? "black" : "white",
                  borderRadius: 3,
                  textAlign: { xs: "left", sm: "center" }, // Left align for row layout, center for column
                  boxShadow: 3,
                  gap: { xs: 2, sm: 1 }, // Spacing between elements
                }}
                className={backColor}
              >
                <SchoolIcon
                  fontSize="large"
                  sx={{
                    color: mode === "dark" ? "black" : "whitesmoke",
                    mb: 1,
                  }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: mode === "dark" ? "black" : "white" }}
                >
                  Education
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: mode === "dark" ? "black" : "white" }}
                >
                  Masters in Computer Application
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
