import React from 'react'
import myCardStyle from '../styles/MyCard.module.css'

export const MyCard = (props) => {

  const { description, deleteFunc, editFunc, index, doneFunc } = props

  return (
    <div className={myCardStyle.container}>
      <p>{description}</p>

      <button onClick={() => doneFunc(index)}>
        Done
      </button>
      <button style={{ marginLeft: 10 }} onClick={() => editFunc(index)}>
        Edit
      </button>
      <button style={{ marginLeft: 10 }} onClick={() => deleteFunc(index)}>
        Delete
      </button>
    </div>
  )
}
