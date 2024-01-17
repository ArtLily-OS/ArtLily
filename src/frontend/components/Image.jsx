import React from 'react';

export default function ImageContainer({ imageUrls }) {
  return (
    <div>
      <h2>HERE IS THE PAINTERINGS</h2>
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          style={{ width: '200px', margin: '10px' }}
        />
      ))}
    </div>
  );
}
