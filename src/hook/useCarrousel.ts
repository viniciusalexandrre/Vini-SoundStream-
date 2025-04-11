'use client'

import { useState, useRef, useEffect } from 'react'

export const useCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const carouselItem = useRef<HTMLLIElement | null>(null)
  const [progress, setProgress] = useState<number>(0)
  const carousel = useRef<HTMLUListElement | null>(null)
  const isTouchDevice = useRef(false)

  let isDragging = false
  let startX: number
  let scrollLeft: number

  const handleDragStart = (e: any) => {
    if (!carousel.current) return

    e.preventDefault()

    isDragging = true
    startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX
    scrollLeft = carousel.current.scrollLeft
  }

  const handleDragEnd = () => {
    isDragging = false
    carousel.current?.classList.remove('dragging')
    updateProgress()
  }

  const handleDragging = (e: any) => {
    if (!carousel.current || !isDragging) return

    e.preventDefault()

    carousel.current.classList.add('dragging')
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
    const deltaX = currentX - startX
    carousel.current.scrollLeft = scrollLeft - deltaX
    updateProgress()
  }

  const updateProgress = () => {
    if (carousel.current !== null) {
      const scrollLeft = carousel.current.scrollLeft
      const scrollWidth =
        carousel.current.scrollWidth - carousel.current.clientWidth
      const progressPercentage = Math.min((scrollLeft / scrollWidth) * 100, 100)
      setProgress(progressPercentage)
    }
  }

  const handleLeftClick = () => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft -=
        carousel.current.children[0].clientWidth + 12
      updateProgress()
    }
  }

  const handleRightClick = () => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft +=
        carousel.current.children[0].clientWidth + 12
      updateProgress()
    }
  }

  const handleCurrentClick = (id: number) => {
    if (carousel.current !== null && carouselItem.current !== null) {
      carousel.current.scrollLeft = (carouselItem.current.offsetWidth + 20) * id
    }
  }

  useEffect(() => {
    if ('ontouchstart' in document.documentElement) {
      isTouchDevice.current = true
      carousel.current?.addEventListener('touchstart', handleDragStart)
      carousel.current?.addEventListener('touchmove', handleDragging)
      carousel.current?.addEventListener('touchend', handleDragEnd)
    } else {
      carousel.current?.addEventListener('mousedown', handleDragStart)
      carousel.current?.addEventListener('mousemove', handleDragging)
      carousel.current?.addEventListener('mouseup', handleDragEnd)
    }

    carousel.current?.addEventListener('scroll', updateProgress)

    return () => {
      if (carousel.current) {
        carousel.current.removeEventListener('touchstart', handleDragStart)
        carousel.current.removeEventListener('touchmove', handleDragging)
        carousel.current.removeEventListener('touchend', handleDragEnd)
        carousel.current.removeEventListener('mousedown', handleDragStart)
        carousel.current.removeEventListener('mousemove', handleDragging)
        carousel.current.removeEventListener('mouseup', handleDragEnd)
        carousel.current.removeEventListener('scroll', updateProgress)
      }
    }
  }, [])

  return {
    activeIndex,
    setActiveIndex,
    progress,
    carousel,
    carouselItem,
    handleLeftClick,
    handleRightClick,
    handleCurrentClick,
    handleDragging,
    handleDragStart,
    handleDragEnd,
  }
}
