import React from 'react';

export default function InfoContainer({ galleryData, currentImageIndex }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <h2>Info Container</h2>
        <p>
          {galleryData.length > 0
            ? galleryData[currentImageIndex].textData
            : ''}
        </p>
      </div>
    </div>
  );
}
