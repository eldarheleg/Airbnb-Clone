import React from "react";
import Katie from "../images/katie-zaffers.jpg";
import Star from "../images/red-star.png";

function Card() {
  return (
    <div>
      <section className="card">
        <div className="card-image-container">
          <img className="card-img-katie" src={Katie} alt="Katie" />
          <div className="card-box">Sold out</div>
        </div>
        <div className="card-status">
          <img className="card-img-star" src={Star} alt="Star" />
          <span className="grey">(3) 5.0 </span>
          <span className="grey">USA</span>
        </div>
        <p className="card-describe">Learn lessons with Katie</p>
        <p className="card-price">From $40</p>
        <p className="card-price-2">/ person</p>
      </section>
    </div>
  );
}

export default Card;
