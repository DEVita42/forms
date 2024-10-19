import { useState } from 'react'
import './App.css'
import InteractiveWelcome from './InteractiveWelcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InteractiveWelcome></InteractiveWelcome>
    </>
  )
}

export default App
