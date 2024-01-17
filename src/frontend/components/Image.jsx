import React from 'react';

export default function ImageContainer({
  galleryData,
  currentImageIndex,
  handleNext,
  handlePrev,
}) {
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
          position: 'initial',
          maxWidth: '100%', // Set maximum width to half of the screen
          margin: '0 auto', // Center horizontally
        }}
      >
        <h2>Title: {galleryData[currentImageIndex].title}</h2>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '100%',
            position: 'initial',
            borderRadius: '8px',
          }}
        >
          <img
            src={galleryData[currentImageIndex].image_id}
            alt={`Image ${currentImageIndex + 1}`}
            style={{
              width: '100%',
              height: '60%',
              borderRadius: '8px',
              boxShadow:'4px 4px lightgrey'
            }}
          />
          <button
            onClick={handlePrev}
            style={{
              position: 'initial',
              top: '50%',
              left: '-30px',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            {'<'}
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-30px',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
}
