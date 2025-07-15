"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";

const InterfaceSection = () => {
  return (
    <section id="interface-area" className="section interface-section">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-8/12">
            <p className="interface-text text-[#ece9e4] font-bold text-[30px] w-[70%] lg:w-full">
              "Even without a design background, is it possible to learn the
              systematic process and visual skills to create beautiful and
              functional interfaces?!"
            </p>
          </div>
          <div className="w-full lg:w-4/12">
            <ul>
              <li className="text-[#999494] mb-2 font-semibold hover:text-[#ece9e4] transition-all duration-300">
                <i className="inline-block text-[#ff3355] transition-transform duration-300 hover:scale-125">
                  <FaCheck />
                </i>{" "}
                User Experience (UX) Research
              </li>
              <li className="text-[#999494] mb-2 font-semibold hover:text-[#ece9e4] transition-all duration-300">
                <i className="inline-block text-[#ff3355] transition-transform duration-300 hover:scale-125">
                  <FaCheck />
                </i>{" "}
                Creating Visual Hierarchy
              </li>
              <li className="text-[#999494] mb-2 font-semibold hover:text-[#ece9e4] transition-all duration-300">
                <i className="inline-block text-[#ff3355] transition-transform duration-300 hover:scale-125">
                  <FaCheck />
                </i>{" "}
                Typography
              </li>
              <li className="text-[#999494] mb-2 font-semibold hover:text-[#ece9e4] transition-all duration-300">
                <i className="inline-block text-[#ff3355] transition-transform duration-300 hover:scale-125">
                  <FaCheck />
                </i>{" "}
                Choosing Colors
              </li>
              <li className="text-[#999494] mb-2 font-semibold hover:text-[#ece9e4] transition-all duration-300">
                <i className="inline-block text-[#ff3355] transition-transform duration-300 hover:scale-125">
                  <FaCheck />
                </i>{" "}
                Compliance with Application and Web Standards
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;
