import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SimenProfil from './components/SimenProfil'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      Gruppe UIN_10
    </header>

    <main>
    <SimenProfil />
    </main>
    </>
  )
}

export default App
