import React, { useState } from "react";
import { IconContext } from "react-icons";
import { ImSpinner11 } from "react-icons/im";
export default function Review() {
  const reviewList = [
    {
      content: "he's always been a thinker, that one",
      author: "my mom",
    },
    {
      content:
        "idk, please hire him so he'll stop making messes around the house",
      author: "my partner",
    },
    {
      content:
        "he gives me the best treats, so I'm obligated to say he's pretty cool",
      author: "my dog",
    },
  ];
  const [reviews, setReviews] = useState(reviewList);
  const [currentReview, setCurrentReview] = useState({
    content: "11/10 best developer of the year",
    author: "ign",
  });

  const getRandomReview = () => {
    //create a copy of reviews called newReviews
    const newReviews = reviews;
    //remove review from copy of reviews and assign it to newReview
    const newReview = newReviews.shift();
    //set reviews to be newReviews
    setReviews(newReviews);
    // Set the review
    if (newReview) {
      setCurrentReview(newReview);
      return;
    }
    setCurrentReview({
      content: "I'm all out of reviews",
      author: "sorry :(",
    });
  };

  return (
    <div className="bg-zinc-900 h-screen flex items-center justify-center ">
      {/* Content */}

      <div className=" relative max-w-screen-xl  mx-auto h-4/5 flex flex-col flex-1 justify-center  px-8">
        <h2 className="text-white text-8xl font-nunito font-extrabold ">
          {currentReview.content}
        </h2>
        <p className="text-white text-2xl mt-4 font-nunito-sans">
          - {currentReview.author}
        </p>

        <div className="flex absolute bottom-0  right-8 h-16 w-16">
          <button
            onClick={() => getRandomReview()}
            title="get new review"
            className="justify-self-end align-self-end"
          >
            <IconContext.Provider
              value={{
                size: "2em",
                className: ` fill-white h-24 w-24 p-1 hover:animate-spin-slow`,
              }}
            >
              <ImSpinner11 />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}
