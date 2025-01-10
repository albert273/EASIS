"use client";
import { Box, Container, ImageList, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Image1 from "../../../../public/images/section3/ca-portfoli3.1.png";
import Image2 from "../../../../public/images/section3/ca-portfolio3.2.png";
import Image3 from "../../../../public/images/section3/ca-portfoli3.3.png";
import Image4 from "../../../../public/images/section3/ca-project3.4.png";
import Image5 from "../../../../public/images/section3/ca-portfolio-3.5.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { gsap } from "gsap";

function OurProjects() {
  const topRef = useRef(null);
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.set(topRef.current, { y: "100%", opacity: 0 });

            gsap.to(topRef.current, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            });

            // GSAP animation for the imageRef (faster animation)
            gsap.fromTo(
              image1Ref.current,
              { scale: 4, opacity: 0 }, // Start with large image and invisible
              { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" } // Animate to normal size and visible (faster)
            );
            gsap.fromTo(
              image2Ref.current,
              { scale: 4, opacity: 0 }, // Start with large image and invisible
              { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" } // Animate to normal size and visible (faster)
            );
            gsap.fromTo(
              image3Ref.current,
              { scale: 4, opacity: 0 }, // Start with large image and invisible
              { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" } // Animate to normal size and visible (faster)
            );
            gsap.fromTo(
              image4Ref.current,
              { scale: 4, opacity: 0 }, // Start with large image and invisible
              { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" } // Animate to normal size and visible (faster)
            );
            gsap.fromTo(
              image5Ref.current,
              { scale: 4, opacity: 0 }, // Start with large image and invisible
              { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" } // Animate to normal size and visible (faster)
            );
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
    <Box
      sx={{
        paddingTop: "100px",
        paddingBottom: "70px",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "100%" }} ref={sectionRef}>
        <Stack sx={{ display: "flex", justifyContent: "center" }} gap={4}>
          <Stack ref={topRef}>
            <Box
              sx={{
                padding: "8px 12px",
                backgroundColor: "#e8eaf6",
                paddingLeft: "22px",
                borderRadius: "50px",
                width: "150px",
                marginX: "auto",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#303f9f",
                  borderLeft: "solid 4px #303f9f",
                  paddingLeft: "16px",
                  fontSize: "14px",
                  fontWeight: 'bold',
                }}
              >
                Our Projects
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ textAlign: "center", marginY: "1rem" }}
              >
                Showcasing Our Expertise
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#5a5d63",
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: "13px",
                }}
              >
                Showcasing Our Expertise From complex international shipments to
                efficient domestic transport,
                <br />
                our success stories highlight our commitment to reliability.
              </Typography>
            </Box>
          </Stack>
          <Stack
            justifyContent={"center"}
            gap={1}
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={"center"}
              gap={1}
              alignItems={"center"}
            >
              <Box
                ref={image1Ref}
                sx={{
                  borderRadius: "7px",
                  userSelect: "none",
                  margin: "10px",
                  color: "#fff",
                  backgroundSize: "cover !important",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.5s",
                  "&:hover .hoverContent": {
                    height: "85%",
                    top: 28, // Move the box to the top
                    opacity: 1, // Make it visible on hover
                  },
                  "&:hover .image": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={Image1}
                    alt={"img1"}
                    className="image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease", // Smooth transition for scaling
                    }}
                  />
                </Box>
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    left: "8%",
                    top: "100%", // Start at the bottom of the container
                    height: "0%", // Initially hidden (height is 0%)
                    width: "85%", // Cover the entire width
                    backgroundColor: "#303f9f", // Blue background
                    transition:
                      "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
                    zIndex: 99,
                    opacity: 0, // Initially hidden
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    borderRadius: "15px",
                    padding: "28px 20px",
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "white",
                      borderRadius: "50px",
                      lineHeight: "65px",
                      textAlign: "center",
                      alignItems: "center",
                      marginX: "auto",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "2.6rem",
                        verticalAlign: "middle",
                        color: "#303f9f",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                      textAlign: "center",
                      marginTop: "28px",
                    }}
                  >
                    Transportation
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      lineHeight: "20px",
                      fontWeight: 600,
                      color: "#fff",
                      marginTop: "10px",
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    Customs Clearance Excellence
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                      textAlign: "center",
                    }}
                  >
                    Explore our case studies achievements to see how we have
                    transformed.
                  </Typography>
                </Box>
              </Box>

              <Box
                ref={image2Ref}
                sx={{
                  borderRadius: "7px",
                  margin: "10px",
                  color: "#fff",
                  backgroundSize: "cover !important",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.5s",
                  "&:hover .hoverContent": {
                    height: "85%",
                    top: 28, // Move the box to the top
                    opacity: 1, // Make it visible on hover
                  },
                  "&:hover .image": {
                    transform: "scale(1.1)", // Scale the image on hover
                  },
                  userSelect: "none",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={Image2}
                    alt={"img2"}
                    className="image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease", // Smooth transition for scaling
                    }}
                  />
                </Box>
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    left: "8%",
                    top: "100%", // Start at the bottom of the container
                    height: "0%", // Initially hidden (height is 0%)
                    width: "85%", // Cover the entire width
                    backgroundColor: "#303f9f", // Blue background
                    transition:
                      "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
                    zIndex: 99,
                    opacity: 0, // Initially hidden
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    borderRadius: "15px",
                    padding: "28px 20px",
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "white",
                      borderRadius: "50px",
                      lineHeight: "65px",
                      textAlign: "center",
                      alignItems: "center",
                      marginX: "auto",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "2.6rem",
                        verticalAlign: "middle",
                        color: "#303f9f",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                      textAlign: "center",
                      marginTop: "28px",
                    }}
                  >
                    Transportation
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      lineHeight: "20px",
                      fontWeight: 600,
                      color: "#fff",
                      marginTop: "10px",
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    Customs Clearance Excellence
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                      textAlign: "center",
                    }}
                  >
                    Explore our case studies achievements to see how we have
                    transformed.
                  </Typography>
                </Box>
              </Box>

              <Box
                ref={image3Ref}
                sx={{
                  borderRadius: "7px",
                  margin: "10px",
                  color: "#fff",
                  backgroundSize: "cover !important",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.5s",
                  "&:hover .hoverContent": {
                    height: "85%",
                    top: 28, // Move the box to the top
                    opacity: 1, // Make it visible on hover
                  },
                  "&:hover .image": {
                    transform: "scale(1.1)", // Scale the image on hover
                  },
                  userSelect: "none",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={Image3}
                    alt={"img3"}
                    className="image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease", // Smooth transition for scaling
                    }}
                  />
                </Box>
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    left: "8%",
                    top: "100%", // Start at the bottom of the container
                    height: "0%", // Initially hidden (height is 0%)
                    width: "85%", // Cover the entire width
                    backgroundColor: "#303f9f", // Blue background
                    transition:
                      "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
                    zIndex: 99,
                    opacity: 0, // Initially hidden
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    borderRadius: "15px",
                    padding: "28px 20px",
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "white",
                      borderRadius: "50px",
                      lineHeight: "65px",
                      textAlign: "center",
                      alignItems: "center",
                      marginX: "auto",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "2.6rem",
                        verticalAlign: "middle",
                        color: "#303f9f",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                      textAlign: "center",
                      marginTop: "28px",
                    }}
                  >
                    Transportation
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      lineHeight: "20px",
                      fontWeight: 600,
                      color: "#fff",
                      marginTop: "10px",
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    Customs Clearance Excellence
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                      textAlign: "center",
                    }}
                  >
                    Explore our case studies achievements to see how we have
                    transformed.
                  </Typography>
                </Box>
              </Box>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={"center"}
              gap={1}
              alignItems={"center"}
            >
              <Box
                ref={image4Ref}
                sx={{
                  borderRadius: "7px",
                  margin: "10px",
                  color: "#fff",
                  backgroundSize: "cover !important",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.5s",
                  "&:hover .hoverContent": {
                    height: "55%",
                    top: "23%", // Move the box to the top
                    opacity: 1, // Make it visible on hover
                  },
                  "&:hover .image": {
                    transform: "scale(1.1)", // Scale the image on hover
                  },
                  userSelect: "none",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={Image4}
                    alt={"img4"}
                    className="image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease", // Smooth transition for scaling
                    }}
                  />
                </Box>
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    left: "8%",
                    top: "100%", // Start at the bottom of the container
                    height: "0%", // Initially hidden (height is 0%)
                    width: "85%", // Cover the entire width
                    backgroundColor: "#303f9f", // Blue background
                    transition:
                      "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
                    zIndex: 99,
                    opacity: 0, // Initially hidden
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    borderRadius: "15px",
                    padding: "28px 20px",
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "white",
                      borderRadius: "70px",
                      lineHeight: "65px",
                      textAlign: "center",
                      alignItems: "center",
                      marginX: "auto",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "2.6rem",
                        verticalAlign: "middle",
                        color: "#303f9f",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                      textAlign: "center",
                      marginTop: "22px",
                    }}
                  >
                    Transportation
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      lineHeight: "20px",
                      fontWeight: 600,
                      color: "#fff",
                      marginTop: "10px",
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    Customs Clearance Excellence
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                      textAlign: "center",
                    }}
                  >
                    Explore our case studies achievements to see how we have
                    transformed.
                  </Typography>
                </Box>
              </Box>
              <Box
                ref={image5Ref}
                sx={{
                  borderRadius: "7px",
                  margin: "10px",
                  color: "#fff",
                  backgroundSize: "cover !important",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.5s",
                  "&:hover .hoverContent": {
                    height: "55%",
                    top: "23%", // Move the box to the top
                    opacity: 1, // Make it visible on hover
                  },
                  "&:hover .image": {
                    transform: "scale(1.1)", // Scale the image on hover
                  },
                  userSelect: "none",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={Image5}
                    alt={"img5"}
                    className="image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Box>
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    left: "8%",
                    top: "100%",
                    height: "0%",
                    width: "85%",
                    backgroundColor: "#303f9f",
                    transition:
                      "height 0.3s ease, top 0.3s ease, opacity 0.5s ease",
                    zIndex: 99,
                    opacity: 0,
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    borderRadius: "15px",
                    padding: "28px 20px",
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "white",
                      borderRadius: "70px",
                      lineHeight: "65px",
                      textAlign: "center",
                      alignItems: "center",
                      marginX: "auto",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "2.6rem",
                        verticalAlign: "middle",
                        color: "#303f9f",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                      textAlign: "center",
                      marginTop: "22px",
                    }}
                  >
                    Transportation
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      lineHeight: "20px",
                      fontWeight: 600,
                      color: "#fff",
                      marginTop: "10px",
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    Customs Clearance Excellence
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                      textAlign: "center",
                    }}
                  >
                    Explore our case studies achievements to see how we have
                    transformed.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default OurProjects;
