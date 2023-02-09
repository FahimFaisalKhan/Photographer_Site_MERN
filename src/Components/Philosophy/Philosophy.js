import React from "react";

const Philosophy = () => {
  return (
    <div
      className="hero min-h-[70vh] mb-32"
      style={{
        backgroundImage: `url("http://astiatheme.com/wide-angle/wp-content/uploads/sites/19/demo-image-00039.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content text-center text-neutral-content w-full justify-start">
        <div className="w-full">
          <h1 className="text-start mb-5 text-2xl opacity-90">My philosophy</h1>
          <p className="mb-5 text-start text-3xl font-bold leading-normal opacity-60">
            Doing something truly different. I believe that taking photos is
            more about people than the camera and the technology. And I believe
            that clean, professional, and vibrant photography can elevate your
            brand and bring your story to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
