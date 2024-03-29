import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Pagination, Select, Tooltip } from "react-daisyui";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import RatingStar from "../../Components/Rating/RatingStar";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useTitle } from "../../hooks/useTitle";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";
import Spinner from "../../Components/Spinner/Spinner";

const Services = () => {
  useTitle("FC - Services");

  const [response, setResponse] = useState([]);
  const [count, setCount] = useState(0);
  const [serviceLoading, setServiceLoading] = useState(true);

  const [perPageItem, setPerPageItem] = useState(5);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const { state } = useLocation();

  useEffect(() => {
    setNumberOfPages(Math.ceil(count / perPageItem));

    (async () => {
      try {
        let res;

        if (state && state?.search !== "") {
          res = await fetch(
            `https://backend-fahimfaisalkhan.vercel.app/services?perPageItem=${perPageItem}&currentPage=${currentPage}&search=${
              state?.search[0]?.toUpperCase() + state?.search?.slice(1)
            }`
          );
        } else {
          res = await fetch(
            `https://backend-fahimfaisalkhan.vercel.app/services?perPageItem=${perPageItem}&currentPage=${currentPage}
              }`
          );
        }

        const { response, count } = await res.json();
        console.log(response, count);
        setCount(count);
        setResponse(response);
        setServiceLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [count, perPageItem, currentPage, state?.search, state]);

  const handlePageNumber = (event) => {
    const itemCount = +event.target.value;
    setPerPageItem(itemCount);
    setCurrentPage(0);
  };
  if (serviceLoading) {
    return <Spinner />;
  }
  return (
    <section className="container mx-auto">
      <header>
        <h3 className="text-2xl 2xl:text-3xl font-semibold w-full xl:w-6/12 leading-normal mt-20 px-3  xl:px-0">
          My interest in photography is not to capture an image I see or even
          have in my mind, but to explore the potential of moments I can only
          begin to imagine. Check out my services and feel free to explore.
        </h3>
      </header>

      <h3 className="mt-24 mb-2 font-medium px-3 xl:px-0">
        Select number of services to show in one page:
      </h3>
      <select
        onChange={handlePageNumber}
        className="select select-bordered select-xs xl:w-full max-w-xs mx-3 xl:mx-0 mb-5"
      >
        <option selected value={5}>
          5
        </option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <div className="flex flex-col gap-12 ">
        <PhotoProvider>
          {response.map((ser) => {
            return (
              <div
                side="lg"
                bordered={false}
                className="card shadow-inner hover:border-4 rounded-md transition-all xl:max-h-[80vh] mx-3 xl:mx-0 xl:card-side "
                key={ser._id}
              >
                <PhotoView
                  src={
                    !isNaN(ser.index)
                      ? `https://backend-fahimfaisalkhan.vercel.app/images/${ser.picture}.jpg`
                      : ser.picture
                  }
                  key={ser._id}
                >
                  <Card.Image
                    src={
                      !isNaN(ser.index)
                        ? `https://backend-fahimfaisalkhan.vercel.app/images/${ser.picture}.jpg`
                        : ser.picture
                    }
                    alt="Shoes"
                    className="xl:h-full xl:min-w-[60rem] cursor-pointer max-h-[25rem] 2xl:max-h-[none]"
                  />
                </PhotoView>

                <Card.Body className="px-3 xl:px-6">
                  <Card.Title tag="h2">{ser.name}</Card.Title>
                  <p className="text-justify xl:w-[40rem] xl:border-r-2 pr-3">
                    {ser.description.split(" ").length >= 100
                      ? ser.description.split(" ").splice(0, 100).join(" ") +
                        "....."
                      : ser.description}
                  </p>
                  <Card.Actions className="justify-start">
                    <Link to={`/services/${ser._id}`}>
                      <Button className="capitalize" color="info">
                        View Details
                      </Button>
                    </Link>
                  </Card.Actions>
                </Card.Body>
                <Card.Body className="px-3 xl:px-6 2xl:w-[30%]">
                  <div className="px-2 flex flex-col items-center">
                    <p className="font-medium mb-3 text-center">
                      Rating: {ser.reating}
                    </p>
                    <RatingStar rating={ser.reating} />
                  </div>

                  <p className="py-6 px-2  text-center inline-flex flex-col">
                    <span className="font-semibold text-primary text-xl">
                      Price per photo: ${ser.price}
                    </span>
                    <i className="">
                      Price may vary depending on product/location. Please get
                      in touch to discuss further.
                    </i>
                  </p>
                  <Link to={`/quantity/${ser._id}`} className="block w-full">
                    <Button
                      fullWidth={true}
                      className="capitalize"
                      color="primary"
                    >
                      Buy
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            );
          })}
        </PhotoProvider>
      </div>
      {numberOfPages > 0 && (
        <Pagination className="flex justify-center my-10">
          <Button
            disabled={currentPage === 0 && true}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <GrPrevious />
          </Button>

          {[...Array(numberOfPages).keys()].map((item) => {
            return (
              <Button
                onClick={() => setCurrentPage(item)}
                className={` ${
                  currentPage === item && "bg-info "
                }  focus:bg-info border-none`}
              >
                {item + 1}
              </Button>
            );
          })}
          <Button
            disabled={currentPage === numberOfPages - 1 && true}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <GrNext />
          </Button>
        </Pagination>
      )}
    </section>
  );
};

export default Services;
