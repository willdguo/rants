// speedrun time
import { useState, useEffect } from "react";
import Login from "./components/Login";


function App() {
  // const [rants, setRants] = useState([])
  const [user, setUser] = useState(null)


  return (
    <div className = {`container ${user === null ? 'new' : ''}`}>

      {user !== null
        ? <h1> Hello Ranter! </h1>
        : <Login user = {user} setUser = {setUser} />
      }
    </div>
  )
}

export default App;
