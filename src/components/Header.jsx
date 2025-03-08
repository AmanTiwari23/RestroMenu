import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        component="div"
        className="flex flex-grow items-center gap-2 border border-black text-xl text-black font-bold m-1"
      >
        <img className="h-16 w-16 rounded-lg" src={logo} />
        YumYum Food
      </Typography>
      <Divider />
      <ul className="text-xl text-black ">
        <li className="mt-2  p-2 shadow-lg">
          <Link to={"/"}> Home</Link>
        </li>
        <li className="mt-2  p-2 shadow-lg  ">
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li className="mt-2  p-2 shadow-lg">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="mt-2   shadow-lg p-2 ">
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "orange" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              className="flex flex-grow items-center gap-2 text-white"
            >
              <img className="h-16 w-16 rounded-lg" src={logo} />
              YumYum Food
            </Typography>

            <Box className="md:block hidden">
              <ul className="list-none flex items-center justify-center no-underline  ">
                <li className="ml-5 mr-5 text-white ">
                  <NavLink  to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li className="ml-5 mr-5 text-white ">
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li className="ml-5 mr-5  text-white">
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li className="ml-5 mr-5 text-white ">
                  <NavLink to={"/about"}>About</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
