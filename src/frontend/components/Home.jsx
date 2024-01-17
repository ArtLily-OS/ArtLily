import React, { useEffect, useState } from 'react';
import ImageContainer from './Image';
import InfoContainer from './Info';

const HomePage = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [textData, setTextData] = useState('');

  useEffect(() => {
    const apiUrl = '';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setImageUrls(data.images || []);
        setTextData(data.text || '');
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <ImageContainer imageUrls={imageUrls} />
      <InfoContainer textData={textData} />
    </div>
  );
};

export default HomePage;
