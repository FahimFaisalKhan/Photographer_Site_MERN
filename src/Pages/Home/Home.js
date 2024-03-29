import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import PopServices from "../../Components/PopServices/PopServices";
import KUTE from "kute.js";
import photographer from "../../Static/Images/photographer.png";
import { FaSquareFull } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./Home.css";
import { Avatar, Stats } from "react-daisyui";
import { useTitle } from "../../hooks/useTitle";

import Spinner from "../../Components/Spinner/Spinner";
import Checkout from "../Checkout/Checkout";
import WhyChoose from "../../Components/WhyChoose/WhyChoose";
import Philosophy from "../../Components/Philosophy/Philosophy";
import Counter from "../../Components/Counter/Counter";
import Faq from "../../Components/Faq/Faq";

//This is thre Landing page ,, where user will first land when visiting this website .
const Home = () => {
  useTitle("FC - Home");

  const { response } = useLoaderData();
  const [dataLoading, setDataLoading] = useState(true);
  const [ser, setSer] = useState(response);
  const [rightAnimation, setRightAnimation] = useState(false);
  const [leftAnimation, setLeftAnimation] = useState(false);

  const [demoRevs, setDemoRevs] = useState([]);

  const handleRightCrsl = () => {
    setRightAnimation(true);
    setTimeout(() => {
      setSer([ser[2], ser[0], ser[1]]);
      setRightAnimation(false);
    }, 200);
  };
  const handleLeftCrsl = () => {
    setLeftAnimation(true);
    setTimeout(() => {
      setSer([ser[1], ser[2], ser[0]]);
      setLeftAnimation(false);
    }, 200);
  };

  useEffect(() => {
    // fetch("https://backend-fahimfaisalkhan.vercel.app/first3reviews")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setDemoRevs(data);
    // setDataLoading(false);
    // });
  }, []);
  useEffect(() => {
    response.length && setDataLoading(false);
  }, [response]);

  useEffect(() => {
    if (!dataLoading) {
      const tween = KUTE.fromTo(
        "#shape-1-a",
        { path: "#shape-1-a" },
        { path: "#shape-1-b" },
        { repeat: 10000, duration: 3000, yoyo: true }
      );
      tween.start();
    }
  }, [dataLoading]);
  if (dataLoading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className="flex flex-col container mx-auto xl:flex-row">
          <div className=" xl:w-[20%] flex flex-col gap-2 justify-center order-2 xl:order-none md:mt-32 lf:mt-auto px-5 md:px-12">
            <div className="flex">
              <FaSquareFull size={25} className="text-base-content block " />
              <FaSquareFull size={25} className="text-base-300 block ml-2" />
            </div>
            <p className="font-semibold">
              "When a moment in front of me appears to be particularly special,
              whether it be by beauty or experience, I capture it. I usually
              find a reason to justify taking that photo - symmetry, or color or
              contrast - and it's my hope that my photography sheds light onto
              what I see and do on a daily basis."
            </p>
            {/* <Avatar.Group className="-space-x-6 mt-12">
              {demoRevs.map((r) => (
                <Avatar shape="circle" src={r.image} size="sm" />
              ))}

              <Avatar
                shape="circle"
                className="bg-base-content cursor-pointer border-base-content scale-[.92] active:scale-[.8] transition-all"
                size="sm"
              >
                <BsArrowUpRight className="p-3 text-base-300" />
              </Avatar>
            </Avatar.Group> */}
            <p className="text-sm font-semibold">400+ Customer reviews</p>
          </div>
          <div className="relative grow order-1 xl:order-none">
            <h1 className="text-center font-bold text-6xl mt-8">
              Fahim's Capture
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="600"
              version="1.1"
              viewBox="0 0 900 600"
            >
              <g>
                <path
                  id="shape-1-a"
                  d="M119.8 -77.5C153 -11.7 176.1 51.7 154.4 102.2C132.8 152.7 66.4 190.3 -10.1 196.2C-86.6 202 -173.2 176 -210.3 116.6C-247.4 57.2 -235 -35.7 -191.7 -107.3C-148.4 -179 -74.2 -229.5 -15.4 -220.6C43.3 -211.7 86.6 -143.3 119.8 -77.5"
                  // fill="#BB004B"
                  transform="translate(450.838 400.246)"
                ></path>
              </g>
              <g style={{ visibility: "hidden" }}>
                <path
                  id="shape-1-b"
                  d="M110.1 -86.4C133.7 -22.8 137.4 29.3 115.8 81.7C94.1 134 47.1 186.5 -6.2 190.1C-59.5 193.7 -118.9 148.3 -145.2 93.3C-171.5 38.3 -164.5 -26.3 -134.8 -93.5C-105.1 -160.7 -52.5 -230.3 -4.6 -227.7C43.3 -225 86.6 -150 110.1 -86.4"
                  // fill="#BB004B"
                  transform="translate(450.385 280.613)"
                ></path>
              </g>
            </svg>
            <img
              src={photographer}
              alt=""
              className="absolute  top-[54%] sm:top-[54.5%] md:top-[60%] lg:top-[49.5%] xl:top-[54.45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] sm:w-[44%] rounded-full"
            />
          </div>
          <div className="xl:w-[20%] flex flex-col justify-center gap-2 order-3 xl:order-none px-5 md:px-12">
            <h1 className="text-2xl font-bold">Latest Projects</h1>
            <div>
              <div className="flex gap-3 w-full overflow-hidden">
                {ser.map((s) => {
                  return (
                    <img
                      src={`https://backend-fahimfaisalkhan.vercel.app/images/${s.picture}.jpg`}
                      alt=""
                      className={`w-32 ${
                        rightAnimation
                          ? "img-right-animation"
                          : leftAnimation
                          ? "img-left-animation"
                          : ""
                      } rounded-3xl`}
                    />
                  );
                })}
              </div>
              <div className="flex gap-2">
                <AiOutlineArrowLeft
                  onClick={handleLeftCrsl}
                  size={20}
                  className="mt-3 cursor-pointer "
                />
                <AiOutlineArrowRight
                  onClick={handleRightCrsl}
                  size={20}
                  className="mt-3 cursor-pointer"
                />
              </div>
            </div>

            <Stats className="stats-vertical   mt-12  ">
              <Stats.Stat className="pl-0">
                <Stats.Stat.Item variant="value">500+</Stats.Stat.Item>
                <Stats.Stat.Item variant="title" className="text-sm">
                  Happy Clients
                </Stats.Stat.Item>
              </Stats.Stat>

              <Stats.Stat className="pl-0   ">
                <Stats.Stat.Item variant="value">10+</Stats.Stat.Item>
                <Stats.Stat.Item variant="title" className="text-sm">
                  Awards recived
                </Stats.Stat.Item>
              </Stats.Stat>
            </Stats>
          </div>
        </div>
        <Banner></Banner>
        <PopServices services={response}></PopServices>
        <WhyChoose />
        <Philosophy />
        <Counter />
        <Faq />
      </div>
    );
  }
};

export default Home;
