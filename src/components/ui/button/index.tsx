import React from 'react'

type Props = {
  children: any
  classes?: string
}

const Button = (props: Props) => {
  return (
    <button
      className={`${
        props.classes ? props.classes : ''
      } flex items-center justify-center rounded-full h-16 select-none`}
    >
      {props.children}
    </button>
  )
}

export default Button
