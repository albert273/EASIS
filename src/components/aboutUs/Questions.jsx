"use client";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import carImage from "../../../public/images/aboutUs/ca-faq-2.1.png";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";

const questions = [
  {
    id: "1",
    title: "What should I do if my shipment is delayed?",
    content:
      "If your shipment is delayed, please contact our customer service team with your tracking number. They will provide updates and assist in resolving any issues.",
  },
  {
    id: "2",
    title: "How do I schedule a pickup for my shipment?",
    content:
      "To schedule a pickup, visit our website or contact our customer service team. Provide the necessary details, such as pickup address, package dimensions, and preferred time.",
  },
  {
    id: "3",
    title: "What are the payment options available?",
    content:
      "We accept a variety of payment methods, including credit/debit cards, bank transfers, and online payment platforms. For more details, visit our payment options page.",
  },
  {
    id: "4",
    title: "Can I change the delivery address after placing an order?",
    content:
      "Yes, you can request a change in the delivery address by contacting our support team before the shipment is dispatched. Additional charges may apply.",
  },
  {
    id: "5",
    title: "What items are prohibited from shipping?",
    content:
      "Certain items, such as hazardous materials, perishable goods, and illegal substances, are prohibited. Please review our list of restricted items for more details.",
  },
  {
    id: "6",
    title: "How do I file a claim for lost or damaged goods?",
    content:
      "To file a claim, please submit a claim form along with proof of shipment and any supporting documents. Our claims department will review and assist you promptly.",
  },
  {
    id: "7",
    title: "Do you offer insurance for shipments?",
    content:
      "Yes, we offer optional insurance coverage for shipments. This ensures your goods are protected against loss or damage during transit. Contact us for more information.",
  },
];


export default function Questions() {
  const [expanded, setExpanded] = useState(questions[0].id); // Set the first accordion open by default
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const leftBoxRef = useRef(null);
  const sectionRef = useRef(null);
  const isLargeScreen = useMediaQuery("(max-width:700px)");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset the elements before playing the animation again
            gsap.set(rightRef.current, { x: "100%", opacity: 0 });
            gsap.set(leftRef.current, { x: "-100%", opacity: 0 });
            gsap.set(leftBoxRef.current, { x: "-100%", opacity: 0 });

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
            gsap.to(leftBoxRef.current, {
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container
      maxWidth={false}
      sx={{
        width: { xs: "95%", md: "90%" },
      }}
      ref={sectionRef}
    >
      <Box
        sx={{
          padding: "8px 12px",
          backgroundColor: "#e8eaf6",
          paddingLeft: "22px",
          borderRadius: "50px",
          width: "180px",
          display: "start",
          marginBottom: "20px",
        }}
        ref={leftBoxRef}
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
          Asked Questions
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        gap={5}
      >
        <Stack
          justifyContent={"space-between"}
          gap={2}
          ref={leftRef}
          alignItems={{ xs: "center", md: "start" }}
        >
          <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
            Everything You Need to Know Help & Support
          </Typography>
          <Typography
            sx={{ color: "#5A5A5A", fontSize: "16px", lineHeight: "24px" }}
          >
            Our clients satisfaction is the cornerstone of our success at Cargon
            We take immense pride in the positive feedback we receive from
            businesses worldwide who rely on our expertise for their.
          </Typography>
          <Stack justifyContent={"center"}>
            <Image
              loading="lazy"
              src={carImage}
              alt="carImage"
              width={false}
              style={{
                width: isLargeScreen ? 300 : 600,
                height: isLargeScreen ? 200 : 400,
                borderRadius: "7px",
              }}
              hight={false}
            />
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%" }} gap={3} ref={rightRef}>
          {questions.map((item) => (
            <Accordion
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              key={item.id}
              sx={{
                backgroundColor: expanded === item.id ? "#1a237e" : "#F5F1F1",
                color: expanded === item.id ? "white" : "black",
                transition: "background-color 0.3s ease",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
              >
                <Typography
                  component="span"
                  sx={{
                    width: "100%",
                    flexShrink: 0,
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
