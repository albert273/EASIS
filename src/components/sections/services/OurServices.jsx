"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Image1 from "../../../../public/images/section2/img1.jpg";
import Image2 from "../../../../public/images/section2/img2.jpg";
import Image3 from "../../../../public/images/section2/img3.jpg";
import Image4 from "../../../../public/images/section2/img4.jpg";
import Image5 from "../../../../public/images/section2/img5.avif"
import animation1 from "../../../../public/images/section2/shape-1.1.png";
import animation2 from "../../../../public/images/section2/shape-1.2.png";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import { gsap } from "gsap";

function OurServices() {
  const [active, setActive] = useState("imag1");
  const images = [
    {
      img: Image1,
      id: "1",
      title: "Image1",
      titleText: "Freight Transportation",
      content: `Moving goods from one location to another via air, sea, road, or rail. This includes domestic and international shipping.\nKey Features:\nFull Truckload (FTL) and Less-than-Truckload (LTL) services.\nExpedited shipping for time-sensitive deliveries.`,
    },
    {
      img: Image2,
      id: "2",
      title: "Image2",
      titleText: "Warehousing and Storage",
      content: `Providing secure and efficient storage solutions for goods until they are ready for distribution.\nKey Features:\nTemperature-controlled warehouses for perishable goods.\nInventory management systems for real-time tracking.`,
    },
    {
      img: Image3,
      id: "3",
      title: "Image3",
      titleText: "Customs Clearance and Documentation",
      content: `Handling the legal and administrative processes required for international shipping.\nKey Features:\nAssistance with import/export documentation.\nCompliance with customs regulations and duties.`,
    },
    {
      img: Image4,
      id: "4",
      title: "Image4",
      titleText: "Supply Chain Management",
      content: `Offering end-to-end solutions to streamline the supply chain process.\nKey Features:\nDemand planning and forecasting.\nVendor and inventory management.\nOptimization of logistics networks for cost efficiency.`,
    },
    {
      img: Image5,
      id: "5",
      title: "Image5",
      titleText: "Last-Mile Delivery",
      content: `Ensuring goods are delivered to the final destination, often directly to customers.\nKey Features:\nReal-time tracking and updates for customers.\nDelivery to urban and remote areas.\nOptions for contactless or scheduled deliveries.`,
    },
  ];
  const topRef = useRef(null);
  const sectionRef = useRef(null);
  const animation1Ref = useRef(null);
  const animation2Ref = useRef(null);

  const handleMouseEnter = (imageName) => {
    setActive(imageName);
  };

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
    // Create an up-and-down animation for the referenced image
    if (animation1Ref.current) {
      gsap.to(animation1Ref.current, {
        y: "-80px", // Move up by 20px
        duration: 1.5, // Animation duration
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse the animation
        ease: "power1.inOut", // Smooth easing
      });
    }
    if (animation2Ref.current) {
      gsap.to(animation2Ref.current, {
        y: "-80px", // Move up by 20px
        duration: 1.5, // Animation duration
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse the animation
        ease: "power1.inOut", // Smooth easing
      });
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa",
        paddingTop: "100px",
        paddingBottom: "100px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "80px",
          left: "30px",
          display: { xs: "none", md: "inline" },
        }}
        ref={animation1Ref}
      >
        <Image
          loading="lazy"
          src={animation1}
          width={200}
          height={200}
          alt="animation1"
        />
      </Box>
      <Container
        maxWidth={false}
        sx={{ maxWidth: "90%", zIndex: 2 }}
        ref={sectionRef}
      >
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
                  color: "#1a237e",
                  borderLeft: "solid 4px #1a237e",
                  paddingLeft: "16px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Our Service
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ textAlign: "center", marginY: "1rem" }}
              >
                Our Range of Logistics Services
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
                Our state-of-the-art facilities and innovative technology
                support e-commerce
                <br /> fulfillment and project cargo handling, providing you
                with tailored solutions.
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={1}
            justifyContent={"center"}
            sx={{ zIndex: 4 }}
          >
            {images.map((image) => (
              <Box
                key={image.id}
                onMouseEnter={() => handleMouseEnter(image.title)}
                sx={{
                  height: "370px",
                  borderRadius: "7px",
                  margin: "10px",
                  cursor: "pointer",
                  color: "#fff",
                  flex: 1,
                  backgroundSize: "cover !important",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  background: "#1a237e",
                  overflow: "hidden",
                  transition: "all 0.5s",
                  "&:hover .hoverContent": {
                    width: "102%", // Full width on hover
                    opacity: 1, // Make it visible on hover
                  },
                  "&:hover": {
                    flex: 2,
                    transition: "all 0.5s",
                  },
                }}
              >
                <Image
                  loading="lazy"
                  src={image.img}
                  alt={image.title}
                  style={{ maxWidth: "100%", objectFit: "cover" }}
                />
                <Box
                  className="hoverContent"
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "105%",
                    width: "0%", // Initially starts at 0 width (hidden)
                    backgroundColor: "#1a237e", // Semi-transparent background
                    transition: "width 0.3s ease, opacity 0.3s ease", // Smooth transition
                    zIndex: 99,
                    opacity: 0, // Initially hidden
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "15px",
                    padding: "22px 32px",
                    userSelect: "none",
                    // Keep the border radius
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#3f51b5",
                      borderRadius: "50px",
                      lineHeight: "65px",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <PublicTwoToneIcon
                      sx={{ fontSize: "2.4rem", verticalAlign: "middle" }}
                    />
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      lineHeight: "20px",
                      fontWeight: 600,
                      color: "#fff",
                      marginTop: "22px",
                      marginBottom: "16px",
                    }}
                  >
                    {image.titleText}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                      opacity: 0.8,
                    }}
                  >
                    {image.content.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: "0px",
          right: "10px",
          zIndex: 1,
        }}
        ref={animation2Ref}
      >
        <Image
          loading="lazy"
          src={animation2}
          width={120}
          height={120}
          alt="animation2"
        />
      </Box>
    </Box>
  );
}

export default OurServices;
