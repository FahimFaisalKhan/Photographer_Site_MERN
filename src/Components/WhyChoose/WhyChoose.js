import React from "react";
import WhyChooseCard from "./WhyChooseCard/WhyChooseCard";

const WhyChoose = () => {
  const features = [
    {
      name: "Donec Porttitor Posuere",
      img: "https://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00015-380x507.jpg",
      description:
        "Striking pewter studded epaulettes silver. Engraved attention to detail elegant.",
    },
    {
      name: "Curabitur Gravida Dictum",
      img: "https://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00014-580x870.jpg",
      description:
        "Striking pewter studded epaulettes silver. Engraved attention to detail elegant.",
    },
    {
      name: "Aenean Tincidunt Nisl",
      img: "https://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00013-580x725.jpg",
      description:
        "Striking pewter studded epaulettes silver. Engraved attention to detail elegant.",
    },
    {
      name: "Vestibulum Facilisis Elit",
      img: "https://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00012-580x387.jpg",
      description:
        "Striking pewter studded epaulettes silver. Engraved attention to detail elegant.",
    },
  ];

  const features2 = [
    {
      name: "Sed Quis Rutrum Ligula",
      img: " https://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00011-580x387.jpg",
      description:
        "Striking pewter studded epaulettes silver. Engraved attention to detail elegant.",
    },
    {
      name: "Brutalist Silence",
      img: "https://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00002-580x878.jpg",
      description:
        "Striking pewter studded epaulettes silver. Engraved attention to detail elegant.",
    },
    {
      name: "Cras Eget Lectus Maximus",
      img: "https://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00010-580x347.jpg",
      description:
        "Striking pewter studded epaulettes silver. Engraved attention to detail elegant.",
    },
  ];
  const features3 = [
    {
      name: "Less, but Greener",
      img: "https://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00003-580x870.jpg",
      description:
        "Striking pewter studded epaulettes silver. Engraved attention to detail elegant.",
    },
    {
      name: "Nam Condimentum Ligula",
      img: "https://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00009-580x387.jpg",
      description:
        "Striking pewter studded epaulettes silver. Engraved attention to detail elegant.",
    },
    {
      name: "Shapes of bokeh",
      img: "https://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00008-580x387.jpg",
      description:
        "Striking pewter studded epaulettes silver. Engraved attention to detail elegant.",
    },
  ];
  return (
    <div className="container mx-auto my-44">
      <h1 className="text-[3rem] font-semibold mt-4 ">
        Why should you choose me?
      </h1>
      <h3 className="text-3xl w-[85%] font-semibold leading-normal text-gray-700 my-6">
        Exceptional imagery - that's what Fahim's Captur all about. I believe
        that clean, professional, and vibrant photography can elevate your brand
        and bring your story to life.
      </h3>
      <div className="flex flex-col gap-y-4 mt-16">
        <div className="grid grid-cols-5 gap-x-4">
          {features.map((f, i) => (
            <WhyChooseCard set={"first"} feature={f} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-6 gap-x-4">
          {features2.map((f, i) => (
            <WhyChooseCard set={"second"} feature={f} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-x-4">
          {features3.map((f, i) => (
            <WhyChooseCard set={"third"} feature={f} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
