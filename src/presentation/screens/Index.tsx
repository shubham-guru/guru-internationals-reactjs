import { Box } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import AboutSection from "../components/AboutSection";
import UspSection from "../components/UspSection";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../HeroSection";
import FormSections from "../components/FormSections";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <Box>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <UspSection />
      <ServicesSection/>
      <FormSections />
      <Contact />
    </Box>
  );
};

export default Index;
