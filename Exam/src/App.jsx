import { useState } from 'react'
import './App.css'
import BasketPage from './components/BasketPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BasketPage/>
       </div>
    </>
  )
}

export default App
