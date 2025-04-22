import React from 'react'

import ContainerMusic from './Main/ContainerMusic'
import InputSearch from '@/ui/inputSearch'
import ThemeToglle from '@/ui/themeToggle'
import Menu from '@/ui/menu'
import styles from './dashboardComponents.module.scss'
import MainDashboard from './Main'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Menu />
      <div className={styles.containerMain}>
        <div>
          <InputSearch placeholder="PESQUISA..." />
          <ThemeToglle />
        </div>
        <MainDashboard />
      </div>
    </div>
  )
}

export default Dashboard
