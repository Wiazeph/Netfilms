import React from 'react'
import LogoComponent from '@/components/header/logo'
import NavBarComponent from '@/components/header/nav-bar'

type Props = {}

const HeaderLayout = (props: Props) => {
  return (
    <div className="container flex items-center justify-between h-16">
      <LogoComponent />

      <NavBarComponent />
    </div>
  )
}

export default HeaderLayout
