import React from 'react'

import InputSearch from '@/ui/InputSearch'
import Menu from '@/ui/Menu'
import ThemeToglle from '@/ui/ThemeToggle'
import ContainerMusic from './Main/ContainerMusic'

const Dashboard = () => {
  return (
    <div>
      <Menu />
      <InputSearch placeholder="PESQUISA..." />
      <ThemeToglle />
      <ContainerMusic />
    </div>
  )
}

export default Dashboard
