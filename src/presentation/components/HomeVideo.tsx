import { Card, Typography } from "@mui/material";
import React from "react";
import homeVideo from "../../assets/videos/homeVideo.mp4";

const HomeVideo = () => {
  return (
    <Card elevation={0} sx={{ margin: 1, height: 500, position: "relative" }}>
      <video autoPlay loop muted style={{ position: "absolute", zIndex: 1 }}>
        <source src={homeVideo} type="video/mp4" />
      </video>
      <Typography
        sx={{
          position: "absolute",
          zIndex: 2,
          left: "50%",
          top: "40%",
          transform: "translate(-50%, -40%)",
          textTransform: "uppercase",
          letterSpacing: 4,
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "Raleway, sans-serif",
          backgroundColor: "#fff",
          width: "100%",
          padding: 2,
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        Guru Internationals
        <Typography
          sx={{
            fontSize: 14,
            marginTop: 2,
            textTransform: "none",
            fontFamily: "Libre Baskerville, serif",
            color: "#777",
          }}
        >
          You name it, we have it
        </Typography>
      </Typography>
    </Card>
  );
};

export default HomeVideo;
