import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../ThemeProvider";
import { motion } from "framer-motion";

const ThemeToggleButton: React.FC = () => {
  const { toggleColorMode, mode } = useThemeContext();

  return (
    <motion.div
      whileTap={{ rotate: 180, scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      <Tooltip
        title={
          mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
        }
        arrow
      >
        <IconButton onClick={toggleColorMode}>
          {mode === "light" ? (
            <Brightness4Icon sx={{ color: "#000000" }} />
          ) : (
            <Brightness7Icon sx={{ color: "#ffffff" }} />
          )}
        </IconButton>
      </Tooltip>
    </motion.div>
  );
};

export default ThemeToggleButton;
