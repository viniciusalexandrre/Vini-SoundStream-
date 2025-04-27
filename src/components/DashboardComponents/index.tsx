
import Carousel from './Carousel'
import ContainerMusic from './ContainerMusic'
import styles from './dashboardComponents.module.scss'
import { MultiStepModal } from './modal'

const MainDashboard = () => {
  const slides = [
    {
      id: 0,
      artist: 'id0',
      image: '/dashboard/Imagem-music.png',
    },
    {
      id: 1,
      artist: 'id1',
      image: '/dashboard/Imagem-music.png',
    },
    {
      id: 2,
      artist: 'id2',
      image: '/dashboard/Imagem-music.png',
    },
    {
      id: 3,
      artist: 'id3',
      image: '/dashboard/Imagem-music.png',
    },
    {
      id: 4,
      artist: 'id4',
      image: '/dashboard/Imagem-music.png',
    },
  ]

  return (
    <main className={styles.mainDashboard}>
      <Carousel slides={slides} autoPlay interval={3000} />
      <ContainerMusic />
      <MultiStepModal />
    </main>
  )
}

export default MainDashboard