import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
function MediaCard({ title, description, image, username }) {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  return (
    <Stack
      gap={2}
      sx={{
        width: "350px",
        padding: "15px 27px",
        backgroundColor: "white",
        borderRadius: "7px",
        userSelect: "none",
        minHeight: "400px",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
        <Rating
          name="text-feedback"
          value={5}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          sx={{ color: "#1a237e" }}
        />
        <Box sx={{ ml: 2 }}>{labels[5]}</Box>
      </Box>
      <Typography
        sx={{
          color: "#00060F",
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ height: "30%", color: "#5A5D63" }}>
        {description}
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{ flexWrap: "nowrap" }}
        gap={2}
      >
      <Avatar>{username.charAt(0)}</Avatar>

        <Typography
          sx={{
            color: "#1a237e",
            fontWeight: 600,
            display: "block",
          }}
        >
          {username}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default MediaCard;
