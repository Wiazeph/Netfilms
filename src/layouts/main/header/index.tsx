import React from 'react'
import Logo from '@/components/header/logo'
import NavBar from '@/components/header/nav-bar'
import styles from './styles.module.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={`Header ${styles.header}`}>
      <div className="container mx-auto flex items-center justify-between h-16">
        <Logo />

        <NavBar />
      </div>
    </header>
  )
}

export default Header
