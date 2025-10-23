import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-brandBlue text-3xl font-bold">
      Tailwind Custom Color Works! 🚀
    </div>
    </>
  )
}

export default App
