import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCv from './UserCv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='main'>
         <UserCv/>

      </div>
    </>
  )
}

export default App
