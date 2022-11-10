import React from "react";
import { AiOutlineLine } from "react-icons/ai";
const ServiceXtraImages = ({ name, data }) => {
  const { index } = data;
  return (
    <section className="container mx-auto px-5 md:px-12 xl:px-32">
      <div className="flex flex-col xl:flex-row mt-24 py-12 items-start justify-center gap-4">
        <div className="flex text-5xl  w-2/5">
          <AiOutlineLine size={80} className="mt-[-13px] block " />

          <h2 className="font-semibold">Service Details</h2>
        </div>
        <div className="xl:w-3/5 xl:pr-64 py-2">
          <p>{data["service-description"]}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row py-12  items-start justify-center gap-4">
        {data["additional-pictures"].map((pic, indx) => {
          return (
            <img
              key={indx}
              src={
                !isNaN(index)
                  ? `https://backend-fahimfaisalkhan.vercel.app/images/${name}/${pic}.jpg`
                  : pic
              }
              alt=""
              className={`${
                (index + 1) % 2 === 0 ? "lg:w-3/5" : "lg:w-2/5"
              } rounded-lg`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServiceXtraImages;
