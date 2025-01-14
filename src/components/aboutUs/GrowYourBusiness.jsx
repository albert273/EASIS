'use client'
import { Box, Stack, Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";
import truckImg from "../../../public/images/aboutUs/truck-slide3.png";
import Image from "next/image";
import gsap from "gsap";

export default function GrowYourBusiness() {
  const downImgRef = useRef(null);
  const sectionRef = useRef(null);
  const imgRef = useRef(null); // Ref for the truck image

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

    // Copy `sectionRef.current` to a local variable
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
    const handleMouseEnter = () => {
      gsap.to(imgRef.current, {
        scale: 1.2, // Enlarge the image
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imgRef.current, {
        scale: 1, // Reset to original size
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const imageElement = imgRef.current;

    if (imageElement) {
      imageElement.addEventListener("mouseenter", handleMouseEnter);
      imageElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener("mouseenter", handleMouseEnter);
        imageElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <Stack
      sx={{
        margin: "auto",
        width: "94%",
        overflow: "hidden",
        paddingBottom: "30px",
      }}
      ref={sectionRef}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#0C0504",
          padding: "0px 60px",
          paddingTop: "20px",
        }}
        ref={downImgRef}
        
      >
        <Typography
          sx={{ fontSize: {xs:"33px",md:"44px"}, fontWeight: "bold", color: "white", textAlign: {xs: "center", md: "left"} }}
        >
          Join Us Today And let Us Help You To Grow Your Business.
        </Typography>
        <Stack sx={{ display: {xs: "none", md: "flex"}, position: "relative"  }}>
          <Box sx={{ zIndex: 3,  }}>
            <Image
            loading="lazy"
              src={truckImg}
              alt="truckImg"
              width={450}
              height={320}
              style={{ transformOrigin: "center center" }}
              ref={imgRef} 
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              opacity: "20%",
              backgroundColor: "white",
              bottom: "-110%",
              right: -50,
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              opacity: "20%",
              backgroundColor: "white",
              bottom: "-100%",
              right: -8,
              zIndex: 1,
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
