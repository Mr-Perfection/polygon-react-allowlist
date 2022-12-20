import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AllowlistForm from './components/AllowlistForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AllowlistForm />
    </div>
  )
}

export default App
