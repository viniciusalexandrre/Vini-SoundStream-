import Link from 'next/link'
import React from 'react'
import styles from './menu.module.scss'
import Button from '../Button'
import { buttonData } from './data/data'

const Menu = () => {
  return (
    <div className={styles.containerMenu}>
      <h1>Projeto de teste</h1>
      <div>
        {buttonData.map((props) => (
          <Button key={props.id}>
            <Link href={props.Link}>{props.text}</Link>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Menu
