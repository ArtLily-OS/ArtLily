import React from 'react';

export default function InfoContainer({ galleryData, currentImageIndex }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '0px',
          maxWidth: '90%', // Set maximum width to half of the screen
          margin: '0', // Center horizontally
        }}
      >
        <p>
        Artist: {galleryData.length > 0
            ?  galleryData[currentImageIndex].artist_display
            : ''}
        </p>
        <p>
        Date: {galleryData.length > 0
            ? galleryData[currentImageIndex].date_display
            : ''}
        </p>
        <p>
        Description: {galleryData.length > 0
            ? galleryData[currentImageIndex].description
            : ''}
        </p>
      </div>
    </div>
  );
}
