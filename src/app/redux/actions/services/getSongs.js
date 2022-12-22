import axios from "axios";
import image from "../../../../assets/img/image.png";

const options = {
  method: "GET",
  url: "https://shazam-core.p.rapidapi.com/v1/charts/world",
  headers: {
    "X-RapidAPI-Key": "5fd977e48dmsh3b1e73753767a2cp160065jsn55fa96a3e941",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

export const getSongs = async () => {
  let songs = [];
  await axios
    .request(options)
    .then(function (response) {
      const data = response.data;
      console.log(data);

      data.forEach((song) => {
        songs.push({
          title: song.title,
          subtitle: song.subtitle,
          type: song.type,
          cover: song.images?.coverart || image,
          imageArtist: song.images?.background,
          artists: song?.artists,
          song: song.hub.actions?.[1].uri,
          id: song.key,
        });
      });
    })
    .catch(function (error) {
      console.error(error);
    });
  return songs;
};
