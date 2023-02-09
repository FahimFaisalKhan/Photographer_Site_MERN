import React from "react";

const WhyChooseCard = ({ feature, set, index }) => {
  const { name, img, description } = feature;

  const span =
    set === "first" && index === 3
      ? "col-span-2"
      : set === "second" && index === 0
      ? "col-span-2"
      : set === "second" && index === 2
      ? "col-span-3"
      : set === "third" && (index === 1 || index === 2)
      ? "col-span-2"
      : "";
  return (
    <div
      className={`${span}  flex flex-col items-start rounded-sm bg-slate-100`}
    >
      <div className="w-full h-[20.5rem] overflow-hidden rounded-sm  bg-black">
        <img
          className="block min-w-[100%]  rounded-t-sm hover:opacity-[.75] transition-opacity"
          src={img}
          alt=""
        />
      </div>

      <h4 className="font-semibold text-lg mt-3 px-4">
        Donec Porttitor Posuere
      </h4>
      <p className="font-semibold text-gray-600 mt-0.5 px-4 pb-4">
        Striking pewter studded epaulettes silver. Engraved attention to detail
        elegant.
      </p>
    </div>
  );
};

export default WhyChooseCard;
