import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Textarea } from "react-daisyui";
import { Link, Navigate, useLocation } from "react-router-dom";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";

const ServiceReviews = ({
  serviceId,
  serviceName,
  allReviews,
  setAllReviews,
}) => {
  const { user } = useContext(MyAuthContext);

  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://backend-fahimfaisalkhan.vercel.app/getReviews?serviceId=${serviceId}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("reviewSiteToken"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, [serviceId, setAllReviews]);
  const handleAddReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const { displayName, email, photoURL } = user;
    const doc = {
      name: displayName,
      email: email,
      review: review,
      serviceId: serviceId,
      serviceName: serviceName,
      image: photoURL,
    };
    fetch("https://backend-fahimfaisalkhan.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("reviewSiteToken"),
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          const newAllReviews = [doc, ...allReviews];

          setAllReviews(newAllReviews);
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col gap-12">
        {allReviews.map((r) => {
          return (
            <section className="container mx-auto px-10 py-12 bg-sky-300/30 rounded-md xl:skew-x-[-12deg] ">
              <div className="flex flex-col md:flex-row  items-center gap-4 xl:skew-x-12">
                <Avatar size={"lg"} shape="circle" src={r.image} />

                <div className="flex flex-col   h-full self-start mt-3">
                  <h2 className="mb-2 text-lg font-semibold underline decoration-double">
                    {r.name}
                  </h2>
                  <p>{r.review}</p>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {user ? (
        <section className="my-24  ">
          <form
            onSubmit={handleAddReview}
            className="flex flex-col px-5"
            action=""
          >
            <label className="text-xl mb-4 ml-5" htmlFor="review">
              <i>Add a Review</i>
            </label>

            <Textarea className="w-full xl:min-h-[15rem]" name="review" />

            <Button className="2xl:w-1/12 self-end mt-8" type="submit">
              Post
            </Button>
          </form>
        </section>
      ) : (
        <p>
          <Link
            to={"/signin"}
            state={{ form: location }}
            replace={true}
            className="block"
          >
            <h2 className="text-lg mt-5 text-primary underline cursor-pointer active:translate-y-1 transition-all">
              Please login to add a review
            </h2>
          </Link>
        </p>
      )}
    </div>
  );
};

export default ServiceReviews;
