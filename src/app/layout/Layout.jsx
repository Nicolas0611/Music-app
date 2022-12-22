import React from "react";
import { AudioPlayer } from "../components/AudioPlayer";
import { Navbar } from "../components/Navbar";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import image from "../../assets/img/image.png";

export const Layout = ({ children }) => {
  const songData = useSelector((state) => state.song);
  const songArray = useSelector((state) => state.songs);
  const [isplaying, setisplaying] = useState(false);

  const [currentSong, setCurrentSong] = useState(() => {
    if (songArray) {
      songArray[1];
    } else {
      return null;
    }
  });

  const audioElem = useRef();

  useEffect(() => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({
      cover: songData?.song.cover,
      song: songData?.song.song,
      title: songData?.song.title,
      subtitle: songData?.song.subtitle,
      progress: (ct / duration) * 100,
      length: duration,
    });
  }, [songData?.index]);

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <>
      {songArray ? (
        <div className="bg">
          <div className="container layout layout_grid">
            <div className="navbar">
              <Navbar />
            </div>
            <div className="layout_content">
              <div className="layout_pages">{children} </div>
              <div className="layout_sound">
                <div className="layout_sound-image">
                  {songData ? (
                    <img src={currentSong?.cover} alt="Music Cover Art" />
                  ) : (
                    <img src={image} alt="Music Cover Art" />
                  )}
                </div>
                <div className="layout_sound-input">
                  <audio
                    src={currentSong?.song}
                    ref={audioElem}
                    onTimeUpdate={onPlaying}
                  />
                  <AudioPlayer
                    songData={songData}
                    songs={songArray}
                    isplaying={isplaying}
                    setisplaying={setisplaying}
                    audioElem={audioElem}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div> Loading</div>
      )}
    </>
  );
};
