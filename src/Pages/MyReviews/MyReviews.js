import React, { useContext, useEffect, useState } from "react";
import { Button, Textarea } from "react-daisyui";
import MyReviewItem from "../../Components/MyReviewItem/MyReviewItem";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";

const MyReviews = () => {
  const { user } = useContext(MyAuthContext);

  const [myRevs, setMyRevs] = useState([]);
  const [textAreaVisible, setTextAreaVisible] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyRevs(data));
  }, [user]);

  return (
    <div>
      <section className="container mx-auto">
        <h1 className="mx-auto mt-16 w-4/12 text-3xl leading-normal">
          <span className="font-semibold text-center">
            Hi {user.displayName}!
          </span>
          <br />
          Here are your reviews about different services. Check out the previous
          reviews and feel free to edit or delete them.
        </h1>
      </section>
      <section className="my-32">
        {myRevs.map((rev) => (
          <MyReviewItem rev={rev} />
        ))}
      </section>
    </div>
  );
};

export default MyReviews;
