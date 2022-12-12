import Spotify from "spotify-web-api-js";
import { get_access_token } from "../auth/auth";

let spotifyApi = new Spotify();

export async function getUserPlaylists() {
	//returns an array of objects with playlist name (like "Favorite Smashing Pumpkins jamz")
	//and the id of the playlist. Use this to feed the playlists selection list
    const access_token = await get_access_token();
    spotifyApi.setAccessToken( access_token );

    console.log( spotifyApi );
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
        if (err) console.error(err);
        else console.log('Artist albums', data);
      });
}

export async function getArtistData()  {
    event.preventDefault();
    console.log("TEST");
    const access_token = await get_access_token();
    spotifyApi.setAccessToken( access_token );

    console.log( spotifyApi );
    const name = document.getElementById("artist_name_input").value;

    console.log( name );
    spotifyApi.getArtist(name, function( err, data) {
        if (err) console.error(err);
        else console.log('Artist albums', data);       
    });
}