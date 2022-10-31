import React, { useReducer } from 'react'
import {MyCard} from '../components/MyCard'
import landingPageStyle from '../styles/LandingPage.module.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { landingPageReducer, landingPageState } from '../reducers/LandingPageReducer';

export const LandingPage = () => {

  const [state, dispatch] = useReducer(landingPageReducer, landingPageState);

  // state.todo = '' > after update using dispatch > 'no longer empty'
  // landingPageState.todo = ''

  /**
   * what is useState?
   * - useState is a hook 
   * - it is used to hold your value that you want to mutate
  */

  // THIS IS CANNOT
  // let x = 1
  // x = 2
  // You can't MUTATE variable

  return (
    <div className={landingPageStyle.container}>

      <div style={{marginTop: 30, marginBottom: 30, width: 500 }}>
        
        <TextField 
          id="outlined-basic" 
          label="Todo" 
          variant="outlined" 
          type="text" 
          value={state.todo} 
          size="normal"
          onChange={(evt) => dispatch({ type: 'TODO', payload: { todo: evt.target.value } })}
          style={{ width: '81%' }}
        />
      
        <Button 
          variant="contained" 
          size="large" 
          sx={{ marginLeft: 1, height: 53 }} 
          onClick={() => dispatch({ type: 'SAVE' })}
        >
          Save
        </Button>
      </div>

      {
        state.todoList.map((each, index) => (
          <MyCard 
            key={index} 
            index={index} 
            description={each} 
            dispatch={dispatch}
          />
        ))
      }

      {/* {
        doneTodoList.length > 0 &&
        <>
          <h3>Done List</h3>
          {
            doneTodoList.map((each, index) => (
              <MyCard key={index} index={index} description={each} deleteFunc={deleteDoneTodo} doneFunc={doneTodo} />
            ))
          }
        </>
      } */}

      {/* 
      1. Self closing jika tiada children, 
      2. jika ada children jagan self close */}
      {/* <MyCard description="I am happy" editFunc={clickMe} deleteFunc={clickMe}/> */}

      {/* <MyCard description="this class is awesome" editFunc={clickMe} deleteFunc={clickMe} /> */}
    </div>
  )
}
