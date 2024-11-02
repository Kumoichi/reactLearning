import React, { useContext } from 'react'
import ComponentD from './ComponentD.js'
import { UserContext } from './ComponentA.js'


const ComponentC = () => {
  const user = useContext(UserContext)
  return (
    <div className='box'>
    <h1>ComponentC</h1>
    <h2>{`Hello again ${user}`}</h2>
    <ComponentD />
    </div>

  )
}

export default ComponentC