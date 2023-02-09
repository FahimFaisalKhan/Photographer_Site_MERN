import React, { useContext, useState } from "react";
import { Button, Hero, Stats } from "react-daisyui";
import { Link, useLoaderData } from "react-router-dom";
import ServiceXtraImages from "../../Components/ServiceXtraImages/ServiceXtraImages";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import RatingStar from "../../Components/Rating/RatingStar";
import ServiceReviews from "../../Components/ServiceReviews/ServiceReviews";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";
import { useTitle } from "../../hooks/useTitle";
import { AiOutlineLine } from "react-icons/ai";
const ServiceDetails = () => {
  useTitle("FC - Service Detail");
  const { loading } = useContext(MyAuthContext);

  const [allReviews, setAllReviews] = useState([]);
  const data = useLoaderData();
  const { name, picture, description, price, reating, _id, index } = data;
  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="">
      <Hero
        style={{
          backgroundImage: !isNaN(index)
            ? `url(https://backend-fahimfaisalkhan.vercel.app/images/${picture}.jpg)`
            : `url(${picture})`,
        }}
      >
        <Hero.Overlay className="min-h-[80vh]" />
        <Hero.Content className="text-center text-6xl md:text-7xl text-base-100 font-bold mt-[-5rem] max-w-[100vw] ">
          {name}
        </Hero.Content>
      </Hero>
      <ServiceXtraImages name={name} data={data} />
      <section className="container mx-auto md:px-12 xl:px-32 my-24">
        <div className="flex text-3xl font-semibold mb-5 items-center gap-2">
          <VscDebugBreakpointLogUnverified color="rgb(147 51 234)" />
          <h1>What is {name} ?</h1>
        </div>

        <p className="border-l-2 border-purple-600 pl-4 ml-3">{description}</p>
      </section>
      <section className="container mx-auto xl:px-32 md:px-12 my-24">
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
      <section className="container mx-auto   flex justify-center">
        <Link to={`/quantity/${_id}`} className="w-full  xl:max-w-[85%]">
          <Button className="" fullWidth={true} color="primary">
            Buy
          </Button>
        </Link>
      </section>
      <section className="flex text-5xl  container xl:mx-52  mb-5 mt-32 px-5 md:px-12 xl:px-20">
        <AiOutlineLine size={80} className="mt-[-13px] md:block hidden " />

        <h2 className="font-semibold">Reviews</h2>
      </section>
      <section className="xl:mx-60 mb-32">
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
