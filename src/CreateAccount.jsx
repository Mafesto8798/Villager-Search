import React, {useContext,useRef} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from './UserContext'

export default function CreateAccount() {
    const [users,setUsers] = useContext(UserContext)
    const userRef = useRef()
    const passwordRef = useRef()
    const passwordCheckRef = useRef()
    
    function handleSubmit(e){
        e.preventDefault()
        if(userRef.current.value.length < 5 || passwordRef.current.value.length < 5){
            alert("Username and password must be at least 5 characters long")
            return
        } 
        const passwordMatch = passwordRef.current.value === passwordCheckRef.current.value
        if(!passwordMatch){
            alert("Passwords must match")
            return
        }
        const newUser = {
            username: userRef.current.value,
            password:passwordRef.current.value
        }
        setUsers([...users,newUser])
        alert("Account created successfully!")
        userRef.current.value = ''
        passwordRef.current.value = ''
        passwordCheckRef.current.value = ''
    }



    return (
        <div>
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit}>
                <input ref={userRef} type="text" placeholder="Username"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <input ref={passwordCheckRef} type="password" placeholder="Repeat Password"/>
                <section>
                    <Link to="/">
                     <button>Return to login</button>
                     </Link>
                     <button type="submit">Create Account</button>
                </section>
            </form>
        </div>
    )
}
