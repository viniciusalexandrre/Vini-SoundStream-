import Image from 'next/image'
import styles from './card.module.scss'

interface CardProps {
  image: string
  alt: string
}

const Card = ({ image, alt }: CardProps) => {
  return (
    <div className={styles.card}>
      <div>
        <Image src={image} width={30} height={30} alt={alt} />
      </div>
    </div>
  )
}

export default Card
