import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
      <div className='relative w-full h-screen bg-zinc-800 font-[system-ui, Avenir, Helvetica, Arial, sans-serif]'>

        <Background />

        <Foreground />

      </div>

  )
}

export default App