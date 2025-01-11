"use client"; // Mark as a Client Component
import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../../public/images/section1/ca-about-3.3.png";
import image2 from "../../../../public/images/section1/ca-about3.1.png";
import image3 from "../../../../public/images/section1/ca-blog-1.3.png";
import image4 from "../../../../public/images/section1/ca-blog-4.2.png";

import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { gsap } from "gsap";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Link from "next/link";

function WhyWeAre() {
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
    <Container
      maxWidth={false}
      sx={{
        paddingTop: "50px",
        paddingBottom: "50px",
        maxWidth: "85%",
        margin: "60px auto",
        zIndex: 2,
      }}
      ref={sectionRef} // Attach the ref to the section
    >
      <Grid container spacing={4} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          ref={leftRef}
          sx={{ display: { xs: "none", md: "grid" } }}
        >
          <Stack spacing={3}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
              <Box
                sx={{
                  position: "relative",
                  width: "220px",
                  height: "220px",
                  overflow: "hidden", // Ensure the content stays within the image boundary
                  "&:hover .hoverContent": {
                    width: "100%", // Full width on hover
                    opacity: 1, // Make it visible on hover
                  },
                }}
              >
                <Image
                  loading="lazy"
                  src={image1} // replace with your actual image path
                  width={220}
                  height={220}
                  style={{ objectFit: "cover", borderRadius: "15px" }}
                  alt="Image 1"
                />
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: "0%", // Initially starts at 0 width (hidden)
                    backgroundColor: "#1a237e", // Semi-transparent background
                    transition: "width 0.3s ease, opacity 0.5s ease", // Smooth transition
                    zIndex: 99,
                    opacity: 0, // Initially hidden
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "15px", // Keep the border radius
                  }}
                >
                  <LocalShippingIcon
                    sx={{ fontSize: "2rem", color: "white" }}
                  />
                  <Typography variant="h4" sx={{ color: "white" }}>
                    11K+
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    Delivered Goods
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  width: "220px",
                  height: "220px",
                  overflow: "hidden", // Ensure the content stays within the image boundary
                  "&:hover .hoverContent": {
                    width: "100%", // Full width on hover
                    opacity: 1, // Make it visible on hover
                  },
                }}
              >
                <Image
                  loading="lazy"
                  src={image2} // replace with your actual image path
                  width={220}
                  height={220}
                  style={{ objectFit: "cover", borderRadius: "15px" }}
                  alt="Image 1"
                />
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: "0%", // Initially starts at 0 width (hidden)
                    backgroundColor: "#1a237e", // Semi-transparent background
                    transition: "width 0.3s ease, opacity 0.5s ease", // Smooth transition
                    zIndex: 99,
                    opacity: 0, // Initially hidden
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "15px", // Keep the border radius
                  }}
                >
                  <LocalShippingIcon
                    sx={{ fontSize: "2rem", color: "white" }}
                  />
                  <Typography variant="h4" sx={{ color: "white" }}>
                    11K+
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    Delivered Goods
                  </Typography>
                </Box>
              </Box>
            </Stack>
            <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
              <Box
                sx={{
                  position: "relative",
                  width: "220px",
                  height: "220px",
                  overflow: "hidden", // Ensure the content stays within the image boundary
                  "&:hover .hoverContent": {
                    width: "100%", // Full width on hover
                    opacity: 1, // Make it visible on hover
                  },
                }}
              >
                <Image
                  loading="lazy"
                  src={image3} // replace with your actual image path
                  width={220}
                  height={220}
                  style={{ objectFit: "cover", borderRadius: "15px" }}
                  alt="Image 1"
                />
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: "0%", // Initially starts at 0 width (hidden)
                    backgroundColor: "#1a237e", // Semi-transparent background
                    transition: "width 0.3s ease, opacity 0.5s ease", // Smooth transition
                    zIndex: 99,
                    opacity: 0, // Initially hidden
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "15px", // Keep the border radius
                  }}
                >
                  <LocalShippingIcon
                    sx={{ fontSize: "2rem", color: "white" }}
                  />
                  <Typography variant="h4" sx={{ color: "white" }}>
                    11K+
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    Delivered Goods
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: "220px",
                  height: "220px",
                  overflow: "hidden", // Ensure the content stays within the image boundary
                  "&:hover .hoverContent": {
                    width: "100%", // Full width on hover
                    opacity: 1, // Make it visible on hover
                  },
                }}
              >
                <Image
                  loading="lazy"
                  src={image4} // replace with your actual image path
                  width={220}
                  height={220}
                  style={{ objectFit: "cover", borderRadius: "15px" }}
                  alt="Image4"
                />
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: "0%", // Initially starts at 0 width (hidden)
                    backgroundColor: "#1a237e", // Semi-transparent background
                    transition: "width 0.3s ease, opacity 0.5s ease", // Smooth transition
                    zIndex: 99,
                    opacity: 0, // Initially hidden
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "15px", // Keep the border radius
                  }}
                >
                  <LocalShippingIcon
                    sx={{ fontSize: "2rem", color: "white" }}
                  />
                  <Typography variant="h4" sx={{ color: "white" }}>
                    11K+
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    Delivered Goods
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} ref={rightRef}>
          <Stack spacing={3}>
            <Box
              sx={{
                padding: "8px 12px",
                backgroundColor: "#e8eaf6",
                paddingLeft: "22px",
                borderRadius: "50px",
                width: "150px",
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
                Why We Are
              </Typography>
            </Box>

            <Typography variant="h4" fontWeight="bold">
              Our Commitment: Reliable And Efficient Logistics
            </Typography>
            <Typography variant="body1" sx={{ color: "#5a5d63" }}>
              With years of industry experience and a commitment to innovation,
              we have become leaders in providing comprehensive, reliable, and
              efficient logistics solutions. Our dedicated team of experts works
              tirelessly to ensure:
            </Typography>

            <Stack
              gap={2}
              display={"grid"}
              sx={{ gridTemplateColumns: "1fr 1fr" }}
            >
              {[
                "Experts in Logistics Management",
                "Leaders in Global Logistics",
                "Transforming Transport",
                "Driving Logistics Success",
              ].map((text) => (
                <Stack direction={"row"} gap={0.5} key={text}>
                  <CheckIcon
                    sx={{
                      padding: "2px",
                      borderRadius: "50px",
                      backgroundColor: "#e8eaf6",
                      height: "20px",
                      width: "20px",
                      color: "#1a237e",
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

            <Box
              sx={{
                padding: "16px 24px",
                backgroundColor: "#f7f9fc",
                display: "inline-block",
                width: "100%",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  background: "#1a237e",
                  borderRadius: "5px",
                  height: "100%",
                  width: "6px",
                  left: 0,
                  top: 0,
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#5a5d63",
                }}
              >
                We are driving success and creating opportunities for growth.
                Discover difference with a logistics partner that is truly
                invested in your success.
              </Typography>
            </Box>
            <Link href={"/AboutUs"}>
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
                  width: "160px",
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
                Get Started
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WhyWeAre;
