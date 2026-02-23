import React from 'react'
import Left from './Home/left/left'
import Right from './Home/right/right'
import Logout from './Home/left1/Logout'

function App() {
  return (
    <>
  
    <div className='flex h-screen'>
      <Logout></Logout>
      <Left></Left>
      <Right></Right>
    </div>

    </>
  )
}

export default App