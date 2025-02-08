import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/dancing-script";
import { useTheme } from "@mui/material/styles";
import Navbar from "@/components/Navbar";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "./index";
import About from "./about";
import Message from "./contact";
import Projects from "./projects";
import Skills from "./skills";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider>
        <CssBaseline />
        <ThemedApp Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </>
  );
}

function ThemedApp({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: theme.palette.background.default,
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Box>
        <section id="home" className="sectionData">
          <Home />
        </section>
        <section id="about" className="sectionData">
          <About />
        </section>
        <section id="skills" className="sectionData">
          <Skills />
        </section>
        <section id="projects" className="sectionData">
          <Projects />
        </section>
        <section id="message" className="sectionData">
          <Message />
        </section>
      </Box>
    </Box>
  );
}
