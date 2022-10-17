import React, { Fragment } from 'react'
import myCardStyle from '../styles/MyCard.module.css'
import newCardStyle from '../styles/NewCard.module.css'

// de-structure
export const MyCard = (props) => {

  const { children } = props

  return (
    <div className={myCardStyle.container}>
      <div>This is Card component</div>
      {children}
    </div>
  )
}
