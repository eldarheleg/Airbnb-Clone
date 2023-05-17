import React from "react";

function Card(props) {
  return (
      <section className="card">
        <div className="card-image-container">
          <img className="card-img" src={props.img} alt="Katie" />
        <div className="card-box">{props.spots==0? "Sold out" : "Open spots: "+props.spots}</div>
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
      <p className="card-title">{props.title}</p>
        <p className="card-price"><span className="card-bold">From {props.price}$</span> / person</p>
        
      </section>
  );
}

export default Card;
