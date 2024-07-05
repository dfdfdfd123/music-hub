// src/component/MusicDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSimilarTracks } from '../services/LastFmService';

const MusicDetail: React.FC = () => {
  const { artist, track } = useParams<{ artist: string; track: string }>();
  const [similarTracks, setSimilarTracks] = useState<any[]>([]);

  useEffect(() => {
    if (artist && track) {
      getSimilarTracks(track, artist).then(similarTracks => {
        setSimilarTracks(similarTracks);
      });
    }
  }, [artist, track]);

  return (
    <div className="music-detail">
      <h1>음악제목</h1>
      <p>발매일</p>
      <p>장르</p>
      <div>
        <button>▶️</button>
        <button>❤️</button>
        <button>더보기</button>
        <button>리뷰</button>
      </div>
      <h2>아티스트 이름</h2>
      <p>{artist}</p>
      <h2>아티스트의 다른음악</h2>
      <div className="similar-tracks">
        {similarTracks.map((track, index) => (
          <div key={index}>
            <img src={track.image[2]['#text']} alt={track.name} />
            <p>{track.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicDetail;
