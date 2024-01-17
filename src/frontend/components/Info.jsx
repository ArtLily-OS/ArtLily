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
          maxWidth: '50%', // Set maximum width to half of the screen
          margin: '0 auto', // Center horizontally
        }}
      >
        <p>
          {galleryData.length > 0
            ? galleryData[currentImageIndex].textData
            : ''}
        </p>
      </div>
    </div>
  );
}
