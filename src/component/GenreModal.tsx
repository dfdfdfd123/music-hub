// src/GenreModal.tsx
import React, { useState } from 'react';
import '../styles/GenreModal.css';

const genres = ['팝', '발라드', '트로트', '케이팝'];

interface GenreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GenreModal: React.FC<GenreModalProps> = ({ isOpen, onClose }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleGenreClick = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleSubmit = () => {
    console.log('Selected genres:', selectedGenres);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>원하는 장르를 선택해주세요</h2>
        <div className="genre-grid">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`genre-item ${selectedGenres.includes(genre) ? 'selected' : ''}`}
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </div>
          ))}
          {/* Adding placeholders */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index + genres.length} className="genre-item">---</div>
          ))}
        </div>
        <button className="submit-button" onClick={handleSubmit}>설정</button>
      </div>
    </div>
  );
};

export default GenreModal;
