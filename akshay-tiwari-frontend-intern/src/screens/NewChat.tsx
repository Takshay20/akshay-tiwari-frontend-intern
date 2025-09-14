import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  TextField,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useChatStore } from "../store/chatStore.ts";

// MUI icons
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const quickPrompts = [
  "Explain React basics",
  "What is Node.js?",
  "Fundamental concepts of AI",
  "How does JavaScript work?",
];

const NewChat: React.FC = () => {
  const navigate = useNavigate();
  const { newChat, setCurrentChat, sendMessage } = useChatStore();
  const [input, setInput] = React.useState("");

  // handle quick card click
  const handleQuickPrompt = (text: string) => {
    const id = newChat(text);
    setCurrentChat(id);
    sendMessage(text);
    navigate(`/chat/${id}`);
  };

  // handle manual input
  const handleSend = () => {
    if (!input.trim()) return;
    const id = newChat(input);
    setCurrentChat(id);
    sendMessage(input);
    navigate(`/chat/${id}`);
    setInput("");
  };

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box p={3} flex={1} overflow="auto">
        {/* Greeting */}
        <Typography variant="h5" gutterBottom>
          👋 Hi, Learner!
        </Typography>
        <Typography variant="h6" gutterBottom>
          What do you want to learn today?
        </Typography>

        {/* Quick Action Cards */}
        <Box display="flex" gap={2} flexWrap="wrap" mb={4}>
          {quickPrompts.map((prompt, index) => (
            <Card key={index} sx={{ width: 220 }}>
              <CardActionArea onClick={() => handleQuickPrompt(prompt)}>
                <CardContent>
                  <Typography>{prompt}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Bottom Input Bar */}
      <Box
        p={2}
        display="flex"
        alignItems="center"
        borderTop="1px solid #ddd"
        bgcolor="white"
      >
        <Box
          display="flex"
          alignItems="center"
          flex={1}
          bgcolor="#f5f5f5"
          borderRadius="25px"
          px={2}
        >
          <IconButton size="small">
            <AttachFileIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <CameraAltIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>

          <TextField
            variant="standard"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            InputProps={{
              disableUnderline: true,
            }}
            sx={{ ml: 1, flex: 1 }}
          />
        </Box>

        {/* Send Button (round like Figma) */}
        <IconButton
          color="primary"
          sx={{
            ml: 2,
            bgcolor: "#1976d2",
            color: "white",
            "&:hover": { bgcolor: "#1565c0" },
          }}
          onClick={handleSend}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NewChat;
