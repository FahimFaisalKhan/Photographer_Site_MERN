import React, { useContext, useState } from "react";
import { Hero, Stats } from "react-daisyui";
import { useLoaderData } from "react-router-dom";
import ServiceXtraImages from "../../Components/ServiceXtraImages/ServiceXtraImages";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import RatingStar from "../../Components/Rating/RatingStar";
import ServiceReviews from "../../Components/ServiceReviews/ServiceReviews";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";
const ServiceDetails = () => {
  const { loading } = useContext(MyAuthContext);
  console.log(loading);
  const [allReviews, setAllReviews] = useState([]);
  const data = useLoaderData();
  const { name, picture, description, price, reating, _id, index } = data;
  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <Hero
        style={{
          backgroundImage: !isNaN(index)
            ? `url(http://localhost:5000/images/${picture}.jpg)`
            : `url(${picture})`,
        }}
      >
        <Hero.Overlay className="min-h-[80vh]" />
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1 className="text-7xl text-base-100 font-bold mt-[-5rem] ">
              {name}
            </h1>
          </div>
        </Hero.Content>
      </Hero>
      <ServiceXtraImages name={name} data={data} />
      <section className="container mx-auto px-32 my-24">
        <div className="flex text-3xl font-semibold mb-5 items-center gap-2">
          <VscDebugBreakpointLogUnverified color="rgb(147 51 234)" />
          <h1>What is {name} Photography?</h1>
        </div>

        <p className="border-l-2 border-purple-600 pl-4 ml-3">{description}</p>
      </section>
      <section className="container mx-auto px-32 my-24">
        <Stats className="stats-vertical lg:stats-horizontal shadow container mx-auto ">
          <Stats.Stat className="gap-2">
            <Stats.Stat.Item variant="title">Price</Stats.Stat.Item>
            <Stats.Stat.Item variant="value">${price}</Stats.Stat.Item>
          </Stats.Stat>

          <Stats.Stat className="gap-2">
            <Stats.Stat.Item variant="title">Rating</Stats.Stat.Item>
            <Stats.Stat.Item variant="value">{reating}/5</Stats.Stat.Item>
            <Stats.Stat.Item variant="value">
              <RatingStar rating={reating} />
            </Stats.Stat.Item>
          </Stats.Stat>

          <Stats.Stat className="gap-2">
            <Stats.Stat.Item variant="title">Total Reviews</Stats.Stat.Item>
            <Stats.Stat.Item variant="value">
              {allReviews.length}
            </Stats.Stat.Item>
          </Stats.Stat>
        </Stats>
      </section>
      <section className="mx-52 my-32">
        <ServiceReviews
          allReviews={allReviews}
          setAllReviews={setAllReviews}
          serviceId={_id}
          serviceName={name}
        />
      </section>
    </div>
  );
};

export default ServiceDetails;
