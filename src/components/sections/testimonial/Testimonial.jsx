"use client";
import {
  Box,
  Container,
  Stack,
  Typography,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useMediaQuery from "@mui/material/useMediaQuery";
import MediaCard from "../../mediaCard/MediaCard";

function Testimonial() {
  const [currentPage, setCurrentPage] = useState(0);
  const topRef = useRef(null);
  const sectionRef = useRef(null);

  const Comments = [
    {
      id: "1",
      title:
        "Discover how our innovative solutions transformed logistics for our clients",
      description:
        "We are committed to delivering exceptional service, ensuring our clients' logistics needs are met with precision and care. Our tailored strategies have enabled businesses to thrive in a competitive environment.",
      user: { image: "", username: "Ali Ahmed" },
    },
    {
      id: "2",
      title:
        "See how we help businesses streamline their supply chain operations",
      description:
        "By understanding our clients' unique challenges, we provide customized solutions that improve efficiency and reduce costs. Their success stories inspire us to continue delivering excellence.",
      user: { image: "", username: "John Ashrf" },
    },
    {
      id: "3",
      title:
        "Learn how our expertise in logistics ensures timely and reliable delivery",
      description:
        "Our focus on reliability and accuracy has earned us the trust of businesses worldwide. We are proud to be a part of their journey toward growth and success.",
      user: { image: "", username: "Sophia Bennett" },
    },
    {
      id: "4",
      title:
        "Explore how our technology-driven approach enhances logistics efficiency",
      description:
        "Through advanced technology and innovative practices, we have helped businesses optimize their operations and achieve remarkable results. Client satisfaction remains at the heart of what we do.",
      user: { image: "", username: "Mohamed ahmed" },
    },
    {
      id: "5",
      title:
        "Find out how our customer-centric approach creates lasting partnerships",
      description:
        "We believe in building long-term relationships with our clients by understanding their needs and exceeding their expectations. Their positive feedback is a testament to our dedication.",
      user: { image: "", username: "Zain" },
    },
    {
      id: "6",
      title:
        "Read about how our tailored solutions drive business growth and success",
      description:
        "Our comprehensive logistics services empower businesses to focus on their core strengths while we handle their transport and supply chain needs with excellence.",
      user: { image: "", username: "Mazen Montaser" },
    },
  ];

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
  // Media queries to detect screen sizes
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  const isLargeScreen = useMediaQuery("(min-width:900px)");

  // Set messages per page based on screen size
  const messagesPerPage = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;

  // Calculate the range of comments to display based on the current page
  const startIndex = currentPage * messagesPerPage;
  const endIndex = Math.min(startIndex + messagesPerPage, Comments.length);

  // Refs for animation
  const commentsRef = useRef(null);

  // GSAP Page Change Animation
  const animatePageChange = (direction) => {
    const animationDuration = 0.5;

    if (commentsRef.current) {
      gsap.to(commentsRef.current, {
        x: direction === "next" ? "-100%" : "100%",
        opacity: 0,
        duration: animationDuration,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(commentsRef.current, {
            x: direction === "next" ? "100%" : "-100%",
          });
          gsap.to(commentsRef.current, {
            x: "0%",
            opacity: 1,
            duration: animationDuration,
            ease: "power2.out",
          });
        },
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage =
        currentPage === Math.ceil(Comments.length / messagesPerPage) - 1
          ? 0
          : currentPage + 1;
      animatePageChange("next");
      setTimeout(() => {
        setCurrentPage(nextPage);
      }, 500);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentPage, messagesPerPage, Comments.length]); // Update when currentPage or messagesPerPage changes

  const handleSelect = (pageIndex) => {
    const direction = pageIndex > currentPage ? "next" : "prev";
    animatePageChange(direction);
    setTimeout(() => {
      setCurrentPage(pageIndex);
    }, 500);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa",
        paddingTop: "100px",
        paddingBottom: "70px",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "90%" }} ref={sectionRef}>
        <Stack sx={{ display: "flex", justifyContent: "center" }} gap={4}>
          <Stack ref={topRef}>
            <Box
              sx={{
                padding: "8px 12px",
                backgroundColor: "#e8eaf6",
                paddingLeft: "22px",
                borderRadius: "50px",
                width: "230px",
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
                What people say about us
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ textAlign: "center", marginY: "1rem" }}
              >
                Trusted by Clients
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
                Our certifications highlight our commitment to overcoming
                logistical challenges and delivering on our promises.
              </Typography>
            </Box>
          </Stack>

          <Box
            mt={4}
            sx={{ marginX: "auto", overflowX: "hidden", position: "relative" }}
          >
            <Box
              ref={commentsRef}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                padding: "1rem 0",
                transform: "translateX(0%)",
                opacity: 1,
              }}
            >
              {Comments.slice(startIndex, endIndex).map((comment) => (
                <Box key={comment.id} sx={{ minWidth: "300px" }}>
                  <MediaCard
                    title={comment.title}
                    description={comment.description}
                    image={comment.user.image}
                    username={comment.user.username}
                  />
                </Box>
              ))}
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                display: "block",
                width: "100%",
                padding: 0,
                margin: 0,
                listStyle: "none",
                textAlign: "center",
              }}
            >
              {[...Array(Math.ceil(Comments.length / messagesPerPage))].map(
                (_, pageIndex) => (
                  <FormControlLabel
                    key={pageIndex}
                    sx={{ margin: 0 }}
                    control={
                      <Radio
                        checked={currentPage === pageIndex}
                        onChange={() => handleSelect(pageIndex)}
                        sx={{
                          padding: 0,
                          marginLeft: "5px",
                        }}
                      />
                    }
                  />
                )
              )}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Testimonial;
