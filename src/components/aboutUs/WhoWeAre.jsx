"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import img from "../../../public/images/aboutUs/transportation.jpg";
import UnarchiveSharpIcon from "@mui/icons-material/UnarchiveSharp";
import CheckIcon from "@mui/icons-material/Check";
import gsap from "gsap";

export default function WhatWeDo() {
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset the elements before playing the animation again
            gsap.set(rightRef.current, { x: "100%", opacity: 0 });
            gsap.set(leftRef.current, { x: "-100%", opacity: 0 });

            // Play the animation when the section comes into view
            gsap.to(rightRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
            gsap.to(leftRef.current, {
              x: 0,
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
    <Container maxWidth={false} sx={{ width: { xs: "95%", md: "90%" } }}>
      <Stack direction={{ xs: "column", md: "row" }} gap={10} ref={sectionRef}>
        <Stack
          sx={{ position: "relative" }}
          ref={leftRef}
          justifyContent={"center"}
        >
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            sx={{
              padding: "40px",
              backgroundColor: "#1a237e",
              color: "white",
              position: "absolute",
              bottom: 80,
              right: -40,
              display: { xs: "none", md: "flex" },
            }}
          >
            <UnarchiveSharpIcon sx={{ fontSize: "4.5rem" }} />
            <Stack alignItems={"center"}>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                1 m
              </Typography>
              <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                Delivered Goods
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: { xs: 330, md: 500 }, // Adjust widths for breakpoints
              height: { xs: 330, md: 500 }, // Adjust heights for breakpoints
              borderRadius: "7px",
              overflow: "hidden",
              marginX: "auto", 
              justifyContent: "center"
            }}
          >
            <Image
              loading="lazy"
              src={img}
              alt="Transport"
              layout="responsive"
              width={500}
              height={500}
            />
          </Stack>
        </Stack>
        <Stack ref={rightRef}>
          <Box
            sx={{
              padding: "8px 12px",
              backgroundColor: "#e8eaf6",
              paddingLeft: "22px",
              borderRadius: "50px",
              width: "140px",
              display: "inline-block",
              marginBottom: "20px",
            }}
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
              Who We Are
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
            How We Deliver Excellence
          </Typography>
          <Typography
            sx={{ color: "#5D6061", fontSize: "16px", marginBottom: "20px" }}
          >
            EASIS is a leading provider of international freight forwarding
            services. We offer a wide range of shipping services, including air,
            sea, and road freight. Our team consists of highly experienced
            professionals, committed to delivering innovative solutions that
            meet our clients’ needs. We are known for our precision, safety, and
            on-time delivery.
          </Typography>
          <Stack gap={2} sx={{ marginBottom: "50px" }}>
            {[
              "Experts in Logistics Management",
              "Leaders in Global Logistics",
              "Transforming Transport",
            ].map((text) => (
              <Stack direction={"row"} gap={0.5} key={text}>
                <CheckIcon
                  sx={{
                    padding: "2px",
                    borderRadius: "50px",
                    backgroundColor: "#e8eaf6",
                    height: "20px",
                    width: "20px",
                    color: "#3f51b5",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    lineHeight: "24px",
                  }}
                >
                  {text}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Stack
              alignItems={"center"}
              gap={1}
              sx={{
                borderRadius: "5px",
                padding: { xs: "18px", md: "25px" },
                backgroundColor: "#F5F1F1",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "28px" }}>
                25+
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "14px", md: "18px" },
                  color: "#5D6061",
                }}
              >
                Completed Transport
              </Typography>
            </Stack>
            <Stack
              alignItems={"center"}
              gap={1}
              sx={{
                borderRadius: "5px",
                padding: { xs: "18px", md: "25px" },
                backgroundColor: "#F5F1F1",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "28px" }}>
                67+
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "14px", md: "18px" },
                  color: "#5D6061",
                }}
              >
                Happy Customers
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
