'use client'

import { useCarousel } from '@/hook/useCarrousel'
import styles from './popularSongs.module.scss'
import Button from '@/ui/Button'
import Image from 'next/image'
import Card from '@/ui/Card'

const CardsData = [
  '/dashboard/imagemMusic.png',
  '/dashboard/imagemMusic.png',
  '/dashboard/imagemMusic.png',
  '/dashboard/imagemMusic.png',
  '/dashboard/imagemMusic.png',
  '/dashboard/imagemMusic.png'

]

const PopularSongs = () => {
  const {
    carousel,
    carouselItem,
    handleDragging,
    handleDragStart,
    handleDragEnd,
    progress,
    handleLeftClick,
    handleRightClick,
    setActiveIndex,
    activeIndex,
  } = useCarousel()

  return (
    <div className={styles.popularMusicBlock}>
      <div>
        <h3>Musicas Populares</h3>
        <div className={styles.progress}>
          <span style={{ width: `${progress}%` }}></span>
        </div>
      </div>
      <ul
        ref={carousel}
        onMouseMove={handleDragging}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {CardsData.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? styles.carrouselActive : ''}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            ref={index === activeIndex ? carouselItem : null}
          >
            <Card image={item} alt={`image ${index}`} />
          </li>
        ))}
      </ul>
      <div>
        <Button variant='carouselButton' onClick={handleLeftClick}>
          <Image
            src="/dashboard/seta-esquerda.svg"
            width={16}
            height={16}
            alt="Botão com seta esquerda"
          />
        </Button>
        <Button variant='carouselButton' onClick={handleRightClick}>
          <Image
            src="/dashboard/seta-direita.svg"
            width={16}
            height={16}
            alt="Botão com seta direita"
          />
        </Button>
      </div>
    </div>
  )
}

export default PopularSongs
