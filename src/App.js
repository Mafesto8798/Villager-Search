import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom'
import React,{useState} from 'react'
import LoginPage from './Components/LoginPage'
import CreateAccount from './Components/CreateAccount'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Nav from './Components/Nav'
import VillagerInfo from './Components/VillagerInfo'
import {UserContext} from './Components/UserContext'
import {LoggedInContext} from './Components/LoggedInContext'

function App() {
  const [users,setUsers] = useState([
    {
     username:"Admin",
     password:"12345",
    }
  ])
  const [currentUser,setCurrentUser] = useState()

  return (
    <Router>
    <Nav />
    <UserContext.Provider value={[users,setUsers]}>
    <Route path="/create-account" component={CreateAccount} />
    <LoggedInContext.Provider value={[currentUser,setCurrentUser]}>
    <Route path="/" exact component={LoginPage} />
    {currentUser && currentUser.username  && (
      <>
      <Redirect to="/home" />
      </>
    )}
    <Route path="/home" component={Home} />
    </LoggedInContext.Provider>
    </UserContext.Provider>
    <Route path="/:villagerID/info"  component={VillagerInfo} />
    <Route path="/contact" component={Contact} />
    </Router>
  )
}

export default App;
