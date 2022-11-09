import React, { useEffect, useState } from "react";
import { Button, Textarea } from "react-daisyui";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
const MyReviewItem = ({ rev }) => {
  const { _id, review, serviceId, serviceName } = rev;

  const [textAreaVisible, setTextAreaVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(review);
  const handleEditPost = (event) => {
    event.preventDefault();

    setTextAreaVisible(!textAreaVisible);

    console.log(textAreaVisible);
    if (textAreaVisible === true) {
      const editedRev = event.target.editedRev.value;
      console.log(editedRev);
      fetch(`http://localhost:5000/reviews`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          editedReview: editedRev,
          revId: _id,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div className="flex justify-center py-24   border-t-2 bg-base-300/20 relative">
      <div className="w-2/5 flex flex-col items-center">
        <h1 className="  text-2xl capitalize">{serviceName} </h1>
      </div>
      <div className="w-3/5">
        <p className={` pr-44 ${textAreaVisible && "hidden"} `}>
          {currentReview}
        </p>
        <form onSubmit={handleEditPost} action="">
          <Textarea
            className={`w-3/5 pr-44 min-h-[10rem] ${
              !textAreaVisible && "hidden"
            }`}
            defaultValue={currentReview}
            name="editedRev"
          ></Textarea>
          <Button
            type="submit"
            className="absolute bottom-2 left-3 bg-transparent hover:bg-base-300 border-none  text-base text-base-content capitalize"
          >
            {!textAreaVisible ? (
              <>
                Edit
                <GrEdit size={33} />
              </>
            ) : (
              <>Save</>
            )}
          </Button>
        </form>
      </div>

      <Button className="absolute bottom-2 right-3 bg-transparent hover:bg-base-300 border-none text-base text-base-content capitalize">
        Delete <MdDelete size={40} color="black" />
      </Button>
    </div>
  );
};

export default MyReviewItem;
