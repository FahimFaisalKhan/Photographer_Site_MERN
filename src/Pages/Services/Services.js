import React, { useEffect, useState } from "react";
import { Button, Card, Pagination, Select, Tooltip } from "react-daisyui";
import { Link, useLoaderData } from "react-router-dom";
import RatingStar from "../../Components/Rating/RatingStar";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { GrNext, GrPrevious } from "react-icons/gr";

const Services = () => {
  console.log("aaa");
  const [response, setResponse] = useState([]);
  const [count, setCount] = useState(0);
  console.log(typeof count);
  const [perPageItem, setPerPageItem] = useState(5);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);
  useEffect(() => {
    setNumberOfPages(Math.ceil(count / perPageItem));
    (async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/services?perPageItem=${perPageItem}&currentPage=${currentPage}`
        );
        const { response, count } = await res.json();
        setCount(count);
        setResponse(response);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [count, perPageItem, currentPage]);

  const handlePageNumber = (event) => {
    const itemCount = +event.target.value;
    setPerPageItem(itemCount);
    setCurrentPage(0);
  };
  return (
    <section className="container mx-auto">
      <header>
        <h3 className="text-4xl font-semibold w-6/12 leading-normal mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          expedita excepturi neque dicta voluptates recusandae asperiores quia
          tempore. Non quaerat tenetur sed voluptatem quas voluptates.
        </h3>
      </header>

      <h3 className="mt-24 mb-2 font-medium">
        Select number of services to show in one page:
      </h3>
      <select
        onChange={handlePageNumber}
        className="select select-bordered select-xs w-full max-w-xs  mb-5"
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
              <Card
                side="lg"
                bordered={false}
                className="shadow-inner  hover:border-4 rounded-md transition-all max-h-[80vh]"
                key={ser._id}
              >
                <PhotoView
                  src={`http://localhost:5000/images/${ser.picture}.jpg`}
                  key={ser._id}
                >
                  <Card.Image
                    src={`http://localhost:5000/images/${ser.picture}.jpg`}
                    alt="Shoes"
                    className="h-full min-w-[60rem] cursor-pointer"
                  />
                </PhotoView>

                <Card.Body>
                  <Card.Title tag="h2">{ser.name}</Card.Title>
                  <p className="text-justify w-[40rem] border-r-2 pr-3">
                    {ser.description.split(" ").length >= 100
                      ? ser.description.split(" ").splice(0, 100).join(" ") +
                        "....."
                      : ser.description}
                  </p>
                  <Card.Actions className="justify-start">
                    <Link to={`/services/${ser._id}`}>
                      <Button className="capitalize" color="primary">
                        View Details
                      </Button>
                    </Link>
                  </Card.Actions>
                </Card.Body>
                <Card.Body>
                  <div className="px-2">
                    <p className="font-medium mb-3 text-center">
                      Rating: {ser.reating}
                    </p>
                    <RatingStar rating={ser.reating} />
                  </div>

                  <p className="py-6 px-2 font-semibold text-primary text-2xl text-center">
                    Price: ${ser.price}
                  </p>
                </Card.Body>
              </Card>
            );
          })}
        </PhotoProvider>
      </div>
      {numberOfPages > 0 && (
        <Pagination className="flex justify-center mt-10">
          <Button
            disabled={currentPage === 0 && true}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <GrPrevious />
          </Button>
          {[...Array(numberOfPages).keys()].map((item) => {
            return (
              <Button onClick={() => setCurrentPage(item)}>{item + 1}</Button>
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
