import React, { createContext, useContext } from "react";

const RatingContext = createContext();

export const useRatingContext = () => useContext(RatingContext);

export const RatingProvider = ({ children }) => {
  const renderStars = (roundedRating) => {
    const stars = [];
    const fullStars = Math.floor(roundedRating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i
          src="star-full.png"
          alt="Full Star"
          className="star-rating-icon ci-star-filled active"
        />,
      );
    }

    if (roundedRating % 1 !== 0) {
      stars.push(
        <i
          src="star-half.png"
          alt="Half Star"
          className="star-rating-icon ci-star-half active"
        />,
      );
    }

    return stars;
  };

  return (
    <RatingContext.Provider value={{ renderStars }}>
      {children}
    </RatingContext.Provider>
  );
};
