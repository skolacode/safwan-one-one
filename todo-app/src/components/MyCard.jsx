import React from 'react'

// de-structure
export const MyCard = (props) => {

  const { children } = props

  return (
    <>
      <div>This is Card component</div>
      {children}
    </>
  )
}