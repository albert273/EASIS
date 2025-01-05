"use client";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { Container, styled } from "@mui/system";
import gsap from "gsap";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

function Form({ onFormSubmit }) {
  const downImgRef = useRef(null);
  const sectionRef = useRef(null);
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    outline: none;
    min-height: 152px;
    max-width: 100%; 
    width:100%;   
    line-height: 52px;
    font-size: 16px;
    background: #fff;
    border-radius: 12px 12px 0px 12px;
    text-transform: capitalize;
    font-weight: 400;
    font-family: "Outfit", sans-serif;
    padding-left: 20px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid ${
          theme.palette.mode === "dark" ? grey[700] : grey[200]
        };
        box-shadow: 0px 2px 2px ${
          theme.palette.mode === "dark" ? grey[900] : grey[50]
        };
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          outline: 0;
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${
            theme.palette.mode === "dark" ? blue[600] : blue[200]
          };
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.set(downImgRef.current, { y: "100%", opacity: 0 });

            gsap.to(downImgRef.current, {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement); // Observe the section
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement); // Clean up the observer on component unmount
      }
    };
  }, []);
  return (
    <Container maxWidth={"lg"} ref={sectionRef}>
      <Stack
        direction={"column"}
        sx={{
          padding: "32px",
          backgroundColor: { xs: "#ffffff", md: "white" },
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={downImgRef}
      >
        <Typography
          sx={{
            fontSize: "28px",
            lineHeight: "24px",
            fontWeight: 600,
            color: "#0C0504",
          }}
        >
          Send Us A Message
        </Typography>
        <Typography
          sx={{
            paddingBottom: "24px",
            paddingTop: "16px",
          }}
        >
          Your email address will not be published. Required fields are marked.
        </Typography>
        <Stack
          gap={4}
          noValidate
          component="form"
          autoComplete="off"
          sx={{ width: { xs: "100%", md: "80%" } }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} gap={{ xs: 4, sm: 0 }}>
            <TextField
              type="text"
              placeholder="First name"
              style={{
                borderRadius: "7px",
                outline: "none",
                height: "52px",
                width: "100%",
                fontSize: "16px",
                color: "#4A4A49",
                background: "#fff",
                borderRadius: "7px",
                textTransform: "capitalize",
                fontWeight: 400,
                paddingLeft: { xs: "20px", md: "20px" },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              type="text"
              placeholder="Last name"
              sx={{
                borderRadius: "7px",
                outline: "none",
                height: "52px",
                width: "100%",
                lineHeight: "52px",
                fontSize: "16px",
                color: "#4A4A49",
                background: "#fff",
                borderRadius: "7px",
                textTransform: "capitalize",
                fontWeight: 400,
                paddingLeft: { xs: 0, md: "20px" },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} gap={{ xs: 4, sm: 0 }}>
            <TextField
              type="email"
              placeholder="Email"
              style={{
                borderRadius: "7px",
                outline: "none",
                height: "52px",
                width: "100%",
                lineHeight: "52px",
                fontSize: "16px",
                color: "#4A4A49",
                background: "#fff",
                borderRadius: "7px",
                textTransform: "capitalize",
                fontWeight: 400,
                paddingLeft: { xs: 0, md: "20px" },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              placeholder="Phone number"
              sx={{
                borderRadius: "7px",
                outline: "none",
                height: "52px",
                width: "100%",
                lineHeight: "52px",
                fontSize: "16px",
                color: "#4A4A49",
                background: "#fff",
                textTransform: "capitalize",
                fontWeight: 400,
                paddingLeft: { xs: 0, md: "20px" },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneInTalkIcon />
                    </InputAdornment>
                  ),
                },
              }}
              inputProps={{
                inputMode: "numeric", // Ensures numeric input on mobile devices
                pattern: "[0-9]*", // Accepts only numbers
                maxLength: 15, // Optional: limits the length of phone numbers
              }}
            />
          </Stack>
          <Stack>
            <Box sx={{ width: "100%" }}>
              <Textarea aria-label="empty textarea" placeholder="Message" />
            </Box>
          </Stack>
          <Stack
            sx={{
              width: { xs: "100%", md: "35%" },
              marginX: "auto",
            }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#FF5E14",
                padding: "14px 16px",
                fontWeight: "bold",
                fontSize: "26px",
                lineHeight: "16px",
                transition: ".3s",
                "&:hover": { backgroundColor: "black" },
              }}
              type="submit"
            >
              send
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Form;
