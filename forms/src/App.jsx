import { useState } from 'react'
import './App.css'
import InteractiveWelcome from './InteractiveWelcome'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InteractiveWelcome></InteractiveWelcome>
      <Login></Login>
    </>
  )
}

export default App
