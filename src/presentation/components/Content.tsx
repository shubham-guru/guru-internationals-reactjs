import React from "react";

type myProps = {
  content: string;
};
const Content: React.FC<myProps> = ({ content }) => {
  return (
    <div
      style={{
        margin: "0px 30px 10px 30px",
        color: "#555",
        fontFamily: "Raleway, sans-serif",
        letterSpacing: 1,
        lineHeight: 1.5,
      }}
    >
      {content}
    </div>
  );
};

export default Content;
