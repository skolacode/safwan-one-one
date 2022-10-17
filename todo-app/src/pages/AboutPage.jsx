import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>This is ABOUT page</h1>

      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}