import React, { useState } from 'react'
import ImageUploader from './components/ImageUploader'
import ImagePreviewer from './components/ImagePreviewer'
import SignboardSizeInput from './components/SignboardSizeInput'
import SaveExportButtons from './components/SaveExportButtons'

export default function App() {
  const [imageSrc, setImageSrc] = useState(null)
  const [size, setSize] = useState(0)

  const handleUpload = (file) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const imageSrc = reader.result
      setImageSrc(imageSrc)
      console.log('Image source:', imageSrc)
    }

    reader.readAsDataURL(file)
  }

  const handleSave = () => {
    const data = {
      imageSre: imageSrc,
      ssize: size,
    }

    localStorage.setItem('storeFrontData', JSON.stringify(data))
    console.log('Data saved:', data)
  }

  const handleExport = () => {
    // Implement export functionality
    const link = document.createElement('a')
    link.href = imageSrc
    link.download = `store_front_signboard_${new Date().toISOString()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className='store-front p-4'>
      <h1 className='text-3xl font-bold mb-4'>
        Store Front Signboard Selector
      </h1>

      <ImageUploader onUpload={handleUpload} />

      <ImagePreviewer imageSrc={imageSrc} />

      <SignboardSizeInput size={size} setSize={setSize} />

      <SaveExportButtons onSave={handleSave} onExport={handleExport} />
    </div>
  )
}
