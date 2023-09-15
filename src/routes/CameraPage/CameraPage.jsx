import React, { useState } from 'react';
import Webcam from 'react-webcam';
import './CameraPage.css';

function CameraPage() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const openCamera = () => {
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  return (
    <div className="camera-page">
      <h2>Iniciando Vistoria </h2>
      <div className={`camera-container ${isCameraOpen ? 'camera-open' : ''}`}>
        {isCameraOpen ? (
          <>
            <Webcam
              className="webcam"
              videoConstraints={{
                width: 1280,
                height: 720,
              }}
            />
            <button onClick={closeCamera}>Fechar Câmera</button>
          </>
        ) : (
          <button onClick={openCamera}>Abrir Câmera</button>
        )}
      </div>
    </div>
  );
}

export default CameraPage;
