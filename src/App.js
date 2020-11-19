import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom'
import React,{useState} from 'react'
import LoginPage from './LoginPage'
import CreateAccount from './CreateAccount'
import Home from './Home'
import Contact from './Contact'
import Nav from './Nav'
import Favs from './Favs'
import VillagerInfo from './VillagerInfo'
import {UserContext} from './UserContext'
import {FavoritesContext} from './FavoritesContext'
import {LoggedInContext} from './LoggedInContext'

function App() {
  const [users,setUsers] = useState([
    {
     username:"Admin",
     password:"12345",
    }
  ])
  const [currentUser,setCurrentUser] = useState()
  const [favs,setFavs] = useState([])

  return (
    <Router>
    <UserContext.Provider value={[users,setUsers]}>
    <Route path="/create-account" component={CreateAccount} />
    <LoggedInContext.Provider value={[currentUser,setCurrentUser]}>
    <Nav />
    <Route path="/" exact component={LoginPage} />
    {currentUser && currentUser.username  && (
      <>
      <Redirect to="/home" />
      </>
    )}
    <Route path="/home" component={Home} />
    </LoggedInContext.Provider>
    </UserContext.Provider>
    <FavoritesContext.Provider value={[favs,setFavs]}>
    <Route path="/:villagerID/info"  component={VillagerInfo} />
    <Route path="/favs"  component={Favs} />
    </FavoritesContext.Provider>
    <Route path="/contact" component={Contact} />
    </Router>
  )
}

export default App;
