

// src/component/MainContent.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTopTracks, getTopArtists, getSimilarTracks } from '../services/LastFmService';

const MainContent: React.FC = () => {
  const [topTracks, setTopTracks] = useState<any[]>([]);
  const [topArtists, setTopArtists] = useState<any[]>([]);
  const [recommendedTracks, setRecommendedTracks] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopTracks = async () => {
      const tracks = await getTopTracks();
      setTopTracks(tracks);

      if (tracks.length > 0) {
        const similarTracks = await getSimilarTracks(tracks[0].name, tracks[0].artist.name);
        setRecommendedTracks(similarTracks);
      }
    };

    const fetchTopArtists = async () => {
      const artists = await getTopArtists();
      setTopArtists(artists);
    };

    fetchTopTracks();
    fetchTopArtists();
  }, []);

  const handleTrackClick = (artist: string, track: string) => {
    navigate(`/music/${artist}/${track}`);
  };

  return (
    <main className="main-content">
      <section className="recommendations">
        <h2>오늘의 추천곡</h2>
        <div className="items">

        {recommendedTracks.map(track => (
            <div key={track.name} onClick={() => handleTrackClick(track.artist.name, track.name)}>
              <img src={track.image[2]['#text']} alt={track.name} />
              <p>{track.name}</p>
              <p>{track.artist.name}</p>
            </div>
          ))}

       

        </div>
      </section>
      <section className="popular-music">
        <h2>인기음악</h2>
        <div className="items">
          {topTracks.map(track => (
            <div key={track.name} onClick={() => handleTrackClick(track.artist.name, track.name)}>
              <img src={track.image[2]['#text']} alt={track.name} />
              <p>{track.name}</p>
              <p>{track.artist.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="popular-artists">
        <h2>인기 아티스트</h2>
        <div className="items">
          {topArtists.map(artist => (
            <div key={artist.name}>
              <img src={artist.image[2]['#text']} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="news-and-top">
        <section className="news">
          <h2>음악 뉴스</h2>
        </section>
        <section className="top-list">
          <h2>Top</h2>
          
            {topTracks.slice(0, 10).map((track, index) => (
              <li key={index} onClick={() => handleTrackClick(track.artist.name, track.name)}>
                {index + 1}. {track.name} - {track.artist.name}
              </li>
            ))}
          
        </section>
      </div>
    </main>
  );
};

export default MainContent;


