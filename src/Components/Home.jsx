import React,{useContext} from 'react'
import { LoggedInContext } from './LoggedInContext'
import {Redirect} from 'react-router-dom';
import HomePage from './HomePage'
export default function Home() {
const [currentUser] = useContext(LoggedInContext);

    return currentUser && currentUser.username ? (
        <HomePage />
    ) : (
        <Redirect to="/" />
    )
}
