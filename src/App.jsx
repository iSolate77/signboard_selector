import React from 'react';
import ImageUploader from './components/ImageUploader';
import ImagePreviewer from './components/ImagePreviewer';
import SignboardSizeInput from './components/SignboardSizeInput';
import SaveExportButtons from './components/SaveExportButtons';

export default function App() {
  return (
    <div className="store-front p-4">
      <h1 className="text-3xl font-bold mb-4">Store Front Signboard Selector</h1>

      <ImageUploader />

      <ImagePreviewer />

      <SignboardSizeInput />

      <SaveExportButtons />
    </div>
  );
}
