import React from 'react'
import myCardStyle from '../styles/MyCard.module.css'

import PropTypes from 'prop-types';

// de-structure



export const MyCard = (props) => {

  const { children, content, clickMeFunc } = props

  return (
    <div className={myCardStyle.container}>
      <div>This is Card component</div>
      <p onClick={clickMeFunc}>{content}</p>
      {children}
    </div>
  )
}

MyCard.propTypes = {
  content: PropTypes.string.isRequired,
  isEditable: PropTypes.bool
}
