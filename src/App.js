import { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Login from "./components/Login";
import Feed from "./components/Feed"
import CreateRant from "./components/CreateRant"
import rantsService from './services/rants'
import logoutIcon from './icons/logout.png'
import shareIcon from './icons/share.png'
import UserProfile from "./components/UserProfile";


function App() {
  const [user, setUser] = useState(null)

  const [desc, setDesc] = useState('YAYAYAYAITWORKS')
  const [finalDesc, setFinalDesc] = useState('')

  const n = useRef(0)
  const t = useRef(300)
  const flickers = 1
  const [copied, setCopied] = useState(false)

  const [search, setSearch] = useState('')
  const [create, setCreate] = useState(false)
  const [profile, setProfile] = useState('')
  const navigate = useNavigate()


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')

    if(loggedUserJSON) {
      const savedUser = JSON.parse(loggedUserJSON)
      setUser(savedUser)
      rantsService.setToken(savedUser.token)
      // tasksService.setToken(savedUser.token)
    }
  }, [])

  useEffect(() => {
    
    const timer = setTimeout(() => {

      n.current = n.current + 1
      t.current = n.current < flickers || n.current - flickers > finalDesc.length ? 450 : 60

      if(n.current < flickers){
        setDesc(['|','\u00A0'][n.current % 2])
      } else if (n.current - flickers <= finalDesc.length){
        setDesc(finalDesc.substring(0, n.current - flickers) + ' \u00A0')
      } else if (n.current - 2 * flickers <= finalDesc.length) {
        setDesc(`${finalDesc} ${[' ', '\u00A0'][n.current % 2]}`)
      }

    }, t.current)

    return () => clearTimeout(timer)

  }, [desc, finalDesc])

  useEffect(() => {

    if(user){
      setFinalDesc(`Welcome, ${user.username}`)
      setDesc('')
      n.current = 0
    }

  }, [user])

  const logout = () => {
    setUser(null)
    window.localStorage.clear()
  }

  const handleCopyLink = () => {
    const linkToCopy = window.location.href

    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        setCopied(true)

        setTimeout(() => {
          setCopied(false)
        }, 2000) // Reset the "copied" state after 2 seconds

      }).catch((error) => {
        console.error('Failed to copy link:', error)
      })
  }

  const main = () => (
    <div className = "main-container">

      <div className = "toolbar">
        <i className = "description" onClick = {() => setCreate(false)}> {desc} </i>

        <div className = "search">
          <input placeholder = "Filter Rants" value = {search} onChange = {(e) => setSearch(e.target.value)} onKeyDown = {(e) => {if(e.key === "Enter"){console.log(search)}}} />
        </div>

        <div className = "toolbar-options">
          <button onClick={handleCopyLink}> <img src = {shareIcon} alt = "share" /> </button>
          <button onClick = {logout}> <img src = {logoutIcon} alt = "logout" /> </button>
          <p> {copied ? 'Link Copied!' : null} </p>
        </div>
      </div>

      
      <div className = "content">

        <div className = "sidebar">
          <div className = "nav">
            <p onClick = {() => {navigate('/profile'); setProfile(user.username); setCreate(false)}} > Profile </p>
          </div>
          <div className = "nav">
            <p onClick = {() => {navigate('/feed'); setCreate(false); setProfile('')}}> Explore </p>
          </div>
          <div className = "nav">
            <p onClick = {() => {navigate('/create'); setCreate(true)}}> Create </p>
          </div>
    
        </div>

        <div className = "main-content">

          {create
            ? <CreateRant />
            : profile !== ""
            ? <UserProfile username = {profile} search = {search} />
            : <Feed search = {search} setProfile = {setProfile}/>
          }

        </div>


      </div>

    </div>
  )


  return (
    <div className = {`container ${user === null ? 'new' : ''}`}>
      <Routes>
        <Route path = "/" element = {<Navigate replace to = "/login" />} />
        <Route path = "/login" element = {user === null ? <Login user = {user} setUser = {setUser} /> : <Navigate replace to = {`/feed`} />} />
        <Route path = "/feed" element = {user === null ? <Login user = {user} setUser = {setUser} /> : main() } />
        <Route path = "/create" element = {user === null ? <Login user = {user} setUser = {setUser} /> : main() } />
        <Route path = "/profile" element = {user === null ? <Login user = {user} setUser = {setUser} /> : main() } />
        <Route path = "*" element = {<Navigate to = "/login"/>} />
      </Routes>
    </div>
  )
}

export default App;
