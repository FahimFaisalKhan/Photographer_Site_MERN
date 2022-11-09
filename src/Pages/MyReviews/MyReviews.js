import React, { useContext, useEffect, useState } from "react";
import { Button, Textarea } from "react-daisyui";
import MyReviewItem from "../../Components/MyReviewItem/MyReviewItem";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";
import toast, { Toaster } from "react-hot-toast";

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
        <Toaster
          toastOptions={{
            style: { background: "rgb(34 197 94)" },
            duration: 3000,
          }}
          autoClose={1000}
        />
        {myRevs.length > 0 ? (
          <h1 className="mx-auto mt-16 w-4/12 text-3xl leading-normal">
            <span className="font-semibold text-center">
              Hi {user.displayName}!
            </span>
            <br />
            Here are your reviews about different services. Check out the
            previous reviews and feel free to edit or delete them.
          </h1>
        ) : (
          <h1 className="mx-auto mt-16 flex items-center text-3xl justify-center leading-normal min-h-[70vh]">
            <p>
              <span className="font-semibold text-center">
                Hello {user.displayName}!
              </span>
              <br />
              It seems like no reviews were added.
            </p>
          </h1>
        )}
      </section>
      <section className="my-32">
        {myRevs.map((rev) => (
          <MyReviewItem
            rev={rev}
            setMyRevs={setMyRevs}
            myRevs={myRevs}
            toast={toast}
          />
        ))}
      </section>
    </div>
  );
};

export default MyReviews;
