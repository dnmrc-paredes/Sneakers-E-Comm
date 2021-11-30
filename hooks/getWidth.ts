import { useState, useEffect } from 'react'

export const useWidth = () => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  return width
}
