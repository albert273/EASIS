"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import rightImg from "../../../public/images/services/shipe3.webp";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";

const questions = [
  {
    id: "1",
    title: "Freight Transportation",
    content: `Moving goods from one location to another via air, sea, road, or rail. This includes domestic and international shipping.\nKey Features:\nFull Truckload (FTL) and Less-than-Truckload (LTL) services.\nExpedited shipping for time-sensitive deliveries.\nMulti-modal transport options.`,
  },
  {
    id: "2",
    title: "Warehousing and Storage",
    content: `Providing secure and efficient storage solutions for goods until they are ready for distribution.\nKey Features:\nTemperature-controlled warehouses for perishable goods.\nInventory management systems for real-time tracking.\nCross-docking and consolidation services.`,
  },
  {
    id: "3",
    title: "Customs Clearance and Documentation",
    content: `Handling the legal and administrative processes required for international shipping.\nKey Features:\nAssistance with import/export documentation.\nCompliance with customs regulations and duties.\nSupport for obtaining necessary permits and certifications.`,
  },
  {
    id: "4",
    title: "Supply Chain Management",
    content: `Offering end-to-end solutions to streamline the supply chain process.\nKey Features:\nDemand planning and forecasting.\nVendor and inventory management.\nOptimization of logistics networks for cost efficiency.`,
  },
];
export default function RightSection() {
  const [expanded, setExpanded] = useState(questions[0].id); // Set the first accordion open by default

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Stack sx={{ width: "95%", marginX: "auto" }} gap={3}>
      <Stack
        sx={{ width: "100%", maxWidth: "920px", marginX: "auto" }}
        justifyContent={"center"}
      >
        <Image
          loading="lazy"
          src={rightImg}
          alt="rightImg"
          layout="responsive"
          width={920}
          height={510}
          style={{ borderRadius: "7px" }}
        />
      </Stack>
      <Stack gap={1}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "30px", md: "40px" } }}
        >
          Supply Chain Management
        </Typography>
        <Typography
          sx={{ color: "#5A5D63", fontSize: "16px", lineHeight: "32px" }}
        >
          We pride ourselves on offering a comprehensive suite of logistics and
          transport services tailored to meet the diverse needs of our clients.
          Our Freight Forwarding Services ensure your goods are transported
          efficiently and safely across international borders, leveraging our
          extensive network and expertise. Our Warehousing Solutions provide
          secure storage with advanced inventory management systems to keep your
          products organized and easily accessible. We specialize in Customs
          Clearance, navigating the complexities of international trade
          regulations to ensure smooth and timely shipments.
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "30px", md: "40px" } }}
        >
          Comprehensive Service Overview
        </Typography>
        <Typography
          sx={{ color: "#5A5D63", fontSize: "16px", lineHeight: "32px" }}
        >
          Our Global Shipping Services connect you to markets worldwide,
          offering reliable & cost-effective solutions for your business. For
          domestic needs, our Domestic Transport Solutions guarantee fast and
          dependable delivery across the country. Our Supply Chain Management
          services optimize every step of your logistics
        </Typography>
      </Stack>

      <Stack sx={{ width: "100%" }} gap={3}>
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
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: { xs: "14px", md: "18px" } }}>
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>

      <Stack gap={1}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "30px", md: "40px" } }}
        >
          In-Depth Service Information
        </Typography>
        <Typography
          sx={{ color: "#5A5D63", fontSize: "16px", lineHeight: "32px" }}
        >
          Our Freight Forwarding Services are designed to handle complex
          international shipments, ensuring your goods reach their destination
          safely & on time. Our Warehousing Solutions offer state-of-the-art
          facilities equipped with advanced security & inventory management
          systems, allowing for efficient storage.
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "30px", md: "40px" } }}
        >
          Our Specialized Services
        </Typography>
        <Typography
          sx={{ color: "#5A5D63", fontSize: "16px", lineHeight: "32px" }}
        >
          With our Customs Clearance Expertise, we simplify process of
          navigating international trade regulations, ensuring compliance and
          minimizing delays. Our Global Shipping Services provide comprehensive
          solutions for transporting goods worldwide, backed by a network of
          reliable carriers and partners.
        </Typography>
      </Stack>
      <Stack gap={2}>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          Detailed Service Offerings Service Highlights
        </Typography>
        <Stack
          gap={2}
          display={"grid"}
          sx={{ gridTemplateColumns: { xs: "1rf", md: "1fr 1fr" } }}
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
                  color: "#3f51b5",
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
      </Stack>

      <Stack gap={1}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "30px", md: "40px" } }}
        >
          Our Services in Detail
        </Typography>
        <Typography
          sx={{ color: "#5A5D63", fontSize: "16px", lineHeight: "32px" }}
        >
          For businesses requiring domestic transportation, our Domestic
          Transport Solutions offer fast, flexible, and cost-effective delivery
          options. Our Supply Chain Management services are tailored to optimize
          every aspect of your logistics process, from procurement to final
          delivery.
        </Typography>
      </Stack>
    </Stack>
  );
}
