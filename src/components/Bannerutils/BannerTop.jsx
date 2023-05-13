import React from "react";
import bannerimg from "../../assets/images/huludisney.png";
import Container from "../CommonLayout/Container";
import Button from "../CommonLayout/Button";
const BannerTop = () => {
  return (
    <Container className=" text-center flex items-center justify-center container  ">
      <div className="py-24">
        <h2 className="  text-primary_color pb-3 font-fontFamily font-bold text-sm">
          DISNEY BUNDLE DUO BASIC
        </h2>
        <img className="inline-block" src={bannerimg} alt={bannerimg} />
        <h1
          className="text-primary_Text_color  font-semibold font-fontFamily mt-3   text-2xl
        "
        >
          Get Hulu & Disney+, both with ads, for $9.99/month.
        </h1>
        <Button
          className="bg-primary_color w-full py-3 mt-7 rounded-md font-fontFamily font-semibold transition delay-100 duration-150 ease-linear hover:bg-hover_color"
          buttonContent="GET THEM BOTH"
        />
        <div className="text-primary_Text_color py-4">
          <a
            href="#"
            className="block underline text-sm font-fontFamily font-normal"
          >
            Terms apply
          </a>
          <a
            href="#"
            className="block underline py-4 font-fontFamily font-normal text-base"
          >
            Sign up for Hulu only
          </a>
        </div>
      </div>
    </Container>
  );
};

export default BannerTop;
