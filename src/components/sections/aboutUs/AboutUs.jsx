"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import img from "../../../../public/images/aboutUs/about-1.1.png";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import BusinessIcon from "@mui/icons-material/Business";
import CorporateFareSharpIcon from "@mui/icons-material/CorporateFareSharp";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import { gsap } from "gsap";

const statistics = [
  {
    id: 1,
    title: "Successfully Delivery",
    number: "2.4K+",
  },
  {
    id: 2,
    title: "Supply Engineers",
    number: "1800",
  },
  {
    id: 3,
    title: "5 Star Reviews",
    number: "199+",
  },
  {
    id: 4,
    title: "Countries Covered",
    number: "125K+",
  },
];

const data = [
  {
    id: 1,
    title: "Experts in Logistics Management",
    description:
      "We are driving success & creating opportunities for growth. Discover the difference with a logistics",
    icon: <BusinessIcon sx={{ color: "#3f51b5", fontSize: "2.2rem" }} />,
  },
  {
    id: 2,
    title: "Reliable and Efficient Logistics",
    description:
      "Our mission is to redefine excellence in transport and logistics. With years of industry experience",
    icon: (
      <CorporateFareSharpIcon sx={{ color: "#3f51b5", fontSize: "2.2rem" }} />
    ),
  },
  {
    id: 3,
    title: "Transforming Transport and Logistics",
    description:
      "Our dedicated team of experts works tirelessly to ensure that your goods are transported safely",
    icon: <ApartmentSharpIcon sx={{ color: "#3f51b5", fontSize: "2.2rem" }} />,
  },
];

export default function AboutUs() {
  const iconRefs = useRef([]);
  const leftBoxRef = useRef(null);
  const leftStatisticsRef = useRef(null);
  const leftTypographyRef = useRef(null);
  const rightRef = useRef(null);
  const rightDataRef = useRef(null);
  const downImgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        const tl = gsap.timeline({ paused: true });
        tl.to(icon, {
          rotationY: 360,
          duration: 1,
          ease: "power2.out",
          transformOrigin: "center",
        });

        icon.addEventListener("mouseenter", () => {
          if (!tl.isActive()) {
            tl.restart();
          }
        });
      }
    });
    const icon = iconRefs.current;
    // Cleanup event listeners on unmount
    return () => {
      icon.forEach((icon) => {
        if (icon) {
          icon.removeEventListener("mouseenter", () => {});
        }
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset the elements before playing the animation again
            gsap.set(rightRef.current, { x: "100%", opacity: 0 });
            gsap.set(leftBoxRef.current, { x: "-100%", opacity: 0 });
            gsap.set(leftTypographyRef.current, { x: "-100%", opacity: 0 });
            gsap.set(leftStatisticsRef.current, { x: "-100%", opacity: 0 });
            gsap.set(rightDataRef.current, { x: "100%", opacity: 0 });
            gsap.set(downImgRef.current, { y: "100%", opacity: 0 });

            // Play the animation when the section comes into view
            gsap.to(rightRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
            gsap.to(rightDataRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
            gsap.to(leftBoxRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
            gsap.to(leftTypographyRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
            gsap.to(leftStatisticsRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
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
    <Container
      maxWidth={false}
      sx={{
        paddingTop: "80px",
        maxWidth: { xs: "100%", md: "85%" },
        margin: "60px auto",
      }}
      ref={sectionRef}
    >
      <Box
        sx={{
          padding: "8px 12px",
          backgroundColor: "#e8eaf6",
          paddingLeft: "22px",
          borderRadius: "50px",
          width: "120px",
          marginX: "auto",
          display: "inline-block",
        }}
        ref={leftBoxRef}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "#1a237e",
            borderLeft: "solid 4px #1a237e",
            paddingLeft: "16px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          About Us
        </Typography>
      </Box>
      <Stack gap={6}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ gap: { xs: 4, md: 10 } }}
        >
          <Typography
            sx={{
              paddingTop: "16px",
              fontSize: { xs: "25px", md: "33px" },
              fontWeight: 600,
              textTransform: "capitalize",
            }}
            ref={leftTypographyRef}
          >
            Our Journey: Excellence in Transport & Logistics
          </Typography>
          <Typography
            sx={{
              color: "#4A4A49",
              fontSize: "16px",
              lineHeight: "24px",
            }}
            ref={rightRef}
          >
            Our dedicated team of experts works tirelessly to ensure that your
            goods are transported safely and on time, no matter the destination.
            We pride ourselves on our global reach and local.
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              padding: "32px",
              backgroundColor: "#F9F5F3",
              borderRadius: "7px",
              width: "400px",
            }}
            ref={leftStatisticsRef}
          >
            {statistics.map((state, index) => (
              <Box
                key={state.id}
                sx={{
                  borderBottom:
                    index === statistics.length - 1
                      ? "none"
                      : "1px solid #E3DDDB",
                  paddingBottom: index === statistics.length - 1 ? "0" : "24px",
                  marginBottom: "24px",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "32px",
                    lineHeight: "32px",
                    transition: ".3s",
                    paddingBottom: "12px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {state.number}
                </Typography>
                <Typography
                  sx={{
                    color: "#4A4A49",
                    fontSize: "16px",
                    lineHeight: "16px",
                  }}
                >
                  {state.title}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Stack
            justifyContent={"center"}
            sx={{ marginX: "auto" }}
            alignItems={"center"}
            ref={downImgRef}
          >
            <Image
              loading="lazy"
              src={img}
              alt="img"
              width={false}
              height={464}
              style={{ borderRadius: "7px" }}
              sx={{
                width: {
                  xs: "100%",
                  lg: "550px",
                },
              }}
            />
          </Stack>
          <Stack
            justifyContent={"space-between"}
            ref={rightDataRef}
            alignItems={"center"}
            gap={{ md: 8 }}
          >
            {data.map((data, index) => (
              <Stack
                direction={"row"}
                key={data.id}
                sx={{ paddingBottom: { xs: "20px", lg: "0" } }}
                alignItems={"center"}
              >
                <Stack>
                  <Box
                    ref={(el) => (iconRefs.current[index] = el)}
                    sx={{
                      background: "#e8eaf6",
                      borderRadius: "50%",
                      padding: "20px",
                      marginRight: "24px",
                      lineHeight: "70px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      transition: ".3s",
                      color: "#1a237e",
                      "&:hover": {
                        backgroundColor: "#1a237e",
                        color: "white",
                      },
                    }}
                  >
                    {React.cloneElement(data.icon, {
                      sx: { color: "inherit", fontSize: "2.2rem" },
                    })}
                  </Box>
                </Stack>

                <Stack gap={{ xs: 1, md: 2 }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "black",
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": { color: "#3f51b5" },
                      transition: ".3s",
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4A4A49",
                      fontSize: "16px",
                      transition: ".3s",
                    }}
                  >
                    {data.description}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
