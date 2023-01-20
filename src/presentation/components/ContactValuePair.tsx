import { Link, Typography } from "@mui/material";
import React from "react";

type myProps = {
  title: string;
  value: string;
  href?: string;
};
const ContactValuePair: React.FC<myProps> = ({ title, value, href }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
      }}
    >
      <Typography sx={{ color: "#777" }}>{title}</Typography>
      <Typography className="contact">
        <Link href={href + value} sx={{color: '#111'}} underline="hover">
            {value}
        </Link>
      </Typography>
    </div>
  );
};

export default ContactValuePair;
