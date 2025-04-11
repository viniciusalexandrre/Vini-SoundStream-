import Image from 'next/image'
import Button from '../Button'
import style from './themeToggle.module.scss'

const ThemeToglle = () => {
  return (
    <div className={style.container}>
      <Button type="button">
        <Image alt="Icon da lua" height={14} width={14} src={'/moon.svg'} />
      </Button>
      <Button>
        <Image alt="Icon do sol" height={14} width={14} src={'/sun.svg'} />
      </Button>
    </div>
  )
}

export default ThemeToglle
