import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
function ImageViewer({ images }) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
    return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div>
        <img
          src={images[currentPage]}
          alt={`Page ${currentPage + 1}`}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </div>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          disabled={currentPage <= 0}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          style={{ 
            fontWeight: "500", 
            marginRight: '8px', 
            padding: '5px 10px', 
            color: "white", 
            border: '2px solid', 
            borderColor: 'lightblue',
            borderRadius:'10px',
            width:"95px"
          }}
        >
          {t("imageViewer.previous")}
        </button>
        <button
          disabled={currentPage >= images.length - 1}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          style={{ 
            fontWeight: "500", 
            marginRight: '8px', 
            padding: '5px 10px', 
            color: "white", 
            border: '2px solid',
            borderColor: 'lightblue', 
            borderRadius:'10px',
            width:"95px"
          }}
        >
          {t("imageViewer.next")}
        </button>
      </div>
      <p style={{ 
        marginTop: '8px', 
        textAlign: 'center', 
        marginRight: '10px', 
        padding: '5px 10px', 
        color: "white", 
        border: '2px solid',
        borderColor: 'lightblue', 
        borderRadius:'10px',
        width:"150px",
        display: 'inline-block'
       }}>
        Page {currentPage + 1} {t("imageViewer.of")} {images.length}
      </p>
    </div>
  );
}

export default ImageViewer;