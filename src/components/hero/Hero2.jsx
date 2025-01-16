"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import img1 from "../../../public/images/hero/hero1.png";
import img2 from "../../../public/images/hero/truck-hero-1.jpg";
import img3 from "../../../public/images/hero/hero1-shape.png";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";

function Hero2() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const leftTypography2Ref = useRef(null);
  const leftTypographyRef = useRef(null);
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const sizeScreen = useMediaQuery("(min-width: 600px)"); // Adjust breakpoint as needed

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset the elements before playing the animation again
            gsap.set(leftTypography2Ref.current, { x: "-100%", opacity: 0 });
            gsap.set(leftTypographyRef.current, { x: "-100%", opacity: 0 });
            gsap.set(bottomRef.current, { y: "100%", opacity: 0 });
            gsap.set(topRef.current, { y: "-100%", opacity: 0 });

            gsap.to(leftTypographyRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
            gsap.to(leftTypography2Ref.current, {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
            gsap.to(bottomRef.current, {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
            gsap.to(topRef.current, {
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

  useEffect(() => {
    // Animate the images
    gsap.to(img1Ref.current, {
      scale: 1.3,
      duration: 7, // Animation duration in seconds
      ease: "power2.out", // Smooth easing
    });

    gsap.to(img2Ref.current, {
      scale: 1.2, // Scale up to 1.2x
      duration: 7, // Animation duration in seconds
      ease: "power2.out", // Smooth easing
    });
  }, []);

  useEffect(() => {
    // Create an up-and-down animation for the referenced image
    if (animationRef.current) {
      gsap.to(animationRef.current, {
        y: "-80px", // Move up by 20px
        duration: 1.5, // Animation duration
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse the animation
        ease: "power1.inOut", // Smooth easing
      });
    }
  }, []);

  return (
    <Box>
      {sizeScreen ? (
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            position: "relative",
            overflow: "hidden",
            maxHeight: "100vh",
          }}
        >
          <Stack sx={{ zIndex: 20, position: "relative" }}>
            <Image
              loading="lazy"
              src={img1}
              alt="hero"
              width={isLargeScreen ? "70%" : "100%"} // Adjust width based on screen size
              height={670} // Fixed height
              style={{ width: isLargeScreen ? "90%" : "100%" }}
              ref={img1Ref} // Reference for animation
            />
            <Stack
              sx={{
                position: "absolute",
                top: "150px",
                left: { xs: "50px", md: "110px" },
                zIndex: 5,
              }}
              gap={3}
              ref={sectionRef}
            >
              <Box
                sx={{
                  padding: "8px 12px",
                  backgroundColor: "#e8eaf62e",
                  paddingLeft: "22px",
                  borderRadius: "50px",
                  width: "200px",
                }}
                ref={topRef}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "black",
                    borderLeft: "solid 4px #1a237e",
                    paddingLeft: "16px",
                    fontWeight: "bold"
                  }}
                >
                  EASIS & Logistics
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "25px", md: "35px" },
                  lineHeight: { xs: "40px", md: "45px" },
                  fontWeight: "bold",
                  color: "#fff",
                  marginBottom: "20px",
                  width: "70%",
                }}
                ref={leftTypographyRef}
              >
                EASIS - Egypt Air and Sea for International Shipping. Integrated
                Solutions for International Shipping & Logistics.
              </Typography>

              <Stack direction={"row"} gap={2} ref={bottomRef}>
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
                          backgroundColor: "#1a237e",
                        }}
                      />
                    }
                  >
                    Get Started
                  </Button>
                </Link>

                <Link href={"/"}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      color: "#1a237e",
                      borderRadius: "50px",
                      backgroundColor: "#efeef3",
                      padding: "10px 16px",
                      fontWeight: "bold",
                      fontSize: "16ps",
                      lineHeight: "16px",
                      transition: ".3s",
                      border: "1px solid #1a237e",
                      "&:hover": { backgroundColor: "#1a237e", color: "white" },
                    }}
                    endIcon={
                      <KeyboardArrowRightIcon
                        sx={{
                          height: "32px",
                          width: "32px",
                          lineHeight: "32",
                          marginLeft: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#1a237e",
                          color: "white",
                        }}
                      />
                    }
                  >
                    Discover more
                  </Button>
                </Link>
              </Stack>
            </Stack>
            <Box
              sx={{ position: "absolute", bottom: 10, left: 0 }}
              ref={animationRef}
            >
              <Image
                src={img3}
                alt="img3"
                width={200}
                height={150}
                loading="lazy"
              />
            </Box>
          </Stack>
          <Stack sx={{ position: "absolute", zIndex: 1, bottom: 0, right: 0 }}>
            <Image
              loading="lazy"
              src={img2}
              alt="hero"
              width={850}
              height={670}
              ref={img2Ref} // Reference for animation
            />
          </Stack>
        </Stack>
      ) : (
        <Stack
          sx={{ height: "60vh", width: "100%", bgcolor: "#283593" }}
          alignItems={"center"}
        >
          <Stack
            gap={3}
            ref={sectionRef}
            justifyContent={"center"}
            sx={{ marginTop: "140px" }}
          >
            <Box
              sx={{
                padding: "8px 12px",
                backgroundColor: "#e8eaf62e",
                paddingLeft: "22px",
                borderRadius: "50px",
                width: "200px",
                marginX: "auto",
              }}
              ref={topRef}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "black",
                  borderLeft: "solid 4px #1a237e",
                  paddingLeft: "16px",
                  fontWeight: "bold"
                }}
              >
                EASIS & Logistics
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "35px" },
                lineHeight: { xs: "28px", md: "45px" },
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "20px",
                width: "70%",
                textAlign: "center",
                marginX: "auto",
              }}
              ref={leftTypographyRef}
            >
              EASIS - Egypt Air and Sea for International Shipping. Integrated
              Solutions for International Shipping & Logistics.
            </Typography>

            <Stack
              direction={"row"}
              gap={2}
              ref={bottomRef}
              sx={{ marginX: "auto" }}
            >
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
                        backgroundColor: "#1a237e",
                      }}
                    />
                  }
                >
                  Get Started
                </Button>
              </Link>

              <Link href={"/"}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    color: "#1a237e",
                    borderRadius: "50px",
                    backgroundColor: "#efeef3",
                    padding: "10px 16px",
                    fontWeight: "bold",
                    fontSize: "16ps",
                    lineHeight: "16px",
                    transition: ".3s",
                    border: "1px solid #1a237e",
                    "&:hover": { backgroundColor: "#1a237e", color: "white" },
                  }}
                  endIcon={
                    <KeyboardArrowRightIcon
                      sx={{
                        height: "32px",
                        width: "32px",
                        lineHeight: "32",
                        marginLeft: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#1a237e",
                        color: "white",
                      }}
                    />
                  }
                >
                  Discover more
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Box>
  );
}

export default Hero2;
