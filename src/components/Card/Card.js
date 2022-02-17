import React from "react";

//  card to display posts

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <h3 className="card__title"> {props.title} </h3>
      <p className="card__content"> {props.content} </p>
    </div>
  );
};

export default Card;
