import { useState } from "react"

export default function TimerFunc() {
    const [date, setDate] = useState(new Date())
    function tick() {
      setDate(new Date())
    }
    setInterval(() => tick(), 1000)
    return (
        <div className='App'>
            <h1>Functional Component</h1>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
    
  }