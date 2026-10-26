'use client'

import { useRef } from 'react'

export function SpotlightCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    node.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    node.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight ${className}`}
    >
      {children}
    </div>
  )
}
