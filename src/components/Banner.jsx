import React from "react";
import heroimg from "../assets/images/hero.jpeg";
// /media/taufik/project/hulu/src/assets/images/hero.jpeg
const banner = () => {
  return (
    <div
      className="h-[800px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <h1>taufik silam</h1>
    </div>
  );
};

export default banner;
