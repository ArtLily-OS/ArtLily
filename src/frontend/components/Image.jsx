import React, { useState } from 'react';

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
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '100%',
          position: 'relative',
        }}
      >
        <h2>HERE IS THE PAINTERINGS</h2>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '100%',
            position: 'relative',
            borderRadius: '8px',
          }}
        >
          <img
            src={galleryData[currentImageIndex].imageUrl}
            alt={`Image ${currentImageIndex + 1}`}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
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
