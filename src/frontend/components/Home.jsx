import React, { useEffect, useState } from 'react';
import ImageContainer from './Image';
import InfoContainer from './Info';
import Navbar from './Navbar';

const HomePage = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setGalleryData([
      {
        imageUrl: 'src/frontend/assets/SWML.jpeg',
        textData: 'Squidward Lisa - Jesse Rosengrant',
      },
      {
        imageUrl: 'src/frontend/assets/SBML.jpeg',
        textData: 'Sponge Bob Lisa - Ryan Stankowitz',
      },
      {
        imageUrl: 'src/frontend/assets/PSML.jpeg',
        textData: 'Patrick Star Lisa - Daniel Liang',
      },
    ]);
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
