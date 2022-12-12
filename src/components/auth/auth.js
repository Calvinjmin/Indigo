import qs from "qs";
import axios from "axios";

import Spotify from "spotify-web-api-js";

const spotifyApi = new Spotify();

export const auth_token = Buffer.from(
  `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`,
  "utf-8"
).toString("base64");

export const get_access_token = async () => {
  try {
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = "https://accounts.spotify.com/api/token";
    const data = qs.stringify({ grant_type: "client_credentials" });

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    //return access token
    return response.data.access_token;
    //console.log(response.data.access_token);
  } catch (error) {
    //on fail, log the error in console
    console.log(error);
  }
};

export const test = async () => {
  const access_token = await get_access_token();
  spotifyApi.setAccessToken(access_token);

  console.log(spotifyApi);
  // get an artists
  spotifyApi.getArtist("2hazSY4Ef3aB9ATXW7F5w3").then(
    function (data) {
      console.log("Artist information", data);
    },
    function (err) {
      console.error(err);
    }
  );
};
