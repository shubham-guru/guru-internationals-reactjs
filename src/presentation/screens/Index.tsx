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
import product_position from '../../assets/icons/product_position.png';
import digital_presence from '../../assets/icons/digital_presence.png';
import loyalty_program from '../../assets/icons/loyalty_program.png';
import lowCost_marketing from '../../assets/icons/lowCost_marketing.png';
import sustainable_business from '../../assets/icons/sustainable_business.png';

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
        <Typography
          sx={{
            color: "#777",
            fontWeight: "bold",
            fontFamily: "Libre Baskerville, serif",
            marginTop: 8,
            marginLeft: 3,
            fontSize: 20,
          }}
        >
          The services that our buyers will get from us
        </Typography>

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
