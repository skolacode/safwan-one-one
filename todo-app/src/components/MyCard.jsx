import React from 'react'
import myCardStyle from '../styles/MyCard.module.css'
import Button from '@mui/material/Button';

export const MyCard = (props) => {

  const { description, deleteFunc, editFunc, index, doneFunc, dispatch } = props

  return (
    <div className={myCardStyle.container}>
      <p>{index+1} - {description}</p>

      <div className={myCardStyle.btnContainer}>
        <Button size="small" variant="contained" onClick={() => doneFunc(index)}>
          Done
        </Button>
        <Button size="small" variant="outlined" style={{ marginLeft: 10 }} onClick={() => editFunc(index)}>
          Edit
        </Button>
        <Button 
          size="small" 
          color='error' 
          style={{ marginLeft: 10 }} 
          onClick={() => dispatch({ type: 'DELETE_TODO', payload: {arrIndex: index} })}
        >
          Delete
        </Button>
      </div>
    </div>
  )
}
