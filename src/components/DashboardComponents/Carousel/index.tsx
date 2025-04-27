'use client'

import { useEffect, useState } from 'react'
import styles from './carousel.module.scss'

type Slide = {
  id: number
  artist: string
  image: string
}

type CarouselProps = {
  slides: Slide[]
  autoPlay?: boolean
  interval?: number
}

const Carousel = ({
  slides,
  autoPlay = false,
  interval = 5000,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const getPosition = (index: number) => {
    const diff = index - activeIndex;
    const positions = [
      'active',   // Slide central superior
      'left',     // Slide esquerdo abaixo
      'right',    // Slide direito abaixo
      'bottomLeft',   // Slide inferior
      'bottomRight'
    ];
    
    return positions[Math.abs(diff) % 5] || 'hidden';
  };


  return (
    <div className={styles.carouselContainer}>
      <div className={styles.stairGrid}>
        {slides.map((slide, index) => {
          const position = getPosition(index);
          return (
            <div
              key={slide.id}
              className={`${styles.slide} ${styles[position]}`}
              data-position={position}
            >
              <img 
                src={slide.image} 
                alt={`Obra de ${slide.artist}`} 
                className={styles.slideImage}
              />
              <div className={styles.slideCaption}>
                <h3>{slide.artist}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.arrowButton}>
          ←
        </button>
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button onClick={nextSlide} className={styles.arrowButton}>
          →
        </button>
      </div>
    </div>
  );
}

export default Carousel
