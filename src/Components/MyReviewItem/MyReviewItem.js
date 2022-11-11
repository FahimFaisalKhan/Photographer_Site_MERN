import React, { useContext, useEffect, useState } from "react";
import { Button, Textarea } from "react-daisyui";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";

const MyReviewItem = ({ rev, setMyRevs, myRevs, toast }) => {
  const { _id, review, serviceId, serviceName } = rev;
  const { user } = useContext(MyAuthContext);
  const [textAreaVisible, setTextAreaVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(review);
  const handleEditReview = (event) => {
    event.preventDefault();

    setTextAreaVisible(!textAreaVisible);

    console.log(textAreaVisible);
    if (textAreaVisible === true) {
      const editedRev = event.target.editedRev.value;
      console.log(editedRev);
      fetch(`https://backend-fahimfaisalkhan.vercel.app/reviews`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("reviewSiteToken"),
        },
        body: JSON.stringify({
          editedReview: editedRev,
          revId: _id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setCurrentReview(editedRev);
          }
        });
    }
  };

  const handleDeleteReview = () => {
    fetch(`https://backend-fahimfaisalkhan.vercel.app/deleteReview`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("reviewSiteToken"),
      },
      body: JSON.stringify({
        revToDelId: _id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged && data.deletedCount > 0) {
          const newMyRevs = myRevs.filter((r) => r._id !== _id);
          setMyRevs([...newMyRevs]);
          toast("Review Successfully deleted");
        }
      });
  };
  return (
    <div className="flex flex-col items-center justify-center py-12   border-t-2 bg-base-300/20 relative">
      <div className="w-2/5 flex flex-col items-center">
        <h1 className="  text-2xl capitalize">{serviceName} </h1>
      </div>
      <div className="w-3/5">
        <p className={`py-12 xl:pr-44 ${textAreaVisible && "hidden"} `}>
          {currentReview}
        </p>
        <form onSubmit={handleEditReview} action="">
          <Textarea
            className={`w-full xl:w-3/5 xl:pr-44 min-h-[10rem] ${
              !textAreaVisible && "hidden"
            }`}
            defaultValue={currentReview}
            name="editedRev"
          ></Textarea>
          <Button
            type="submit"
            className="absolute bottom-2 left-3 sm:left-20 xl:left-64 2xl:left-[30rem] bg-transparent hover:bg-base-300 border-none  text-base text-base-content capitalize"
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

      <Button
        onClick={handleDeleteReview}
        className="absolute bottom-2 right-3 sm:right-20 xl:right-64 2xl:right-[30rem] bg-transparent hover:bg-base-300 border-none text-base text-base-content capitalize"
      >
        Delete <MdDelete size={40} color="black" />
      </Button>
    </div>
  );
};

export default MyReviewItem;
