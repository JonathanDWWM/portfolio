import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)

    const move = (e) => {
      if (!dotRef.current) return
      dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-white"
      style={{ transform: 'translate(-100px, -100px)' }}
    />
  )
}
