import React from "react";
import { Button, Textarea } from "react-daisyui";

const ServiceReviews = () => {
  const handleAddReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    console.log(review);
  };
  return (
    <div>
      <section className="container mx-auto px-10 py-12 bg-sky-300/30 rounded-md skew-x-[-12deg] ">
        <div className="flex items-center gap-4 skew-x-12">
          <img
            className="w-32 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
          <div className="flex flex-col ">
            <h2>Fahim</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              soluta fuga temporibus rem. Nisi, nihil aut! Deleniti aut dolor
              minima dolore ut harum voluptatibus, accusantium, fugiat est autem
              cupiditate nesciunt quibusdam dolorem, sed tempora quam?
            </p>
          </div>
        </div>
      </section>
      <section className="my-24">
        <form onSubmit={handleAddReview} className="flex flex-col" action="">
          <label className="text-xl mb-4 ml-5" for="textarea">
            <i>Add a Review</i>
          </label>

          <Textarea className="w-full min-h-[15rem]" name="review" />

          <Button className="w-1/12 self-end mt-8" type="submit">
            Post
          </Button>
        </form>
      </section>
    </div>
  );
};

export default ServiceReviews;
