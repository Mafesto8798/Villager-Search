import React,{useRef, useContext} from 'react'
import {UserContext} from './UserContext'
import {Link} from 'react-router-dom'
import { LoggedInContext } from './LoggedInContext'

export default function LoginPage() {
    const [users,setUsers] = useContext(UserContext)
    const [currentUser,setCurrentUser] = useContext(LoggedInContext)
    const userRef=useRef()
    const passwordRef=useRef()



    function handleSubmit(e){
        e.preventDefault()
        const user = users.find(user => user.username.toLowerCase() === userRef.current.value.toLowerCase() && user.password === passwordRef.current.value)
        if(!user){
            alert("User not found")
            return
        }
        setCurrentUser(user)
        alert(`Welcome ${user.username}!`)
    }

    return (
        <div className="login-form">
            <div>
                <img className="logo" src="https://animal-crossing.com/assets/img/home/logo.png" alt="logo"/>
            </div>
            <form onSubmit={handleSubmit}>
                <input ref={userRef} type="text" placeholder="Username"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <div className="btn-container">
                    <button type="submit" className="button">Login</button>
                    <Link to="/create-account">
                        <button className="button">Sign up</button>
                    </Link>
                </div>
            </form>
            <h1>Default user: Admin <br />
                Password:12345</h1>
        </div>
    )
}
