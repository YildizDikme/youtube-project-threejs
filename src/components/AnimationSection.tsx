"use client";

import React from "react";

const AnimationSection: React.FC = () => {
  return (
    <div className="animation-section">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <h2 className="text-center">
            JOIN <br />
            NOW
          </h2>
          <span className="flex gap-2">
            <iframe
              src="https://embed.lottiefiles.com/animation/116517"
              title="Animation 1"
            ></iframe>
            <iframe
              src="https://embed.lottiefiles.com/animation/96268"
              title="Animation 2"
            ></iframe>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimationSection;
