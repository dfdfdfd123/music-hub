// services/LastFmService.ts
import axios from 'axios';

const API_KEY = '0a03dd8394b898ca2e9f986320ac2700'; // Last.fm에서 발급받은 API 키

export const getTopTracks = async () => {
  try {
    const response = await axios.get('http://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'chart.gettoptracks',
        api_key: API_KEY,
        format: 'json'
      }
    });
    return response.data.tracks.track;
  } catch (error) {
    console.error('Error fetching top tracks', error);
  }
};

export const getTopArtists = async () => {
  try {
    const response = await axios.get('http://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'chart.gettopartists',
        api_key: API_KEY,
        format: 'json'
      }
    });
    return response.data.artists.artist;
  } catch (error) {
    console.error('Error fetching top artists', error);
  }
};

export const getSimilarTracks = async (track: string, artist: string) => {
  try {
    const response = await axios.get('http://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'track.getsimilar',
        track: track,
        artist: artist,
        api_key: API_KEY,
        format: 'json'
      }
    });
    return response.data.similartracks.track;
  } catch (error) {
    console.error('Error fetching similar tracks', error);
  }
};
