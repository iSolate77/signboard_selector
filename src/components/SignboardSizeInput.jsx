import React from 'react'

export default function SignboardSizeInput(props) {
  const handleSizeChange = (event) => {
    props.setSize(event.target.value)
  }

  return (
    <div className='signboard-size'>
      <label htmlFor='signboardSize' className='block text-sm font-medium mb-1'>
        Signboard Size (in meters)
      </label>
      <input
        id='signboardSize'
        type='number'
        min='0'
        step='0.01'
        value={props.size}
        onChange={handleSizeChange}
        className='w-full p-2 border border-gray-300 rounded'
      />
    </div>
  )
}
