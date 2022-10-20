import React, { useState } from 'react'
import {MyCard} from '../components/MyCard'
import landingPageStyle from '../styles/LandingPage.module.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LandingPage = () => {

  /**
   * what is useState?
   * - useState is a hook 
   * - it is used to hold your value that you want to mutate
  */

  // THIS IS CANNOT
  // let x = 1
  // x = 2
  // You can't MUTATE variable

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [doneTodoList, setDoneTodoList] = useState([])

  const onSave = () => {

    if(todo === '') {
      return 
    }

    // using spread operator to deep clone
    const cloneTodoList = [...todoList]

    cloneTodoList.push(todo)

    setTodoList(cloneTodoList)

    setTodo('')
  }

  const deleteTodo = (index) => {
    console.log('get index: ', index)
    const cloneTodoList = [...todoList]
    
    cloneTodoList.splice(index, 1)

    setTodoList(cloneTodoList)
  }

  const doneTodo = (index) => {
    console.log('index:', index)
    
    const doneTodo = todoList[index]
    
    // add into doneTodoList
    const cloneDoneTodoList = [...doneTodoList]
    cloneDoneTodoList.push(doneTodo)
    setDoneTodoList(cloneDoneTodoList)
    
    // delete from original list
    deleteTodo(index)
  }

  const deleteDoneTodo = (index) => {
    console.log('get index: ', index)
    const cloneTodoList = [...doneTodoList]
    
    cloneTodoList.splice(index, 1)

    setDoneTodoList(cloneTodoList)
  }

  const editTodo = (index) => {
    // get the clicked value and set to todo variable
    setTodo(todoList[index])
    // delete from todo list
    deleteTodo(index)
  }


  return (
    <div className={landingPageStyle.container}>

      <div style={{marginTop: 30, marginBottom: 30}}>
        
        <TextField 
          id="outlined-basic" 
          label="Todo" 
          variant="outlined" 
          type="text" 
          value={todo} 
          size="normal"
          onChange={(evt) => setTodo(evt.target.value)} 
        />
      
        <Button variant="contained" size="large" sx={{ marginLeft: 1, height: 53 }} onClick={onSave}>Save</Button>
      </div>

      {
        todoList.map((each, index) => (
          <MyCard key={index} index={index} description={each} deleteFunc={deleteTodo} doneFunc={doneTodo} editFunc={editTodo} />
        ))
      }

      {
        doneTodoList.length > 0 &&
        <>
          <h3>Done List</h3>
          {
            doneTodoList.map((each, index) => (
              <MyCard key={index} index={index} description={each} deleteFunc={deleteDoneTodo} doneFunc={doneTodo} />
            ))
          }
        </>
      }

      {/* 
      1. Self closing jika tiada children, 
      2. jika ada children jagan self close */}
      {/* <MyCard description="I am happy" editFunc={clickMe} deleteFunc={clickMe}/> */}

      {/* <MyCard description="this class is awesome" editFunc={clickMe} deleteFunc={clickMe} /> */}
    </div>
  )
}
