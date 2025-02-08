import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

interface ThemeContextType {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setMode(savedMode as "light" | "dark");
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // Light background color
            primary: {
              main: "#000000"
            },
            secondary: {
              main: "#8c52ff",
            },
            
            background: {
              default: "linear-gradient(90deg, #8c52ff, #5ce1e6)", 
            },
          }
        : {
            // Dark background color
            primary: {
              main: "#ffffff", 
            },
            secondary: {
              main: "#003c71", 
            },
            background: {
              default: "linear-gradient(90deg, #000000, #003c71)", 
            },
          }),
    },
    typography: { 
        allVariants: {
            textTransform: 'none',
        }
    }
  });

  return (
    <ThemeContext.Provider value={{ toggleColorMode, mode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
