import React from 'react'
import Logo from '@/components/header/logo'
import NavBar from '@/components/header/navbar'
import styles from './styles.module.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={`${styles.header} h-16 bg-red-500`}>
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        <NavBar />
      </div>
    </header>
  )
}

export default Header
