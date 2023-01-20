import { Typography } from "@mui/material";
import React from "react";

type myProps = {
  title: string;
};
const Heading: React.FC<myProps> = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       <div
        style={{
          backgroundColor: "orange",
          padding: 4,
          width: "5px",
          height: "5px",
          borderRadius: "50%",
        }}
      ></div>
      <Typography
        sx={{
          margin: 4,
          fontSize: "25px",
          fontFamily: "Libre Baskerville, serif",
        }}
      >
        {title}
      </Typography>
      <div
        style={{
          backgroundColor: "orange",
          padding: 4,
          width: "5px",
          height: "5px",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default Heading;
