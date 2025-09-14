import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar.tsx";
import ActiveChat from "./screens/ActiveChat.tsx";

const App: React.FC = () => {
  const [currentChat, setCurrentChat] = useState<string | null>(null);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar gets currentChat + setter */}
      <Sidebar currentChat={currentChat} setCurrentChat={setCurrentChat} />

      {/* Active Chat Screen */}
      <Box sx={{ flexGrow: 1, bgcolor: "#121212", color: "#fff" }}>
        <ActiveChat currentChat={currentChat} />
      </Box>
    </Box>
  );
};

export default App;
