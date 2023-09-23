/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is a new react app by Mayank saini</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          using userState {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
