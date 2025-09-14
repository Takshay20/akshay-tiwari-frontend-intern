import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { FaBook, FaFlask, FaCode, FaGlobe } from "react-icons/fa";

const quickActions = [
  { title: "Mathematics", icon: <FaBook size={24} />, color: "#1976d2" },
  { title: "Science", icon: <FaFlask size={24} />, color: "#2e7d32" },
  { title: "History", icon: <FaGlobe size={24} />, color: "#f57c00" },
  { title: "Coding", icon: <FaCode size={24} />, color: "#6a1b9a" },
];

const PlaceholderPage: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        What do you want to learn today? 🎯
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Select a subject below to start exploring.
      </Typography>

      {/* Cards */}
      <Grid container spacing={3} mt={2}>
        {quickActions.map((action) => (
          <Grid item xs={12} sm={6} md={3} key={action.title}>
            <Card
              sx={{
                borderRadius: 3,
                textAlign: "center",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    bgcolor: action.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {action.icon}
                </Box>
                <Typography variant="h6">{action.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlaceholderPage;
