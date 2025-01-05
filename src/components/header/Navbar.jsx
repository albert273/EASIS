"use client";
import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AppBar from "./AppBar";
import Link from "next/link";

const buttons = [
  { id: "1", title: "Home", link: "/" },
  { id: "2", title: "About Us", link: "/AboutUs" },
  { id: "3", title: "Service", link: "/Services" },
  { id: "4", title: "Contact Us", link: "/ContactUs" },
  { id: "6", title: "Projects", link: "/Projects" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [appBar, setAppBar] = useState(false);
  const appBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || window.innerWidth < 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        appBar &&
        appBarRef.current &&
        !appBarRef.current.contains(event.target)
      ) {
        setAppBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [appBar]);
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          width: isScrolled ? "100%" : "80%", // Full width on scroll, smaller when not scrolled
          paddingY: "12px",
          backgroundColor: "#f8f9fa",
          paddingX: isScrolled ? "-50px" : "24px",
          borderRadius: isScrolled ? "0" : "87px", // Rounded when not scrolled
          boxShadow: isScrolled
            ? "0px 4px 15px rgba(0, 0, 0, 0.1)"
            : "0px 4px 8px rgba(0, 0, 0, 0.05)",
          zIndex: 2999,
          position: "fixed",
          top: isScrolled ? "0" : "24px", // Navbar at the top on scroll, below when not scrolled
          left: 0,
          right: 0,
          marginX: "auto", // Center the navbar when smaller
          transition: "all 0.5s ease-in-out", // Smooth transition for width and position
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={1}
          sx={{ cursor: "pointer", marginLeft: isScrolled ? "8%" : 0 }}
        >
          <Box>
            <LanguageIcon sx={{ color: "#FF5E14", fontSize: "2rem" }} />
          </Box>
          <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
            Cargon
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          gap={2}
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          {buttons.map((button) => (
            <Stack key={button.id} direction={"row"}>
              <Link href={button.link}>
              <Typography
                sx={{
                  color: "#5A5D63",
                  fontSize: "16px",
                  "&:hover": { color: "black", cursor: "pointer" },
                  transition: ".3s",
                }}
              >
                {button.title}
              </Typography>
              </Link>

            </Stack>
          ))}
        </Stack>

        <Box
          sx={{
            marginRight: isScrolled ? "8%" : 0,
            display: { xs: "none", lg: "flex" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "50px",
              backgroundColor: "#FF5E14",
              padding: "10px 16px",
              fontWeight: "bold",
              fontSize: "16ps",
              lineHeight: "16px",
              transition: ".3s",
              "&:hover": { backgroundColor: "black" },
            }}
            endIcon={
              <KeyboardArrowRightIcon
                sx={{
                  height: "32px",
                  width: "32px",
                  lineHeight: "32",
                  marginLeft: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#ff7e43",
                }}
              />
            }
          >
            Get A Quote
          </Button>
        </Box>
        <Box
          sx={{
            border: "1px solid black",
            display: { xs: "block", lg: "none" },
            borderRadius: "7px",
            cursor: "pointer",
          }}
        >
          <Button onClick={() => setAppBar(true)}>
            <MenuOpenIcon sx={{ color: "black", fontSize: "2rem" }} />
          </Button>
        </Box>
      </Stack>

      {appBar ? (
        <AppBar
          isOpen={appBar}
          setAppBar={setAppBar}
          buttons={buttons}
          appBarRef={appBarRef}
        />
      ) : null}
    </>
  );
};

export default Navbar;
