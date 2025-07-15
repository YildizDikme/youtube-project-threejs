"use client";

import { FaBars } from "react-icons/fa";

export default function BannerSection() {
  return (
    <section className="section banner-section" id="banner-area">
      <nav className="nav">
        <div className="nav-left">
          <div className="nav-links-section">
          <FaBars className="text-white text-2xl cursor-pointer transition hover:scale-110" />

          </div>
          <div className="logo"></div>
        </div>
        <div className="notify-btn">
          <a href="#">Notify Me</a>
        </div>
      </nav>

      <div className="wrapper-svg">
        <div className="container">
          <div>
            <span>1</span>
            <a href="#" className="text">
              Get good
              <br />
              at design
            </a>
          </div>
          <div>
            <span>2</span>
            <a href="#" className="text">
              build your portfolio
            </a>
          </div>
          <div>
            <span>3</span>
            <a href="#" className="text text-color">
              confident creation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
