"use client";

export default function ProfileSection() {
  return (
    <section id="profile-area" className="section profile-section">
      <div className="container">
        <div className="profile-text">
          <h6>
            <span>trusted by thousands</span> of people from around the world
          </h6>
          <div className="profile-rating">
            <h6>5-Star Rating</h6>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        <div className="profile-box">
          {Array.from({ length: 25 }).map((_, index) => (
            <div className="profile-circle" key={index}>
              <img
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg"
                alt="Profile"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
