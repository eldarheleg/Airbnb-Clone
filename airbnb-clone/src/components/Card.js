import React from "react";

function Card(props) {
  return (
      <section className="card">
        <div className="card-image-container">
          <img className="card-img" src={props.img} alt="Katie" />
          <div className="card-box">Sold out</div>
        </div>
        <div className="card-status">
          <img
            className="card-img-star"
            src="/images/red-star.png"
            alt="Star"
          />
          <span className="grey">
            ({props.status.rating}) • {props.status.reviewCount} •{" "}
          </span>
          <span className="grey">{props.location}</span>
        </div>
        <p className="card-describe">Learn lessons with Katie</p>
        <p className="card-price">From $40</p>
        <p className="card-price-2">/ person</p>
      </section>
  );
}

export default Card;
