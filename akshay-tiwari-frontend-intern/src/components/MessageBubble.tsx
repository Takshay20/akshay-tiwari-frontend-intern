import React from "react";
import { Message } from "../types";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.sender === "user";
  return (
    <Box display="flex" justifyContent={isUser ? "flex-end" : "flex-start"} mb={1}>
      <Paper
        elevation={1}
        sx={{
          padding: 1,
          maxWidth: "75%",
          background: isUser ? "linear-gradient(90deg,#2f80ed,#6aa0ff)" : "rgba(255,255,255,0.06)",
          color: "#fff",
        }}
      >
        <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
          {message.text}
        </Typography>

        {message.attachments && message.attachments.length > 0 && (
          <Box mt={1} display="flex" gap={1} flexWrap="wrap">
            {message.attachments.map((a) => (
              <Chip key={a.id} label={a.name} size="small" />
            ))}
          </Box>
        )}
      </Paper>
    </Box>
  );
}
