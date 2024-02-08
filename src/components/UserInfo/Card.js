import React from "react";
import "./card.css";

const Card = ({ element }) => {
  return (
    <div class={"list-container"}>
      <h2>{element.name}</h2>
      <p>
        <b>Email:</b> &nbsp;{element.email}
      </p>
      <p>
        <b>City:</b> &nbsp;{element.address.city}
      </p>
      <p>
        <b>Company:</b> &nbsp;{element.company.name}
      </p>
    </div>
  );
};

export default Card;
