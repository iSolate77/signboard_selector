import React, { useRef } from 'react';

export default function ImageUploader({ onUpload }) {
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="upload-section">
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileInputChange}
      />
      <div
        className="border-dashed border-2 h-32 w-full flex justify-center items-center cursor-pointer"
        onClick={() => fileInputRef.current.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <p className="text-center">
          Click here or drag and drop an image of a store front
        </p>
      </div>
    </div>
  );
}
