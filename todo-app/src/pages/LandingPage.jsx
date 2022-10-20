import React, { useState } from 'react'
import { useEffect } from 'react'
import {MyCard} from '../components/MyCard'

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

  const onSave = () => {

    if(todo === '') {
      return 
    }

    // spread operator
    const cloneTodoList = [...todoList]

    cloneTodoList.push(todo)

    setTodoList(cloneTodoList)

    setTodo('')
  }


  return (
    <div>
      <input type="text" value={todo} onChange={(evt) => setTodo(evt.target.value)} />
      <button onClick={onSave}>Save</button>

      {
        todoList.map((each, index) => (
          <MyCard key={index} description={each} />
        ))
      }

      {/* 
      1. Self closing jika tiada children, 
      2. jika ada children jagan self close */}
      {/* <MyCard description="I am happy" editFunc={clickMe} deleteFunc={clickMe}/> */}

      {/* <MyCard description="this class is awesome" editFunc={clickMe} deleteFunc={clickMe} /> */}
    </div>
  )
}
