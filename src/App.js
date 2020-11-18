import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom'
import React,{useState} from 'react'
import LoginPage from './LoginPage'
import CreateAccount from './CreateAccount'
import Home from './Home'
import VillagerInfo from './VillagerInfo'
import {UserContext} from './UserContext'
import {LoggedInContext} from './LoggedInContext'

function App() {
  const [users,setUsers] = useState([
    {
     username:"Admin",
     password:"1209qwpo",
    }
  ])
  const [currentUser,setCurrentUser] = useState()

  return (
    <Router>
    <UserContext.Provider value={[users,setUsers]}>
    <Route path="/create-account" component={CreateAccount} />
    <LoggedInContext.Provider value={[currentUser,setCurrentUser]}>
    <Route path="/" exact component={LoginPage} />
    {currentUser && currentUser.username  && (
      <Redirect to="/home" />
    )}
    <Route path="/home" component={Home} />
    </LoggedInContext.Provider>
    </UserContext.Provider>
    <Route path="/:villagerID/info"  component={VillagerInfo} />
    </Router>
  )
}

export default App;
