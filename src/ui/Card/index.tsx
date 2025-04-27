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
        <Image src={image} width={130} height={110} alt={alt} style={{'borderRadius': '5px'}} />
      </div>
    </div>
  )
}

export default Card
