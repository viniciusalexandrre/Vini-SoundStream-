import Image from 'next/image'

interface CardProps {
  image: string
  alt: string
}

const Card = ({ image, alt }: CardProps) => {
  return (
    <div>
      <div>
        <Image src={image} width={30} height={30} alt={alt} />
      </div>
    </div>
  )
}

export default Card
