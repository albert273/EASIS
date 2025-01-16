import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import FaxIcon from "@mui/icons-material/Fax";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import logo from "../../../public/logo.png";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const buttons = [
  { id: "1", title: "Home", link: "/" },
  { id: "2", title: "About us", link: "About" },
  { id: "3", title: "Service", link: "Services" },
  { id: "4", title: "Contact us", link: "/ContactUs" },
  { id: "5", title: "Projects", link: "/Projects" },
];

const otherLinks = [
  { id: "1", title: "About us", link: "#AboutUs" },
  { id: "2", title: "Why Choose Us", link: "#WhyChooseUs" },
  { id: "3", title: "Our Service", link: "#OurServices" },
  { id: "4", title: "Our Projects", link: "#OurProjects" },
  { id: "5", title: "What people say about us", link: "#Testimonial" },
];
function Footer() {
  return (
    <Stack
      sx={{
        paddingTop: "30px",
        backgroundColor: "#e8eaf6",
        zIndex: 1000,
        marginTop: "40px",
      }}
    >
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
          <Typography
            sx={{
              fontSize: "34px",
              fontWeight: "bold",
              width: { xs: "100%", md: "70%" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Join Us Today And let Us Help You To Grow Your Business
          </Typography>
        </Box>
        <Box>
          <Link href={"/MakeQuote"}>
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
            <Stack gap={2} alignItems={"center"}>
              <Box>
                <Image src={logo} alt="logo" width={105} height={90} />
              </Box>
              <Stack direction={"row"}>
                <Box
                  sx={{
                    display: "flex", // Flexbox for alignment
                    alignItems: "center", // Vertical centering
                    justifyContent: "center", // Horizontal centering
                    height: "40px",
                    width: "40px",
                    background: "#e8eaf6",
                    color: "#1a237e",
                    fontSize: "20px",
                    borderRadius: "50%",
                    marginRight: "16px",
                    transition: ".3s",
                    cursor: "pointer",
                  }}
                >
                  <FacebookIcon
                    sx={{
                      color: "#1a237e", // Fixed color code with '#'
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
                    background: "#e8eaf6",
                    color: "#1a237e",
                    fontSize: "20px",
                    borderRadius: "50%",
                    marginRight: "16px",
                    transition: ".3s",
                    cursor: "pointer",
                  }}
                >
                  <XIcon
                    sx={{
                      color: "#1a237e", // Fixed color code with '#'
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
                    background: "#e8eaf6",
                    color: "#1a237e",
                    fontSize: "20px",
                    borderRadius: "50%",
                    marginRight: "16px",
                    transition: ".3s",
                    cursor: "pointer",
                  }}
                >
                  <InstagramIcon
                    sx={{
                      color: "#1a237e", // Fixed color code with '#'
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
                    background: "#e8eaf6",
                    color: "#1a237e",
                    fontSize: "20px",
                    borderRadius: "50%",
                    marginRight: "16px",
                    transition: ".3s",
                    cursor: "pointer",
                  }}
                >
                  <LinkedInIcon
                    sx={{
                      color: "#1a237e", // Fixed color code with '#'
                      fontSize: "20px",
                    }}
                  />
                </Box>
              </Stack>
            </Stack>

            <Stack gap={2} alignItems={"center"}>
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
                        "&:hover": { color: "#1a237e", paddingLeft: "5px" },
                        transition: "0.3s",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack gap={2} alignItems={"center"}>
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
                        "&:hover": { color: "#1a237e", paddingLeft: "5px" },
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
                <FaxIcon sx={{ fontSize: "2rem", color: "#1a237e" }} />
                <Stack>
                  <Typography
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Fax number
                  </Typography>
                  <Stack>
                    <Stack direction={{xs:"column", md:"row"}}>
                      <Typography
                        sx={{
                          "&:hover": { color: "#1a237e", opacity: 1 },
                          cursor: "pointer",
                          fontWeight: "bold",
                          color: "black",
                          opacity: 0.7,
                        }}
                      >
                        <a href="tel:0222670614">0222 670 614</a>
                      </Typography>
                      <Typography
                        sx={{
                          marginX: 1, // Adds horizontal margin around the dash
                          fontWeight: "bold",
                          color: "black",
                          opacity: 0.7,
                          display: {xs:"none", md: "block"}
                        }}
                      >
                        -
                      </Typography>
                      <Typography
                        sx={{
                          "&:hover": { color: "#1a237e", opacity: 1 },
                          cursor: "pointer",
                          fontWeight: "bold",
                          color: "black",
                          opacity: 0.7,
                        }}
                      >
                        <a href="tel:01022172922">0102 217 2922</a>
                      </Typography>
                    </Stack>
                    <Stack direction={{xs:"column", md:"row"}}>
                      <Typography
                        sx={{
                          "&:hover": { color: "#1a237e", opacity: 1 },
                          cursor: "pointer",
                          fontWeight: "bold",
                          color: "black",
                          opacity: 0.7,
                        }}
                      >
                        <a href="tel:01022182922">0102 218 2922</a>
                      </Typography>
                      <Typography
                        sx={{
                          marginX: 1, // Adds horizontal margin around the dash
                          fontWeight: "bold",
                          color: "black",
                          opacity: 0.7,
                          display: {xs:"none", md: "block"}
                        }}
                      >
                        -
                      </Typography>
                      <Typography
                        sx={{
                          "&:hover": { color: "#1a237e", opacity: 1 },
                          cursor: "pointer",
                          fontWeight: "bold",
                          color: "black",
                          opacity: 0.7,
                        }}
                      >
                        <a href="tel:01143314965">0114 331 4965</a>
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>

              <Stack
                direction={"row"}
                gap={2}
                sx={{
                  borderBottom: "2px solid #616161",
                  paddingBottom: "20px",
                }}
                alignItems={"center"}
              >
                <AlarmOnIcon sx={{ fontSize: "2rem", color: "#1a237e" }} />
                <Stack>
                  <Typography
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Working Hours
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", color: "black", opacity: 0.7 }}
                  >
                    Saturday to Thursday: <br />
                    9:00 AM - 5:00 PM
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction={"row"}
                gap={2}
                alignItems={"center"}
                sx={{
                  borderBottom: "2px solid #616161",
                  paddingBottom: "20px",
                }}
              >
                <AlternateEmailIcon
                  sx={{ fontSize: "2rem", color: "#1a237e" }}
                />
                <Stack>
                  <Typography
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Send Us Email
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      "&:hover": { color: "#1a237e", opacity: 1 },
                      cursor: "pointer",
                      fontSize: "1.1rem",
                      color: "black",
                      opacity: 0.7,
                    }}
                  >
                    <a href="mailto:overseas@easis.info">overseas@easis.info</a>
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} gap={2} alignItems={"center"}>
                <LocationOnIcon sx={{ fontSize: "2rem", color: "#1a237e" }} />
                <Stack>
                  <Typography
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      "&:hover": { color: "#1a237e", opacity: 1 },
                      cursor: "pointer",
                      fontSize: "1.1rem",
                      color: "black",
                      opacity: 0.7,
                    }}
                  >
                    62 El Obour Street, Sheraton,
                    <br /> Cairo Airport, Cairo.
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
