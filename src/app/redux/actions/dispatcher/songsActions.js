import { GET_ARTIST, GET_SINGLE, GET_SONGS } from "../../types/songsTypes";
import { getSongs } from "../services/getSongs";

export const getSongsAPI = () => {
  return async (dispatch) => {
    const data = await getSongs();
    dispatch(getSongsData(data));
  };
};

export const getActiveSong = (song) => {
  return (dispatch) => {
    dispatch({
      type: GET_SINGLE,
      payload: song,
    });
  };
};

export const getSongsData = (songs) => {
  return (dispatch) => {
    dispatch({
      type: GET_SONGS,
      payload: songs,
    });
    dispatch({
      type: GET_ARTIST,
    });
  };
};
