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

  const [firstName, setFirstName] = useState("-")

  const getName = (evt) => setFirstName(evt.target.value)

  useEffect(() => {
    console.log("i run")
    // Dependencies
  },[firstName])

  const clickMe = () => {
    alert('I am clicked')
  }

  return (
    <div>
      <h1>Nama saya ialah: {firstName}</h1>

      <input type="text" onChange={getName} />

      {/* 
      1. Self closing jika tiada children, 
      2. jika ada children jagan self close */}
      <MyCard content="hi" clickMeFunc={clickMe}>
        <h1>I am inside a card</h1>
      </MyCard>

      <MyCard clickMeFunc={clickMe}/>
    </div>
  )
}
