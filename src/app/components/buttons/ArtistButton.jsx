import React from "react";

export const ArtistButton = ({ image, title }) => {
  return (
    <div className="nav_artists-content">
      <div className="nav_artists-image">
        <img src={image} />
      </div>
      <p className="nav_artists-name">{title}</p>
    </div>
  );
};
