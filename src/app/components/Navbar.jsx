import React from "react";
import { IconButton } from "./buttons/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { buttonContent } from "../library/buttonLibrary";
import image from "../../assets/img/image.png";
import { ArtistButton } from "./buttons/ArtistButton";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const artist = useSelector((state) => state.artists);

  return (
    <div className="nav nav_container">
      <div className="nav_content">
        <div className="logo">
          <FontAwesomeIcon icon={faCompactDisc} />
          <p>Soundfy</p>
        </div>
        <div className="nav_link">
          {buttonContent.map((content, index) => (
            <IconButton
              key={index}
              icon={<FontAwesomeIcon icon={content.icon} />}
              content={content.label}
            />
          ))}
        </div>
        <p className="nav_artists-title">Top Artistas</p>
        <div className="nav_artists">
          {artist.map((artist, index) => (
            <ArtistButton
              key={index}
              image={artist.imageArtist}
              title={artist.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
