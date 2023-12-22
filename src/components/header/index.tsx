import React from 'react'
import NavBar from './navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='container mx-auto flex items-center justify-between'>
        <div className="Logo">Logo</div>
        <NavBar />
    </div>
  )
}

export default Header