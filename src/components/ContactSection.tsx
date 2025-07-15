"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <div className="contact-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/4 flex justify-center">
            <div>
              <h4>ELSEWHERE</h4>
              <ul>
                <li>
                  <a href="" className="flex items-center gap-2">
                    <FaArrowRight /> Youtube
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-2">
                    <FaArrowRight /> Linkedin
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-2">
                    <FaArrowRight /> Twitter
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-2">
                    <FaArrowRight /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/4 flex justify-center">
            <div>
              <h4>LINKS</h4>
              <ul>
                <li>
                  <a href="" className="flex items-center gap-2">
                    <FaArrowRight /> Teams
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-2">
                    <FaArrowRight /> Lessons
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
