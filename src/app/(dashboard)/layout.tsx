import Menu from '@/ui/Menu'
import type { Metadata } from 'next'
import styles from './dashboard.module.scss'
import InputSearch from '@/ui/InputSearch'
import ThemeToglle from '@/ui/themeToggle'
import Profile from '@/ui/Profile'

export const metadata: Metadata = {
  title: 'soundstream',
  description: 'Aplicativo de música',
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div className={styles.dashboard}>
        <Menu />
        <div className={styles.containerMain}>
          <div>
            <InputSearch placeholder="PESQUISA..." />
            <div>
            <ThemeToglle />
            <Profile/>
            </div>
          </div>
          {children}
        </div>
      </div>
    )
}
