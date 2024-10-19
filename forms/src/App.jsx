import { useState } from 'react'
import './App.css'
import InteractiveWelcome from './InteractiveWelcome'
import Login from './Login'
import UncontrolledLogin from './UncontrolledLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InteractiveWelcome></InteractiveWelcome>
      <Login onLogin={Login}></Login>
      <UncontrolledLogin onLogin={Login}></UncontrolledLogin>
    </>
  )
}

export default App
