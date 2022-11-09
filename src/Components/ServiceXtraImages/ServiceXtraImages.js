import React from "react";
import { AiOutlineLine } from "react-icons/ai";
const ServiceXtraImages = ({ name, data }) => {
  return (
    <section className="container mx-auto px-32">
      <div className="flex mt-24 py-12 items-start justify-center gap-4">
        <div className="flex text-5xl  w-2/5">
          <AiOutlineLine size={80} className="mt-[-13px] block " />

          <h2 className="font-semibold">Service Details</h2>
        </div>
        <div className="w-3/5 pr-64 py-2">
          <p>{data["service-description"]}</p>
        </div>
      </div>
      <div className="flex py-12  items-start justify-center gap-4">
        {data["additional-pictures"].map((pic, index) => {
          return (
            <img
              key={index}
              src={`http://localhost:5000/images/${name}/${pic}.jpg`}
              alt=""
              className={`${
                (index + 1) % 2 === 0 ? "w-3/5" : "w-2/5"
              } rounded-lg`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServiceXtraImages;
