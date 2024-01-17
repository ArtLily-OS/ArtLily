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
  // const apiUrl = '';

  // fetch(apiUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setImageUrls(data.images || []);
  //     setTextData(data.text || '');
  //   })
  //   .catch((error) => console.error('Error fetching data:', error));

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
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
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
