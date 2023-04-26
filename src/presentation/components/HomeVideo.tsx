import { Card } from "@mui/material";
import logoRound from "../../assets/images/logo_round.png";
import backgroundImg from "../../assets/images/backgroundImg.jpg";

const HomeVideo = () => {
  return (
    <Card elevation={0} sx={{ margin: 1, height: 600, position: "relative" }}>
         <div className="hero">
        <div className="hero__bg">
          <picture>
            <img src={backgroundImg} alt="bgImg" />
          </picture>
        </div>
        <div className="hero__cnt">
          <img src={logoRound} alt="roundLogo" width="40%"/>
          <h4 className="animatedHeading">You name it, we have it</h4>
        </div>
      </div>
    </Card>
  );
};

export default HomeVideo;
