import React from "react";
import ContactValuePair from "./ContactValuePair";

const Footer = () => {
  return (
    <div>
      <ContactValuePair title="Email : " value="guruinternationals0207@gmail.com" href="mailto:" />
      <ContactValuePair title="Phone : " value="8955288660" href="tel:" />
    </div>
  );
};

export default Footer;
