import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { FaPaperPlane } from "react-icons/fa";
import { useChatStore } from "../store/chatStore.ts";

const ActiveChat: React.FC = () => {
  const { chats, currentChatId, sendMessage } = useChatStore();
  const [message, setMessage] = useState("");

  const activeChat = chats.find((chat) => chat.id === currentChatId);

  const handleSend = () => {
    if (message.trim() === "") return;
    sendMessage(message);
    setMessage("");
  };

  if (!activeChat) {
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" color="textSecondary">
          Select a chat or start a new one
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Chat Title */}
      <Box sx={{ p: 2, borderBottom: "1px solid #ddd" }}>
        <Typography variant="h6">{activeChat.title}</Typography>
      </Box>

      {/* Messages */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
        <List>
          {activeChat.messages.map((msg) => (
            <ListItem
              key={msg.id}
              sx={{
                justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <ListItemText
                primary={msg.text}
                sx={{
                  bgcolor: msg.sender === "user" ? "#1976d2" : "#eee",
                  color: msg.sender === "user" ? "white" : "black",
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  maxWidth: "70%",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      {/* Input Box */}
      <Box sx={{ display: "flex", p: 2, borderTop: "1px solid #ddd" }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <IconButton
          color="primary"
          onClick={handleSend}
          sx={{ ml: 1, bgcolor: "#1976d2", "&:hover": { bgcolor: "#1565c0" } }}
        >
          <FaPaperPlane color="white" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ActiveChat;
