import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import { FaHome, FaCompass, FaQuestionCircle, FaCog } from "react-icons/fa";
import { useChatStore } from "../store/chatStore.ts"; // ✅ import store

const Sidebar: React.FC = () => {
  const { chats, currentChatId, setCurrentChat, newChat } = useChatStore();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          bgcolor: "#0d0d0d",
          color: "#fff",
        },
      }}
    >
      {/* App Title */}
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Chat App
        </Typography>
      </Box>

      {/* Navigation */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <FaHome color="white" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FaCompass color="white" />
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FaQuestionCircle color="white" />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FaCog color="white" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>

      <Divider sx={{ bgcolor: "grey.800" }} />

      {/* Chats Section */}
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, color: "grey.400" }}>
          My Chats
        </Typography>
        <List>
          {chats.map((chat) => (
            <ListItem
              key={chat.id}
              button
              selected={currentChatId === chat.id}
              onClick={() => setCurrentChat(chat.id)} // ✅ store update
              sx={{
                "&.Mui-selected": {
                  bgcolor: "#1565c0",
                  color: "white",
                },
              }}
            >
              <ListItemText primary={chat.title} />
            </ListItem>
          ))}
        </List>

        {/* New Chat Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 1, bgcolor: "#1976d2", "&:hover": { bgcolor: "#1565c0" } }}
          onClick={newChat} // ✅ call store method
        >
          + New Chat
        </Button>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      {/* User Profile */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          borderTop: "1px solid #333",
        }}
      >
        <Avatar sx={{ bgcolor: "#1976d2", mr: 1 }}>A</Avatar>
        <Typography variant="body2">Akshay</Typography>
        <IconButton sx={{ ml: "auto", color: "white" }}>
          <FaCog />
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
