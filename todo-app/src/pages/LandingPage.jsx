import React, { useState } from 'react'

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

  return (
    <div>
      <h1>Nama saya ialah: {firstName}</h1>

      <input type="text" onChange={ (evt) => setFirstName(evt.target.value) } />
    </div>
  )
}
