import { GET_ARTIST, GET_SINGLE, GET_SONGS } from "../types/songsTypes";

const initialState = {
  songs: [],
  song: null,
  artists: [],
};

export const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    case GET_SINGLE:
      return {
        ...state,
        song: action.payload,
      };
    case GET_ARTIST:
      const artist = state.songs.slice(43);
      return {
        ...state,
        artists: artist,
      };

    default:
      return state;
  }
};
