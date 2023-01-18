import React, { useContext } from 'react'

import { useGlobalContext } from './Context'  
const Home = () => {
  const name=useGlobalContext(); 
  return (
    <div>Home {name}</div>
  )
}

export default Home