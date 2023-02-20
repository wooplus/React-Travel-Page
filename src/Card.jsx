import React from "react";
import { ReactDOM } from "react";

export default function Card(props) {
  let { id, imageURL, location, locationURL, title, date, desc } = props.data;
  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img src={imageURL} alt={title} className="travel-img" />
        </div>
        <div className="place-container">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <span className="location">{location}</span>
            <a href={locationURL} target="_blank">
              View on Google Maps
            </a>
          </div>
          <h1 className="title">{title}</h1>
          <p className="date">{date}</p>
          <p className="desc">{desc}</p>
        </div>
      </div>
      <div className="underline">
        <hr />
      </div>
    </>
  );
}
