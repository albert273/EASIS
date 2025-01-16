import Hero2 from "@/components/hero/Hero2";
import AboutUs from "@/components/sections/aboutUs/AboutUs";
import OurServices from "@/components/sections/services/OurServices";
import Testimonial from "@/components/sections/testimonial/Testimonial";
import { Box } from "@mui/material";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import OurProjects from "@/components/sections/ourProjects/OurProjects";

export default function Home() {
  return (
    <Box>
      <Hero2 />
      <Box id={"AboutUs"}>
        <AboutUs />
      </Box>
      <Box id={"WhyChooseUs"}>
        <WhyChooseUs />
      </Box>
      <Box id={"OurServices"}>
        {" "}
        <OurServices />
      </Box>
      <Box id={"OurProjects"}>
        {" "}
        <OurProjects />
      </Box>
      <Box id={"Testimonial"}>
        {" "}
        <Testimonial />
      </Box>
    </Box>
  );
}
