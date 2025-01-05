import Hero2 from "@/components/hero/Hero2";
import AboutUs from "@/components/sections/aboutUs/AboutUs";
import OurServices from "@/components/sections/services/OurServices";
import Testimonial from "@/components/sections/testimonial/Testimonial";
import { Box } from "@mui/material";
import Section1 from "@/components/sections/whyWeAre/WhyWeAre";
import OurProjects from "@/components/sections/ourProjects/OurProjects";


export default function Home() {
  return (
    <Box>
      <Hero2 />
      <AboutUs />
      <Section1 />
      <OurServices/>
      <OurProjects />
      <Testimonial />
    </Box>
  );
}
