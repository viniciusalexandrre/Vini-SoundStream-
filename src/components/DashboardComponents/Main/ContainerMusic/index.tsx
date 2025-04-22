import PopularSongs from './PopularSongs'
import SelectCategory from './SelectCategory'
import styles from './containerMusic.module.scss'

const ContainerMusic = () => {
  return (
    <div className={styles.blockMusic}>
      <SelectCategory />
      <PopularSongs />
    </div>
  )
}

export default ContainerMusic
