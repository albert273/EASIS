"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import gsap from "gsap";

const contactItem = [
  {
    id: "1",
    title: "Our Address",
    subtitle: "62 El Obour Street, Sheraton, Cairo Airport, Cairo. ",
    icon: (
      <LocationOnIcon
        className="icon"
        sx={{ fontSize: "2.4rem", color: "#1a237e", transition: ".1s" }}
      />
    ),
  },
  {
    id: "2",
    title: "Contact Us",
    subtitle: (
      <>
        0222 670 614
        <br />
        0102 2172 922{" "}
      </>
    ),
    icon: (
      <LocalPhoneIcon
        className="icon"
        sx={{ fontSize: "2.4rem", color: "#1a237e", transition: ".1s" }}
      />
    ),
  },
  {
    id: "3",
    title: "Email Us",
    subtitle: "overseas@easis.info",
    icon: (
      <EmailIcon
        className="icon"
        sx={{ fontSize: "2.4rem", color: "#1a237e", transition: ".1s" }}
      />
    ),
  },
];
export default function Cards() {
  const downImgRef = useRef(null);
  const sectionRef = useRef(null);
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
    <Container ref={sectionRef}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={5}
        ref={downImgRef}
      >
        {contactItem.map((item) => (
          <Stack
            key={item.id}
            direction={"row"}
            gap={4}
            alignItems={"center"}
            sx={{
              width: "430px",
              backgroundColor: "#fff",
              padding: "24px",
              borderRadius: "7px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              "&:hover": {
                backgroundColor: "#1a237e",
                "& .icon": { color: "white" }, // Change icon color
                "& .title": { color: "white" },
                "& .box": { backgroundColor: "#3f51b5" },
                "& .subtitle": { color: "#f8f9fa" }, // Change title color
                // Change title color
                // Change title color
              },
              transition: ".1s",
            }}
          >
            <Box
              className="box"
              sx={{
                padding: "15px",
                borderRadius: "50%",
                backgroundColor: "#e8eaf6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </Box>
            <Stack gap={2}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "22px", transition: ".1s" }}
                className="title"
              >
                {item.title}
              </Typography>
              <Typography
                className="subtitle"
                sx={{
                  color: "#5A5D63",
                  fontSize: "16px",
                  lineHeight: "30px",
                  transition: ".1s",
                }}
              >
                {item.subtitle}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}
