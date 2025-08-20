import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <h1>Young's Wedding 2026</h1>
        <img src="public\placeholder.jpg" alt="Sophia" />
        <div className="challenge-container">
          <h2>Picture Challenge</h2>
          <p>Take a picture with all the groomsmen wearing a woman's hat</p>
        </div>
        
        <div className="upload-container">
          <button>Upload</button>
          <p>You've successfully uploaded!</p>
        </div>
      </div> 
    </>
  )
}

export default App
