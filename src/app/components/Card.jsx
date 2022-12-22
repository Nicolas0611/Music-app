import React from "react";

export const Card = ({ cover, title, subtitle }) => {
  return (
    <div className="card_container">
      <div className="card_image">
        <img src={cover} alt="Music Cover Art" />
      </div>

      <div className="card_content">
        <p className="card_title text-center"> {title}</p>
        <p className="card_artist text-center"> {subtitle}</p>
      </div>
    </div>
  );
};
