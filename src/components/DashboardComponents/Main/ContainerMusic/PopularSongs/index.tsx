'use client'

import { useCarousel } from '@/hook/useCarrousel'
import styles from './popularSongs.module.scss'
import Button from '@/ui/Button'
import Image from 'next/image'
import ImagemButtonSetaDireita from '../../../../../../public/seta-direita.svg'
import ImagemButtonSetaEsquerda from '../../../../../../public/seta-esquerda.svg'
import Card from '@/ui/Card'

const CardsData = [
  '/seta-esquerda.svg',
  '/seta-esquerda.svg',
  '/seta-esquerda.svg',
  '/seta-esquerda.svg',
  '/seta-esquerda.svg',
  '/seta-esquerda.svg',
  '/seta-esquerda.svg',
  '/seta-esquerda.svg',
  '/seta-esquerda.svg',
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
    <div>
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
        <button onClick={handleLeftClick}>
          <Image
            src={ImagemButtonSetaDireita}
            width={16}
            height={16}
            alt="Botão com seta direita"
          />
        </button>
        <button onClick={handleRightClick}>
          <Image
            src={ImagemButtonSetaEsquerda}
            width={16}
            height={16}
            alt="Botão com seta esquerda"
          />
        </button>
      </div>
    </div>
  )
}

export default PopularSongs
