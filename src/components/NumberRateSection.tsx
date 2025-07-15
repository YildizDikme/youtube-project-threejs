"use client";

import React from "react";

const NumberRateSection = () => {
  return (
    <section id="number-rate-area" className="number-rate-section section">
      <div className="container mx-auto px-4 max-w-[1250px]">
        <div className="flex flex-wrap w-full justify-end">
          <div className="w-full sm:w-full lg:w-1/3">
            <div className="number-rate-item flex flex-col">
              <span className="number-item">
                80 <span className="number-plus">+</span>
              </span>
              <span className="number-text">customers</span>
            </div>
            <div className="number-rate-item">
              <span className="number-item">
                15 <span className="number-plus">+</span>
              </span>
              <span className="number-text">projects</span>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="number-rate-item">
              <span className="number-item">
                1500 <span className="number-plus">+</span>
              </span>
              <span className="number-text">projects</span>
            </div>
            <div className="number-rate-item">
              <span className="number-item">
                6000 <span className="number-plus">+</span>
              </span>
              <span className="number-text">members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberRateSection;
