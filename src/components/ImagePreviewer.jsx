import React, { useState, useRef, useEffect } from 'react'

export default function ImagePreviewer(props) {
  const [points, setPoints] = useState([])
  const canvasRef = useRef(null)

  const { imageSrc } = props

  const drawPoints = () => {
    if (canvasRef.current && imageSrc) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const img = new Image()
      img.src = imageSrc
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        ctx.fillStyle = 'red'
        ctx.strokeStyle = 'red'
        ctx.lineWidth = 2

        points.forEach((point, index) => {
          ctx.beginPath()
          ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI)
          ctx.fill()

          if (points[index + 1]) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(points[index + 1].x, points[index + 1].y)
            ctx.stroke()
          }
        })

        if (points.length === 4) {
          ctx.beginPath()
          ctx.moveTo(points[0].x, points[0].y)
          ctx.lineTo(points[3].x, points[3].y)
          ctx.stroke()
        }
      }
    }
  }

  const handleImageClick = (event) => {
    if (points.length < 4) {
      const rect = event.target.getBoundingClientRect()
      let x = event.clientX - rect.left
      let y = event.clientY - rect.top

      if (points.length === 1) {
        const [p1] = points
        if (Math.abs(x - p1.x) < Math.abs(y - p1.y)) {
          x = p1.x
        } else {
          y = p1.y
        }
      } else if (points.length === 2) {
        const [p1, p2] = points
        if (p1.x === p2.x) {
          x = p1.x
        } else {
          y = p1.y
        }
      } else if (points.length === 3) {
        const [p1, p2, p3] = points
        if (p1.x === p2.x) {
          x = p3.x
          y = p1.y
        } else {
          x = p1.x
          y = p3.y
        }
      }

      setPoints([...points, { x, y }])
    }
  }

  useEffect(() => {
    drawPoints()
  }, [imageSrc, points])

  return (
    <div className='image-preview'>
      {imageSrc ? (
        <canvas
          ref={canvasRef}
          width='100%'
          height='auto'
          className='border'
          onClick={handleImageClick}
        />
      ) : (
        <p className='text-center text-gray-400'>
          No image uploaded. Please upload an image to preview.
        </p>
      )}
    </div>
  )
}
