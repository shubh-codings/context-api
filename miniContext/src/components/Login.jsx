import {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleLogin = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      
    </div>
  )
}
