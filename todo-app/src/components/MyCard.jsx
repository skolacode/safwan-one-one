import React from 'react'
import myCardStyle from '../styles/MyCard.module.css'

export const MyCard = (props) => {

  const { description, deleteFunc, editFunc, viewFunc, index } = props

  return (
    <div className={myCardStyle.container}>
      <p>{description}</p>

      <button onClick={viewFunc}>
        Done
      </button>
      <button style={{ marginLeft: 10 }} onClick={editFunc}>
        Edit
      </button>
      <button style={{ marginLeft: 10 }} onClick={() => deleteFunc(index)}>
        Delete
      </button>
    </div>
  )
}
