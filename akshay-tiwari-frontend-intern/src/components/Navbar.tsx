import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import { FaSearch, FaBell, FaEllipsisV } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#1a1a2e",
        boxShadow: "none",
        borderBottom: "1px solid #333",
      }}
    >
      <Toolbar>
        {/* Left side - Chat Title */}
        <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}>
          Select a Chat
        </Typography>

        {/* Right side - Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit">
            <FaSearch />
          </IconButton>
          <IconButton color="inherit">
            <FaBell />
          </IconButton>
          <IconButton color="inherit">
            <FaEllipsisV />
          </IconButton>
          <Avatar sx={{ bgcolor: "#1976d2" }}>A</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
