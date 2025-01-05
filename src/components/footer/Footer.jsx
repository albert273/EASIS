import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import FaxIcon from "@mui/icons-material/Fax";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const buttons = [
  { id: "1", title: "Home", link: "/" },
  { id: "2", title: "About us", link: "About" },
  { id: "3", title: "Service", link: "Services" },
  { id: "4", title: "Contact", link: "/ContactUs" },
  { id: "5", title: "Contact", link: "/Projects" },
];

const otherLinks = [
  { id: "1", title: "Maintenance", link: "/" },
  { id: "2", title: "Our Team", link: "About" },
  { id: "3", title: "Reviews & Awards", link: "Services" },
  { id: "4", title: "Personal", link: "/" },
  { id: "5", title: "Certifications", link: "/" },
];
function Footer() {
  return (
    <Stack sx={{ paddingTop: "30px", backgroundColor: "#FFEFE7", zIndex: 1000, marginTop: "40px" }}>
      <Stack
        sx={{
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-around" },
          gap: 4,
          paddingBottom: "30px",
          borderBottom: "1px solid gray",
          marginBottom: "25px",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "34px", fontWeight: "bold", width: {xs: "100%",md:"70%"}, textAlign: {xs: "center", md: "start"} }}>
            Join Us Today And let Us Help 
            You To Grow Your Business
          </Typography>
        </Box>
        <Box>
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
      </Stack>
      <Stack
        sx={{
          backgroundColor: "white",
          paddingTop: "48px",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingBottom: "28px",
          borderTopLeftRadius: "7px",
          borderTopRightRadius: "7px",
          width: "90%",
          marginX: "auto",
        }}
      >
        <Stack
          sx={{
            borderBottom: "1px solid black",
            paddingBottom: "30px",
            marginBottom: "10px",
          }}
        >
          <Stack
            gap={3}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-around",
            }}
          >
            <Stack gap={2}>
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <LanguageIcon sx={{ color: "#FF5E14", fontSize: "2rem" }} />
                <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                  Cargon
                </Typography>
              </Stack>
              <Typography>
                {" "}
                6 Ankara street , Sheraton Heliopolis ,<br /> District 4 ,
                Heliopolis , Cairo,Egypt
              </Typography>
              <Stack direction={"row"}>
                <Box
                  sx={{
                    display: "flex", // Flexbox for alignment
                    alignItems: "center", // Vertical centering
                    justifyContent: "center", // Horizontal centering
                    height: "40px",
                    width: "40px",
                    background: "#FFEFE7",
                    color: "#FF5E14",
                    fontSize: "20px",
                    borderRadius: "50%",
                    marginRight: "16px",
                    transition: ".3s",
                    cursor: "pointer",
                  }}
                >
                  <FacebookIcon
                    sx={{
                      color: "#FF5E14", // Fixed color code with '#'
                      fontSize: "20px",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex", // Flexbox for alignment
                    alignItems: "center", // Vertical centering
                    justifyContent: "center", // Horizontal centering
                    height: "40px",
                    width: "40px",
                    background: "#FFEFE7",
                    color: "#FF5E14",
                    fontSize: "20px",
                    borderRadius: "50%",
                    marginRight: "16px",
                    transition: ".3s",
                    cursor: "pointer",
                  }}
                >
                  <XIcon
                    sx={{
                      color: "#FF5E14", // Fixed color code with '#'
                      fontSize: "20px",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex", // Flexbox for alignment
                    alignItems: "center", // Vertical centering
                    justifyContent: "center", // Horizontal centering
                    height: "40px",
                    width: "40px",
                    background: "#FFEFE7",
                    color: "#FF5E14",
                    fontSize: "20px",
                    borderRadius: "50%",
                    marginRight: "16px",
                    transition: ".3s",
                    cursor: "pointer",
                  }}
                >
                  <InstagramIcon
                    sx={{
                      color: "#FF5E14", // Fixed color code with '#'
                      fontSize: "20px",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex", // Flexbox for alignment
                    alignItems: "center", // Vertical centering
                    justifyContent: "center", // Horizontal centering
                    height: "40px",
                    width: "40px",
                    background: "#FFEFE7",
                    color: "#FF5E14",
                    fontSize: "20px",
                    borderRadius: "50%",
                    marginRight: "16px",
                    transition: ".3s",
                    cursor: "pointer",
                  }}
                >
                  <LinkedInIcon
                    sx={{
                      color: "#FF5E14", // Fixed color code with '#'
                      fontSize: "20px",
                    }}
                  />
                </Box>
              </Stack>
            </Stack>

            <Stack gap={2} alignItems={'center'}>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Quick Links
              </Typography>
              <Stack gap={1} alignItems={"center"}>
                {buttons.map((item) => (
                  <Link href={item.link} key={item.id}>
                    <Typography
                      sx={{
                        cursor: "pointer",
                        color: "#4A4A49",
                        "&:hover": { color: "#FF5E14", paddingLeft: "5px" },
                        transition: "0.3s",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack gap={2} alignItems={'center'}>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Other Links
              </Typography>
              <Stack gap={1} alignItems={"center"}>
                {otherLinks.map((item) => (
                  <Link href={item.link} key={item.id}>
                    <Typography
                      sx={{
                        cursor: "pointer",
                        color: "#4A4A49",
                        "&:hover": { color: "#FF5E14", paddingLeft: "5px" },
                        transition: "0.3s",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack gap={2}>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Get In Touch
              </Typography>
              <Stack
                direction={"row"}
                gap={2}
                alignItems={"center"}
                sx={{
                  borderBottom: "2px solid #616161",
                  paddingBottom: "20px",
                }}
              >
                <FaxIcon sx={{ fontSize: "2rem", color: "#FF5E14" }} />
                <Stack>
                  <Typography
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Fax number
                  </Typography>
                  <Typography
                    sx={{
                      "&:hover": { color: "#dd3333" },
                      cursor: "pointer",
                      fontWeight: "bold",
                      color: "black",
                      opacity: 0.7,
                    }}
                  >
                    <a href="tel:(+202) 22679632">(+202) 22679632</a>
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction={"row"}
                gap={2}
                sx={{
                  borderBottom: "2px solid #616161",
                  paddingBottom: "20px",
                }}
              >
                <AlarmOnIcon sx={{ fontSize: "2rem", color: "#FF5E14" }} />
                <Stack>
                  <Typography
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      fontWeight: "bold"
                    }}
                  >
                    Working Hours
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", color: "black", opacity: 0.7 }}
                  >
                    Saturday: 8:30 AM - 3:00 PM
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction={"row"} gap={2}>
                <AlternateEmailIcon
                  sx={{ fontSize: "2rem", color: "#FF5E14" }}
                />
                <Stack>
                  <Typography
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      fontWeight: "bold"
                    }}
                  >
                    Send Us Email
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      "&:hover": { color: "#dd3333" },
                      cursor: "pointer",
                      fontSize: "1.1rem",
                      color: "black", opacity: 0.7
                    }}
                  >
                    <a href="mailto:gm@uni-cargo.net">gm@uni-cargo.net</a>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            color: "black",
            paddingX: "40px",
            position: "relative",
          }}
        >
          <Typography sx={{ color: "#4A4A49" }}>
            Copyright © 2025 Albert . All Rights Reserved
          </Typography>
          <Button
            sx={{
              fontWeight: "bold",
              textTransform: "capitalize",
              color: "#7b1fa2",
            }}
          >
            <a href="https://glistening-muffin-a1a526.netlify.app/">
              Portfolio
            </a>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
