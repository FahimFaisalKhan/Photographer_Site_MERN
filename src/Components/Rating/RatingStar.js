import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const RatingStar = ({ rating }) => {
  return (
    <div className="flex text-warning text-2xl gap-2 ">
      {rating >= 1 ? (
        <BsStarFill></BsStarFill>
      ) : rating >= 0.5 ? (
        <BsStarHalf></BsStarHalf>
      ) : (
        <BsStar></BsStar>
      )}
      {rating >= 2 ? (
        <BsStarFill></BsStarFill>
      ) : rating >= 1.5 ? (
        <BsStarHalf></BsStarHalf>
      ) : (
        <BsStar></BsStar>
      )}
      {rating >= 3 ? (
        <BsStarFill></BsStarFill>
      ) : rating >= 2.5 ? (
        <BsStarHalf></BsStarHalf>
      ) : (
        <BsStar></BsStar>
      )}
      {rating >= 4 ? (
        <BsStarFill></BsStarFill>
      ) : rating >= 3.5 ? (
        <BsStarHalf></BsStarHalf>
      ) : (
        <BsStar></BsStar>
      )}
      {rating >= 5 ? (
        <BsStarFill></BsStarFill>
      ) : rating >= 4.5 ? (
        <BsStarHalf></BsStarHalf>
      ) : (
        <BsStar></BsStar>
      )}
    </div>
  );
};

export default RatingStar;
