import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useChatStore } from "../store/chatStore";
import { useNavigate } from "react-router-dom";

const cards = [
  "Write a product description for a minimalist smartwatch",
  "Give me a concise summary of this meeting transcript",
  "Generate a rap battle between a toaster and an AI microwave",
];

export default function QuickCards() {
  const sendMessage = useChatStore((s) => s.sendMessage);
  const setCurrentChat = useChatStore((s) => s.setCurrentChat);
  const navigate = useNavigate();

  const onClick = (text: string) => {
    const chatId = sendMessage(text);
    setCurrentChat(chatId);
    navigate(`/chat/${chatId}`);
  };

  return (
    <Grid container spacing={2}>
      {cards.map((c, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Paper
            elevation={2}
            sx={{ padding: 2, cursor: "pointer", minHeight: 90 }}
            onClick={() => onClick(c)}
          >
            <Typography variant="body1">{c}</Typography>
            <Typography variant="caption" className="small-muted">
              Quick action
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
