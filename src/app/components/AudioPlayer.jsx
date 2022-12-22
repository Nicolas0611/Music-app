import React, { useRef } from "react";

import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";

export const AudioPlayer = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
  songData,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);

    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    setisplaying(false);

    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    setisplaying(false);

    audioElem.current.currentTime = 0;
  };

  const secondsToString = (seconds) => {
    var hour = Math.floor(seconds / 3600);
    hour = hour < 10 ? "0" + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? "0" + minute : minute;
    var second = seconds % 60;
    second = second < 10 ? "0" + second : second;
    return minute + ":" + Math.round(second);
  };
  return (
    <>
      {songs ? (
        <div className="player_container">
          <div className="title">
            {songData !== null ? (
              <>
                <p>{currentSong?.title}</p>
                <p className="title_sub">{currentSong?.subtitle}</p>
              </>
            ) : (
              <p>Please select a song</p>
            )}
          </div>
          <div className="controls">
            <BsFillSkipStartCircleFill
              className="btn_action pp1"
              onClick={skipBack}
            />
            {isplaying ? (
              <BsFillPauseCircleFill
                className="btn_action pp"
                onClick={PlayPause}
              />
            ) : (
              <BsFillPlayCircleFill
                className="btn_action pp"
                onClick={PlayPause}
              />
            )}
            <BsFillSkipEndCircleFill
              className="btn_action pp1"
              onClick={skiptoNext}
            />
          </div>
          <div className="navigation">
            <div className="navigation_counter">
              {audioElem?.current !== undefined &&
              currentSong?.length !== undefined ? (
                <>
                  <p>{secondsToString(audioElem?.current.currentTime)}</p>
                  <p>
                    {currentSong.length
                      ? secondsToString(currentSong?.length)
                      : "00:00"}
                  </p>
                </>
              ) : null}
            </div>

            <div
              className="navigation_wrapper"
              onClick={checkWidth}
              ref={clickRef}
            >
              <div
                className="seek_bar"
                style={{ width: `${currentSong?.progress + "%"}` }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};
