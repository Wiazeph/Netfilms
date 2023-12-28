import React from 'react'

type Props = {
  width?: number
  height?: number
}

const Skeleton = (props: Props) => {
  return (
    <div
      className="Skeleton"
      style={{ width: props.width, height: props.height }}
    />
  )
}

export default Skeleton
