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
    <div style={{background: `url(/src/frontend/assets/dark-gray-wall-with-row-spotlights-empty-room.jpg)`, 
    backgroundSize: 'cover'}}>
    <div>
    <Navbar />
    <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <ImageContainer galleryData={galleryData} currentImageIndex={currentImageIndex} handleNext={handleNext} handlePrev={handlePrev} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <InfoContainer galleryData={galleryData} currentImageIndex={currentImageIndex} />
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default HomePage;
