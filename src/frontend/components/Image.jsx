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
        margin: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '8px',
          width: '100%',
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '40px',
            cursor: 'pointer',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
          </svg>
        </button>
        <img
          src={galleryData[currentImageIndex].image_id}
          alt={`Image ${currentImageIndex + 1}`}
          style={{
            maxWidth: '400px',
            maxHeight: '350px',
            borderRadius: '8px',
            boxShadow: '4px 4px rgb(68,74,86)',
          }}
        />

        <button
          onClick={handleNext}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '40px',
            cursor: 'pointer',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-arrow-right-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
          </svg>
        </button>
      </div>
      <div
        style={{
          marginTop: '50px',
        }}
      >
        <h2>Title: {galleryData[currentImageIndex].title}</h2>
      </div>
    </div>
  );
}
