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
            backgroundColor: "#1a237e", // Blue background
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
                color: "#1a237e",
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
            Global Freight Solutions
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
            Seamless International Shipping
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
            Discover how our expertise in global freight management has
            simplified cross-border logistics for businesses worldwide.
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
            backgroundColor: "#1a237e", // Blue background
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
                color: "#1a237e",
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
            Warehousing Optimization
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
            Efficient Storage and Distribution
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
            Learn how we have streamlined inventory management and reduced costs
            for our clients through advanced warehousing solutions.
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
            backgroundColor: "#1a237e", // Blue background
            transition: "height 0.3s ease, top 0.3s ease, opacity 0.5s ease", // Smooth transition
            zIndex: 99,
            opacity: 0, // Initially hidden
            display: "flex",
            flexDirection: "column",
            borderRadius: "15px",
            padding: "12px 10px",
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
                color: "#1a237e",
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
            Last-Mile Delivery
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
            On-Time Every Time
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
            Explore how we ensure timely and reliable deliveries to the final
            destination, enhancing customer satisfaction.
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
            backgroundColor: "#1a237e", // Blue background
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
                color: "#1a237e",
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
            Customs Brokerage Services{" "}
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
            Hassle-Free Compliance
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
            See how our in-depth knowledge of customs regulations has expedited clearance processes for our clients.
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
            backgroundColor: "#1a237e", // Blue background
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
                color: "#1a237e",
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
            Supply Chain Integration
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
            End-to-End Visibility
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
            Discover how we connect every link in the supply chain to deliver seamless and transparent logistics solutions.
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
            backgroundColor: "#1a237e", // Blue background
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
                color: "#1a237e",
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
            Cold Chain Logistics
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
            Preserving Freshness and Quality
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
            Explore our innovative cold chain solutions that maintain product integrity from origin to destination.
          </Typography>
        </Box>
      </Box>
    </ImageList>
  );
}
