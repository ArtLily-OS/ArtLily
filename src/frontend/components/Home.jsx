import React, { useEffect, useState } from 'react';
import ImageContainer from './Image';
import InfoContainer from './Info';
import Navbar from './Navbar';
import { fetchGallery } from '../../backend/api';

const HomePage = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const gallery = fetchGallery();
    console.log(gallery);
    gallery.then((array) => {
      setGalleryData(array);
    });
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length
    );
  };

  if (galleryData.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        background: `url(/src/frontend/assets/dark-gray-wall-with-row-spotlights-empty-room.jpg)`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
      }}
    >
      <Navbar />
      <div
        style={{
          height: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <ImageContainer
          galleryData={galleryData}
          currentImageIndex={currentImageIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
        <InfoContainer
          galleryData={galleryData}
          currentImageIndex={currentImageIndex}
        />
      </div>
    </div>
  );
};

export default HomePage;
