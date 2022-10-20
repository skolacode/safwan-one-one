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


  return (
    <div>
      <input type="text" value={todo} onChange={(evt) => setTodo(evt.target.value)} />
      <button onClick={onSave}>Save</button>

      {
        todoList.map((each, index) => (
          <MyCard key={index} index={index} description={each} deleteFunc={deleteTodo} doneFunc={doneTodo} />
        ))
      }


      <h3>Done List</h3>
      {
        doneTodoList.map((each, index) => (
          <MyCard key={index} index={index} description={each} deleteFunc={deleteTodo} doneFunc={doneTodo} />
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
