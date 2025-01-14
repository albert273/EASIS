"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import shape from "../../../public/images/hero/ca-image-shape3.3.png";
import backGroundBlue from "../../../public/images/hero/ca-shape3.3.png";
import shape2 from "../../../public/images/hero/ca-shape3.1.png";
import truck from "../../../public/images/hero/BlueTruck.png";
import Image from "next/image";
import { gsap } from "gsap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
function HeroPages({ page, title }) {
  const truckRef = useRef(null);
  const textRef = useRef(null);
  const textRefTop = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      truckRef.current,
      { x: "100%", opacity: 0 }, // Starting position (off screen to the right)
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" } // Ending position (fully visible)
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: "-100%", opacity: 0 }, // Starting position (off screen to the right)
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" } // Ending position (fully visible)
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      textRefTop.current,
      { y: "-100%", opacity: 0 }, // Starting position (off screen to the right)
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" } // Ending position (fully visible)
    );
  }, []);
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: { xs: "40vh", md: "100vh" },
        position: "relative",
        zIndex: 3,
        backgroundColor: "#efeef3",
        overflow: "hidden",
      }}
    >
      <Stack direction={"row"}>
        <Stack sx={{ position: "relative", marginX: "auto", marginY: "auto" }}>
          <Stack
            gap={3}
            ref={textRef}
            sx={{
              marginLeft: { xs: "0", md: "110px" },
              marginY: "auto",
              marginTop: { xs: "15vh", md: "auto" },
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              sx={{
                padding: "8px 12px",
                backgroundColor: "#e8eaf6",
                paddingLeft: "22px",
                borderRadius: "50px",
                width: "200px",
                display: { xs: "none", md: "inline-block" },
                marginLeft: "-20px",
                zIndex: 1
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
                EASIS & Logistics
              </Typography>
            </Box>
            <Typography
              ref={textRef}
              sx={{
                fontSize: { xs: "40px", md: "50px" },
                lineHeight: "60px",
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <Link href={"/"}>
                <Typography
                  ref={textRef}
                  sx={{ fontWeight: 400, cursor: "pointer" }}
                >
                  Home
                </Typography>
              </Link>

              <ArrowForwardIcon />
              <Typography
                ref={textRef}
                sx={{ fontWeight: "bold", color: "#1a237e", cursor: "pointer" }}
              >
                {page}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box flexGrow={1} sx={{ display: { xs: "none", md: "flex" } }} />
        <Stack sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              display: { xs: "none", md: "block" },
            }}
          >
            <Image
              loading="lazy"
              src={shape}
              width={675}
              alt="image1"
              height={675}
            />
          </Box>
          <Box
            sx={{
              zIndex: 2,
              display: { xs: "none", md: "block" },
            }}
          >
            <Image
              loading="lazy"
              src={backGroundBlue}
              width={680}
              alt="image2"
              height={680}
            />
          </Box>
          <Box
            sx={{
              zIndex: 3,
              position: "absolute",
              bottom: -130,
              right: -160,
              display: { xs: "none", md: "block" },
            }}
            ref={truckRef}
          >
            <Image
              loading="lazy"
              src={truck}
              width={"100%"}
              alt="image4"
              height={"100%"}
              style={{ width: 1100, height: 800 }}
            />
          </Box>
        </Stack>
      </Stack>
      <Box sx={{ zIndex: 2, position: "absolute", bottom: 0, left: 0 }}>
            <Image
              loading="lazy"
              src={shape2}
              width={300}
              alt="image3"
              height={700}
            />
          </Box>
    </Box>
  );
}

export default HeroPages;
