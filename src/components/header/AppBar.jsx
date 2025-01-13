"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import { gsap } from "gsap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import logo from "../../../public/logo.png";

function AppBar({ setAppBar, isOpen, buttons, appBarRef }) {
  const [openDropdown, setOpenDropdown] = React.useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(appBarRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power1.inOut",
      });
    } else {
      gsap.to(appBarRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power1.inOut",
        onComplete: () => setAppBar(false),
      });
    }
  }, [isOpen, setAppBar, appBarRef]);

  const handleCloseWithAnimation = () => {
    gsap.to(appBarRef.current, {
      x: "100%",
      duration: 0.6,
      ease: "power1.inOut",
      onComplete: () => setAppBar(false), // Close after the animation
    });
  };

  const handleToggleDropdown = () => setOpenDropdown(!openDropdown);

  useEffect(() => {
    if (openDropdown) {
      gsap.fromTo(
        dropdownRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.6, ease: "power1.inOut" }
      );
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power1.inOut",
      });
    }
  }, [openDropdown]);

  return (
    <Box
      ref={appBarRef}
      sx={{
        background: "white",
        height: "100%",
        position: "fixed",
        zIndex: 100000,
        right: 0,
        top: 0,
        width: {
          xs: "100%", // Full width on small screens
          sm: "465px", // Fixed width on medium screens and above
        },
        padding: "45px",
        overflowY: "auto",
        scrollbarWidth: "none",
        transform: "translateX(100%)", // Start outside the screen
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ marginBottom: "50px" }}
      >
        <Link href={"/"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={1}
            sx={{ cursor: "pointer", color: "black" }}
          >
            <Box>
              <Image src={logo} alt="logo" width={90} height={75} />
            </Box>
          </Stack>{" "}
        </Link>
        <CloseIcon
          sx={{ fontSize: "2rem", color: "black", cursor: "pointer" }}
          onClick={handleCloseWithAnimation}
        />
      </Stack>

      <Box sx={{ marginBottom: "50px", display: { xs: "block", lg: "none" } }}>
        {buttons.map((button) => (
          <React.Fragment key={button.id}>
            {button.link ? (
              <Link
                href={button.link}
                onClick={() => {
                  setOpenDropdown(false);
                  handleCloseWithAnimation();
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "18px",
                    "&:hover": {
                      color: "#1a237e",
                      cursor: "pointer",
                      opacity: 1,
                    },
                    transition: ".3s",
                    fontWeight: "400",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0",
                    opacity: 0.7,
                    borderTop: "1px solid rgba(1, 15, 28, 0.1)",
                  }}
                >
                  {button.title}
                </Typography>
              </Link>
            ) : (
              <Box
                sx={{
                  color: "black",
                  fontSize: "18px",
                  "&:hover": { color: "#dd3333", cursor: "pointer" },
                  fontWeight: "400",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                  opacity: 0.7,
                  borderBottom: "1px solid rgba(1, 15, 28, 0.1)",
                  justifyContent: "space-between",
                }}
                onClick={handleToggleDropdown}
              >
                <Typography sx={{ fontSize: "18px" }}>
                  {button.title}
                </Typography>
                <ArrowDropDownIcon sx={{ ml: 1 }} />
              </Box>
            )}

            {button.title === "Industries" && (
              <Box
                ref={dropdownRef}
                sx={{
                  pl: 4,
                  color: "#ffffff",
                  overflow: "hidden",
                  height: "auto",
                }}
              >
                {button.list.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    onClick={handleCloseWithAnimation}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "18px",
                        "&:hover": { color: "#dd3333", cursor: "pointer" },
                        transition: "color 0.3s ease",
                        fontWeight: "400",
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 0",
                        opacity: 0.7,
                        borderTop: "1px solid #28283f",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ))}
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>

      <Typography
        sx={{
          fontSize: "16px",
          color: "black",
          opacity: 0.7,
          fontWeight: 100,
          marginBottom: "20px",
        }}
      >
        EASIS - Egypt Air and Sea for International Shipping. Integrated
        Solutions for International Shipping & Logistics. DGR shipment.
      </Typography>
      <Stack direction={"row"} alignItems={"center"} sx={{ mb: "50px" }}>
        <Link href={"/pages/UserQuote"}>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "50px",
              backgroundColor: "#1a237e",
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
                  backgroundColor: "#3f51b5",
                }}
              />
            }
          >
            Get A Quote
          </Button>
        </Link>
      </Stack>
      <Typography
        sx={{
          fontSize: "24px",
          color: "black",
          paddingBottom: "10px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Contact Info
      </Typography>
      <Stack gap={3} justifyContent={"start"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ color: "black", opacity: 0.7 }}
          gap={4}
        >
          <LocationOnIcon sx={{ fontSize: "30px" }} />
          <Typography>
          62 El Obour Street, Sheraton, Cairo Airport, Cairo.
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ color: "black", opacity: 0.7 }}
          gap={4}
        >
          <LocalPhoneIcon sx={{ fontSize: "30px" }} />
          <Typography>+ 0222670614  </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        gap={1}
        sx={{ color: "white", marginTop: "30px", opacity: 0.7 }}
      >
        <FacebookIcon
          sx={{
            "&:hover": {
              color: "#dd3333",
              cursor: "pointer",
              fontSize: "30px",
            },
            transition: "0.3s",
          }}
        />
        <InstagramIcon
          sx={{
            "&:hover": {
              color: "#dd3333",
              cursor: "pointer",
              fontSize: "30px",
            },
            transition: "0.3s",
          }}
        />
        <XIcon
          sx={{
            "&:hover": {
              color: "#dd3333",
              cursor: "pointer",
              fontSize: "30px",
            },
            transition: "0.3s",
          }}
        />
        <LinkedInIcon
          sx={{
            "&:hover": {
              color: "#dd3333",
              cursor: "pointer",
              fontSize: "30px",
            },
            transition: "0.3s",
          }}
        />
      </Stack>
    </Box>
  );
}

export default AppBar;
