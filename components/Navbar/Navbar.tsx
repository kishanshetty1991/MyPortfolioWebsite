import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useThemeContext } from "../ThemeProvider";
import profilepic from "../../assets/snapMobile.png";
import { Roboto, Dancing_Script } from "@next/font/google";
import ThemeToggleButton from "../ThemeProviderButton";
import Drawer from "@/components/Drawer";
import Image from "next/image";

const pages = ["Home", "About", "Skills", "Projects", "Message"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
});

const Navbar = () => {
  const theme = useTheme();
  const { mode } = useThemeContext();
  const [tooltipText, setTooltipText] = React.useState("You are at the top of my portfolio!");

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [showDrawer, setShowDrawer] = React.useState(false);

  const handleMenuClick = (page: string) => {
    if (page.toLowerCase() === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(page.toLowerCase());
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setAnchorElNav(null); // Close menu after navigation
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setTooltipText("You are at the top of my portfolio!");
    } else {
      setTooltipText("Press me to pull you back to the top?");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuItems = (isMobile: boolean) =>
    pages.map((page, index) => (
      <motion.div
        key={page}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        {isMobile ? (
          <MenuItem onClick={() => handleMenuClick(page)}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontFamily: roboto.style.fontFamily,
              }}
            >
              {page}
            </Typography>
          </MenuItem>
        ) : (
          <Button
            onClick={() => handleMenuClick(page)}
            sx={{ my: 2, color: "black", display: "block" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: roboto.style.fontFamily,
                textAlign: "center",
                color: theme.palette.primary.main,
              }}
            >
              {page}
            </Typography>
          </Button>
        )}
      </motion.div>
    ));

  return (
    <>
      <AppBar position="sticky" sx={{ background: "transparent" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Tooltip title={tooltipText}>
              <IconButton
                color="primary"
                onClick={() => handleMenuClick("Home")}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.5 }}
                >
                  <Image className="border border-white/15 rounded-full" src={profilepic} alt={"From the top!"} width={50} />
                </motion.div>
              </IconButton>
            </Tooltip>

            {/* Mobile Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                onClick={(e) => setAnchorElNav(e.currentTarget)}
                color="inherit"
              >
                <MenuIcon sx={{ color: mode === "light" ? "#000" : "#fff" }} />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
              >
                {MenuItems(true)}
              </Menu>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {MenuItems(false)}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Change Mode">
                <ThemeToggleButton />
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
  );
};

export default Navbar;
