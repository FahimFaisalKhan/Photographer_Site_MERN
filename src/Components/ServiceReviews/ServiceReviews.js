import React, { useContext, useEffect, useState } from "react";
import { Button, Textarea } from "react-daisyui";
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
      `http://localhost:5000/reviews?serviceId=${serviceId}&email=${user?.email}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("reviewSiteToken"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, [serviceId, setAllReviews, user?.email]);
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
    fetch("http://localhost:5000/reviews", {
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
        {allReviews.length > 0 &&
          allReviews.map((r) => {
            return (
              <section className="container mx-auto px-10 py-12 bg-sky-300/30 rounded-md skew-x-[-12deg] ">
                <div className="flex items-center gap-4 skew-x-12">
                  <img
                    className="w-32 h-32 rounded-full"
                    src={r.image}
                    alt=""
                  />
                  <div className="flex flex-col h-full self-start mt-3">
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
        <section className="my-24">
          <form onSubmit={handleAddReview} className="flex flex-col" action="">
            <label className="text-xl mb-4 ml-5" htmlFor="review">
              <i>Add a Review</i>
            </label>

            <Textarea className="w-full min-h-[15rem]" name="review" />

            <Button className="w-1/12 self-end mt-8" type="submit">
              Post
            </Button>
          </form>
        </section>
      ) : (
        <Link to={"/signin"} state={{ form: location }} replace={true}>
          <h2 className="text-lg mt-5 text-primary underline cursor-pointer active:translate-y-1 transition-all">
            Please login to add a review
          </h2>
        </Link>
      )}
    </div>
  );
};

export default ServiceReviews;
