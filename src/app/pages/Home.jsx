import React from "react";
import { useEffect } from "react";
import { Card } from "../components/Card";
import { Layout } from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveSong,
  getSongsAPI,
} from "../redux/actions/dispatcher/songsActions";

export const Home = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const onGetSong = (song) => {
    dispatch(getActiveSong(song));
  };

  useEffect(() => {
    dispatch(getSongsAPI());
  }, []);

  return (
    <Layout>
      <div className="home">
        <h1> Explorar Pop </h1>

        <div className="home_grid">
          {songs.map((song, index) => (
            <div
              key={index}
              onClick={() => {
                onGetSong({ song, index });
              }}
            >
              <Card
                cover={song.cover}
                title={song.title}
                subtitle={song.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
