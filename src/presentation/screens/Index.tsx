import { Box, Typography } from "@mui/material";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Heading from "../components/Heading";
import HomeVideo from "../components/HomeVideo";
import NavBar from "../components/NavBar/NavBar";
import About from "../Content/about";
import Usp from "../Content/usp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Bot from "../components/Bot";
import { LinkedIn } from "@mui/icons-material";
import OurServicesCard from "../components/OurServicesCard";
import product_position from '../../assets/images/product_position.jpg';
import digital_presence from '../../assets/images/digital_presence.jpg';
import loyalty_program from '../../assets/images/loyalty_program.jpg';
import lowCost_marketing from '../../assets/images/lowCost_marketing.jpg';
import sustainable_business from '../../assets/images/sustainable_business.jpg';
import bedsheet from '../../assets/images/bedsheet.jpg';
import towel from '../../assets/images/towel.jpg';
import rugs from '../../assets/images/rugs.jpg';
import cotton from '../../assets/images/cotton.jpg';


const Index = () => {
  return (
    <div>
      <Box>
        <NavBar />
        <HomeVideo />
        <Heading title="About us" />
        <Content content={About} />
        <Heading title="Our USP" />
        <Content content={Usp} />
        <div>
          <Heading title="Our Products" />
          <div style={{display: 'flex'}}>
            <OurServicesCard url={cotton} title="Raw Cotton" />
            <OurServicesCard url={bedsheet} title="Cotton Bedsheets" />
          </div>

          <div style={{display: 'flex'}}>
            <OurServicesCard url={towel} title="Cotton Towels" />
            <OurServicesCard url={rugs} title="Cotton Rugs" />
          </div>
        </div>
      
        <div>
        <Heading title="Our Services" />

        <div style={{display: 'flex'}}>
          <OurServicesCard url={product_position} title="Product Positioning" />
          <OurServicesCard url={digital_presence} title="Digital Pressence" />
          <OurServicesCard url={loyalty_program} title="Design Customer Loyalty Programs" />
        </div>
        <div style={{display: 'flex'}}>
          <OurServicesCard url={lowCost_marketing} title="Low Cost Marketing" />
          <OurServicesCard url={sustainable_business} title="Sustainable Practices of Business" />
          <div style={{padding: 200, margin: 10}}></div>
        </div>

        </div>
        <Heading title="Get in touch" />
        <Form />
        <Heading title="Contact us" />
        <Footer />
        <Bot
          icon={<WhatsAppIcon />}
          href={"https://wa.me/8955288660"}
          color="#25d366"
          position="30px"
        />
        <Bot
          icon={<LinkedIn />}
          href={"https://www.linkedin.com/in/guru-internationals-836b1a258/"}
          position="100px"
          color="#0A66C2"
        />
      </Box>
    </div>
  );
};

export default Index;
