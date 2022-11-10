import React from "react";
import { Button } from "react-daisyui";
import camera from "../../Static/Images/banner-cam.jpg";
import girl from "../../Static/Images/banner-girl.webp";
import guy from "../../Static/Images/guy.jpg";
const Banner = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:max-h-screen mt-32 container mx-auto ">
      <div className="flex flex-col justify-center xl:w-5/12 gap-5 p-8">
        <h1 className="text-6xl font-bold">Theory of creativity</h1>
        <h4 className="text-justify">
          Creativity is the main essence of my every project. To me conditions
          for creativity are to be puzzled; to concentrate; to accept conflict
          and tension; to be born everyday; to feel a sense of self. Off course
          creativity is not the only ingredient I use to bring life to
          photographs. Check out my equipments and step by tep process.
        </h4>
        <Button className="sm:w-5/12 sm:self-center  lg:self-start mt-12 capitalize text-base rounded-3xl">
          Equipments
        </Button>
      </div>
      <div className="flex flex-col w-11/12 items-center justify-center mt-12 lg:mt-64 gap-2 pl-5 xl:pl-56 ">
        <div>
          <img
            src={camera}
            alt=""
            className="w-[10rem] sm:w-[22rem] 2xl:w-[32rem]  "
          />
        </div>

        <div className="flex gap-2">
          <img
            src={guy}
            alt=""
            className="w-[6rem] sm:w-[16rem] 2xl:w-[22rem] h-5/6 block "
          />
          <img
            src={girl}
            alt=""
            className="w-[10rem] sm:w-[22rem] 2xl:w-4/6 h-3/6 block "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
