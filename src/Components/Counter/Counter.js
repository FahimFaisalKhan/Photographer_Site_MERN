import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  return (
    <div className="container mx-auto my-44 ">
      <h1 className="text-4xl font-semibold my-6">My Achivements</h1>
      <h3 className="text-2xl font-semibold mb-16 text-gray-700">
        I believe that taking photos is more about people than the camera and
        the technology. Our photographers bring a creative eye and attention to
        detail to every shoot.
      </h3>
      <div className="flex gap-x-10 justify-between">
        <div className=" w-[20rem] border-2 border-slate-400 rounded-lg py-4">
          <div className="flex flex-col px-2">
            <div className="flex items-end justify-between px-4 mb-4 ">
              <h1 className="text-7xl mr-8">
                <CountUp start={0} end={27}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <h5 className="text-xl">Team members</h5>
            </div>
            <p className="px-4">
              Me and my team of photographers comes equipped with a passion for
              photography .
            </p>
          </div>
        </div>
        <div className=" w-[20rem] border-2 border-slate-400 rounded-lg py-4">
          <div className="flex flex-col px-2">
            <div className="flex items-end justify-between px-4 mb-4 ">
              <h1 className="text-7xl mr-8">
                <CountUp start={0} end={300}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <h5 className="text-xl">Shoots</h5>
            </div>
            <p className="px-4">
              I am perfect for photographing family, branding, newborn and
              other.
            </p>
          </div>
        </div>
        <div className=" w-[20rem] border-2 border-slate-400 rounded-lg py-4">
          <div className="flex flex-col px-2">
            <div className="flex items-end justify-between px-4 mb-4 ">
              <h1 className="text-7xl mr-6 flex">
                <CountUp start={0} end={40}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>{" "}
                <p>+</p>
              </h1>
              <h5 className="text-xl">Headshoots</h5>
            </div>
            <p className="px-4">
              I capture expert portraits for actors' portfolios or corporate
              websites.
            </p>
          </div>
        </div>
        <div className=" w-[20rem] border-2 border-slate-400 rounded-lg py-4">
          <div className="flex flex-col px-2">
            <div className="flex items-end justify-between px-4 mb-4 ">
              <h1 className="text-7xl mr-8">
                <CountUp start={0} end={5}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>{" "}
              </h1>
              <h5 className="text-xl">Awards</h5>
            </div>
            <p className="px-4">
              I have only the best of the best. Each photographer of my team is
              a highly-skilled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
