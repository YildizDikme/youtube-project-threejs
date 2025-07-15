"use client";

import React from "react";

const ReviewSection: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="border-main"></div>
        </div>
      </div>
      <div className="review-section">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <p className="review-text">
              "Design can be artistic. Design can be aesthetic. Design is so
              simple, <span>that's why it is so complicated."</span>
            </p>
          </div>
          <div className="flex items-center m-2">
            <img
              src="https://www.famousgraphicdesigners.org/images/paul-rand.jpg"
              alt="Paul Rand"
            />
            <p className="review-person">- Paul Rand · Graphic Designer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
