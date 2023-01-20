import { Card, Link } from "@mui/material";
import logo from "../../../assets/images/logo.jpg";

const NavBar = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,   
      }}
    >
      <img src={logo} width="15%" style={{ cursor: "pointer" }} className="logo" />
      <div>
        <Link underline="hover" color="#444">
          <div className="gst">
            GSTIN : 08CODPG1006F1ZL
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default NavBar;
