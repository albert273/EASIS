"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import Image from "next/image";
import img1 from "../../../public/images/services/ca-blog-post1.1.png";
import img2 from "../../../public/images/services/ca-blog-post1.2.png";
import img3 from "../../../public/images/services/ca-blog-post1.3.png";
import img4 from "../../../public/images/services/ca-blog-post1.4.png";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const questions = [
  {
    id: "1",
    title: "What should I do ?",
    content:
      " That's why we've compiled a list of frequently asked questions to help you get the answers you need quickly and easily. Whether you're curious.",
  },
  {
    id: "2",
    title: "What should I do ?",
    content:
      " That's why we've compiled a list of frequently asked questions to help you get the answers you need quickly and easily. Whether you're curious.",
  },
  {
    id: "3",
    title: "What should I do ?",
    content:
      " That's why we've compiled a list of frequently asked questions to help you get the answers you need quickly and easily. Whether you're curious.",
  },
  {
    id: "4",
    title: "What should I do ?",
    content:
      " That's why we've compiled a list of frequently asked questions to help you get the answers you need quickly and easily. Whether you're curious.",
  },
];

const blogs = [
  {
    id: "1",
    Image: img1,
    titleImg: "What should I do ?",
    title: "E-commerce & Logistics: Meeting the..",
    Date: "14/7/2002",
  },
  {
    id: "2",
    Image: img2,
    titleImg: "What should I do ?",
    title: "The Importance of Reliable Freight Forw..",
    Date: "31/12/2023",
  },
  {
    id: "3",
    Image: img3,
    titleImg: "What should I do ?",
    title: "Project Logistics: Handling Large and C..",
    Date: "24/1/2013",
  },
  {
    id: "4",
    Image: img4,
    titleImg: "What should I do ?",
    title: "Navigating Customs Clearance: Tips for a..",
    Date: "10/4/2022",
  },
];

export default function LeftAppBar() {
  const [expanded, setExpanded] = useState(questions[0].id); // Set the first accordion open by default

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Stack sx={{ backgroundColor: "white" }} gap={4}>
      <Stack
        sx={{
          backgroundColor: "#F8F9FA",
          padding: "24px 20px",
          width: "90%",
          borderRadius: "7px",
          marginX: "auto",
        }}
      >
        <Typography
          sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "15px" }}
        >
          Our Services
        </Typography>
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
      <Stack
        sx={{
          backgroundColor: "#F8F9FA",
          padding: "24px 20px",
          width: "90%",
          borderRadius: "7px",
          marginX: "auto",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}
        >
          If You Need Any Help Contact With Us
        </Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            borderRadius: "50px",
            backgroundColor: "#1a237e",
            padding: "10px 14px",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "16px",
            transition: ".3s",
            "&:hover": { backgroundColor: "black" },
            width: "60%",
          }}
          startIcon={
            <PhoneInTalkOutlinedIcon
              sx={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                backgroundColor: "#3f51b5",
                color: "white",
                padding: "5px",
              }}
            />
          }
        >
          +123 456 789
        </Button>
      </Stack>
      <Stack
        sx={{
          backgroundColor: "#F8F9FA",
          padding: "24px 20px",
          width: "90%",
          borderRadius: "7px",
          marginX: "auto",
        }}
      >
        <Typography
          sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "15px" }}
        >
          Recent Blogs{" "}
        </Typography>
        <Stack gap={2}>
          {blogs.map((item) => (
            <Stack gap={2} key={item.id} direction={"row"}>
              <Image
                loading="lazy"
                src={item.Image}
                alt={item.titleImg}
                width={100}
                height={100}
                style={{ borderRadius: "7px" }}
              />
              <Stack justifyContent={"space-between"}>
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <DateRangeOutlinedIcon sx={{ color: "#5A5D63" }} />
                  <Typography sx={{ fontSize: "17px", color: "#5A5D63" }}>
                    {item.Date}
                  </Typography>
                </Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {item.title}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          backgroundColor: "#F8F9FA",
          padding: "24px 20px",
          width: "90%",
          borderRadius: "7px",
          marginX: "auto",
        }}
      >
        <Typography
          sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "15px" }}
        >
          Follow Us
        </Typography>
        <Stack direction={"row"}>
          <Box
            sx={{
              display: "flex", // Flexbox for alignment
              alignItems: "center", // Vertical centering
              justifyContent: "center", // Horizontal centering
              height: "50px",
              width: "50px",
              background: "#e8eaf6",
              color: "#1a237e",
              borderRadius: "50%",
              marginRight: "16px",
              transition: ".3s",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#1a237e",
                color: "#FFFFFF", // Change text color to white on hover
              },
            }}
          >
            <FacebookIcon
              className="icon"
              sx={{
                color: "inherit", // Fixed color code with '#'
                fontSize: "25px",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex", // Flexbox for alignment
              alignItems: "center", // Vertical centering
              justifyContent: "center", // Horizontal centering
              height: "50px",
              width: "50px",
              background: "#e8eaf6",
              color: "#1a237e",
              borderRadius: "50%",
              marginRight: "16px",
              transition: ".3s",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#1a237e",
                color: "#FFFFFF", // Change text color to white on hover
              },
            }}
          >
            <XIcon
              className="icon"
              sx={{
                color: "inherit", // Fixed color code with '#'
                fontSize: "25px",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex", // Flexbox for alignment
              alignItems: "center", // Vertical centering
              justifyContent: "center", // Horizontal centering
              height: "50px",
              width: "50px",
              background: "#e8eaf6",
              color: "#1a237e",
              borderRadius: "50%",
              marginRight: "16px",
              transition: ".3s",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#1a237e",
                color: "#FFFFFF", // Change text color to white on hover
              },
            }}
          >
            <InstagramIcon
              className="icon"
              sx={{
                color: "inherit", // Fixed color code with '#'
                fontSize: "25px",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex", // Flexbox for alignment
              alignItems: "center", // Vertical centering
              justifyContent: "center", // Horizontal centering
              height: "50px",
              width: "50px",
              background: "#e8eaf6",
              color: "#1a237e",
              borderRadius: "50%",
              marginRight: "16px",
              transition: ".3s",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#1a237e",
                color: "#FFFFFF", // Change text color to white on hover
              },
            }}
          >
            <LinkedInIcon
              className="icon"
              sx={{
                color: "inherit", // Fixed color code with '#'
                fontSize: "25px",
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
