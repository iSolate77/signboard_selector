import React from 'react'

export default function SaveExportButtons(props) {
  return (
    <div className='save-and-export flex justify-between'>
      <button
        className='bg-blue-500 text-white py-2 px-4 rounded'
        onClick={props.onSave}
      >
        Save
      </button>
      <button
        className='bg-green-500 text-white py-2 px-4 rounded'
        onClick={props.onExport}
      >
        Export
      </button>
    </div>
  )
}
