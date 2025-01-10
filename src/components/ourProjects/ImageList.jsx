"use client";
import React from "react";
import { Box, ImageList, Typography, useMediaQuery } from "@mui/material";
import img1 from "../../../public/images/ourProjects/truckImg.jpg";
import img2 from "../../../public/images/ourProjects/transportation-and-logistic.jpg";
import img3 from "../../../public/images/ourProjects/OIP (2).jpg";
import img5 from "../../../public/images/ourProjects/international-export-freight-services-500x500.webp";
import img6 from "../../../public/images/ourProjects/2.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

export default function ImageListComponents() {
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Detects small screens

  return (
    <ImageList
      sx={{ width: "100%", height: "auto" }}
      cols={isSmallScreen ? 1 : 3} // Set cols to 1 on small screens
      gap={12}
      variant="masonry"
    >
      <Box
        sx={{
          marginBottom: "10px",
          borderRadius: "7px",
          userSelect: "none",
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
            src={img1}
            alt={"img1"}
            className="image"
            width={400}
            height={400}
            style={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
              borderRadius: "5px",
            }}
            loading="lazy"
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
            transition: "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
            zIndex: 99,
            opacity: 0, // Initially hidden
            display: "flex",
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
        sx={{
          marginBottom: "10px",

          borderRadius: "7px",
          userSelect: "none",
          color: "#fff",
          backgroundSize: "cover !important",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.5s",
          "&:hover .hoverContent": {
            height: 350,
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
            loading="lazy"
            src={img5}
            alt={"img1"}
            className="image"
            width={400}
            height={400}
            style={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
              borderRadius: "5px",
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
            transition: "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
            zIndex: 99,
            opacity: 0, // Initially hidden
            display: "flex",
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
        sx={{
          marginBottom: "10px",

          borderRadius: "7px",
          userSelect: "none",
          color: "#fff",
          backgroundSize: "cover !important",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.5s",
          "&:hover .hoverContent": {
            height: 240,
            top: 5, // Move the box to the top
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
            loading="lazy"
            src={img2}
            alt="transportation-and-logistic"
            className="image"
            width={400}
            height={250}
            style={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
              borderRadius: "5px",
            }}
          />
        </Box>
        <Box
          className="hoverContent"
          sx={{
            position: "absolute",
            left: "8%",
            top: "100%", // Start at the bottom of the container
            height: "100%", // Initially hidden (height is 0%)
            width: "85%", // Cover the entire width
            backgroundColor: "#303f9f", // Blue background
            transition: "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
            zIndex: 99,
            opacity: 0, // Initially hidden
            display: "flex",
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
              marginTop: "8px",
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
        sx={{
          marginBottom: "10px",

          borderRadius: "7px",
          userSelect: "none",
          color: "#fff",
          backgroundSize: "cover !important",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.5s",
          "&:hover .hoverContent": {
            height: 300,
            top: 125, // Move the box to the top
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
            loading="lazy"
            src={img6}
            alt={"img2"}
            className="image"
            width={400}
            height={550}
            style={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
              borderRadius: "5px",
            }}
          />
        </Box>
        <Box
          className="hoverContent"
          sx={{
            position: "absolute",
            left: "8%",
            top: "100%", // Start at the bottom of the container
            height: "100%", // Initially hidden (height is 0%)
            width: "85%", // Cover the entire width
            backgroundColor: "#303f9f", // Blue background
            transition: "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
            zIndex: 99,
            opacity: 0, // Initially hidden
            display: "flex",
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
              marginTop: "8px",
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
        sx={{
          marginBottom: "10px",
          borderRadius: "7px",
          userSelect: "none",
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
            loading="lazy"
            src={img3}
            alt={"img1"}
            className="image"
            width={400}
            height={400}
            style={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
              borderRadius: "5px",
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
            transition: "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
            zIndex: 99,
            opacity: 0, // Initially hidden
            display: "flex",
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
        sx={{
          marginBottom: "10px",

          borderRadius: "7px",
          userSelect: "none",
          color: "#fff",
          backgroundSize: "cover !important",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.5s",
          "&:hover .hoverContent": {
            height: 350,
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
            loading="lazy"
            src={img5}
            alt={"img1"}
            className="image"
            width={400}
            height={400}
            style={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
              borderRadius: "5px",
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
            transition: "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
            zIndex: 99,
            opacity: 0, // Initially hidden
            display: "flex",
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
    </ImageList>
  );
}
