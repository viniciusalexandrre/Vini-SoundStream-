'use client'

import { useCarousel } from '@/hook/useCarrousel'
import Image from 'next/image'
import ImagemButtonSetaDireita from '../../../../../../public/seta-direita.svg'
import ImagemButtonSetaEsquerda from '../../../../../../public/seta-esquerda.svg'
import { DataButton } from './data/data'
import styles from './selectCategory.module.scss'

const SelectCategory = () => {
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
        <h3>Selecione uma categoria</h3>
        <div>
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
        {DataButton.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? styles.carrouselActive : ''}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            ref={index === activeIndex ? carouselItem : null}
          >
            <button>
              <strong>{item.buttonText}</strong>
            </button>
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

export default SelectCategory
