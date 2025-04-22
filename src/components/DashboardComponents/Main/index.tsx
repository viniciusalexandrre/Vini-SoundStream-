import Carrousel from './Carousel'
import ContainerMusic from './ContainerMusic'

const MainDashboard = () => {
  const slides = [
    {
      id: 0,
      artist: 'id0',
      image: '/Imagem-music.png',
    },
    {
      id: 1,
      artist: 'id1',
      image: '/Imagem-music.png',
    },
    {
      id: 2,
      artist: 'id2',
      image: '/Imagem-music.png',
    },
    {
      id: 3,
      artist: 'id3',
      image: '/Imagem-music.png',
    },
    {
      id: 4,
      artist: 'id4',
      image: '/Imagem-music.png',
    },
  ]

  return (
    <main>
      <Carrousel slides={slides} autoPlay interval={3000} />
      <ContainerMusic />
    </main>
  )
}

export default MainDashboard