"use client";
import {
  Alert,
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useState, useEffect } from "react";
import { Country, travelType, typeSeaContainer, GoodsType } from "@/utils/data";
import HeroPages from "@/components/hero/HeroPages";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export default function Page() {
  const [errorMsg, setErrorMsg] = useState("");
  const [type, setType] = useState(false); // Default value for Trip Type
  const [open, setOpen] = useState(false); // Default value for Trip Type

  const handleTripTypeChange = (event) => {
    setType(event.target.value); // Update the selected trip type
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Stack gap={5}>
      <HeroPages title={"Make A Quote"} page={"Make A Quote"} />
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "70%",
          marginX: "auto",
          marginTop: { xs: "0", md: "40px" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={3}
          alignItems={"center"}
        >
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Personal Data:{" "}
          </Typography>
          <TextField
            type="text"
            id="Name"
            label="Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon sx={{ color: "#1a237e" }} />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1 }}
          />
          <TextField
            sx={{ flex: 1 }}
            type="email"
            id="Email"
            autoComplete="true"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#1a237e" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="number"
            label="Number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: "#1a237e" }} />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1 }}
          />
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={3}
          alignItems={"center"}
        >
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Country:
          </Typography>
          <TextField
            id="outlined-select-currency"
            select
            defaultValue={"1"}
            label="From"
            sx={{ width: { xs: "100%", md: 0 }, flex: 1 }}
          >
            {Country &&
              Country.map((option) => (
                <MenuItem key={option.code} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            defaultValue={"1"}
            label="To"
            sx={{ width: { xs: "100%", md: 0 }, flex: 1 }}
          >
            {Country &&
              Country.map((option) => (
                <MenuItem key={option.code} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={3}
          alignItems={"center"}
        >
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Container Details:
          </Typography>

          {/* Trip Type Dropdown */}
          <TextField
            id="outlined-select-currency"
            select
            value={type}
            onChange={handleTripTypeChange}
            label="Trip Type"
            sx={{ width: { xs: "100%", md: 0 }, flex: 1 }}
          >
            {travelType &&
              travelType.map((option) => (
                <MenuItem key={option.id} value={option.title}>
                  {option.title}
                </MenuItem>
              ))}
          </TextField>

          {/* Conditional Container Type Dropdown */}
          {type === "Sea" ? (
            <TextField
              id="outlined-select-currency"
              select
              label="Container Type"
              sx={{ width: { xs: "100%", md: 0 }, flex: 1 }}
            >
              {typeSeaContainer &&
                typeSeaContainer.map((option) => (
                  <MenuItem key={option.id} value={option.title}>
                    {option.title}
                  </MenuItem>
                ))}
            </TextField>
          ) : (
            <TextField
              id="select-currency"
              select
              disabled
              label="Container Type"
              sx={{ width: { xs: "100%", md: 0 }, flex: 1 }}
            ></TextField>
          )}
        </Stack>

        <Stack gap={3} sx={{ width: "100%" }} alignItems={"center"}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={3}
            sx={{ width: "100%" }}
          >
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Dominion Data:
            </Typography>
            <TextField
              sx={{ flex: 1 }}
              type="number"
              id="width"
              label="Width"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">M</InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              sx={{ flex: 1 }}
              type="number"
              id="height"
              label="Height"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">M</InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              sx={{ flex: 1 }}
              type="number"
              id="lenght"
              label="Lenght"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">M</InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              sx={{ flex: 1 }}
              type="number"
              id="weight"
              label="weight"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                },
              }}
            />
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            sx={{ width: { xx: "100%", md: "50%" } }}
          >
            <TextField
              id="outlined-select-currency"
              select
              defaultValue={"1"}
              label="Goods Type"
              sx={{ width: { xs: "100%", md: 0 }, flex: 1 }}
            >
              {GoodsType &&
                GoodsType.map((option) => (
                  <MenuItem key={option.id} value={option.title}>
                    {option.title}
                  </MenuItem>
                ))}
            </TextField>
            <TextField
              sx={{ flex: 1 }}
              type="number"
              id="amount"
              label="Amount"
            />
          </Stack>
        </Stack>

        <Button
          variant="contained"
          type="submit"
          sx={{
            width: "50%",
            height: "3rem",
            marginX: "auto",
            background: "#1a237e",
            fontSize: "1.2rem",
            fontWeight: "bold",
            "&:hover": {
              color: "#fff",
              backgroundColor: "black",
            },
            marginBottom: "60px",
          }}
        >
          submit
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMsg}
          </Alert>
        </Snackbar>
      </Box>
    </Stack>
  );
}
