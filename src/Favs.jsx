import React,{useContext,useState} from 'react'
import FavVillager from './FavVillager'
import {FavoritesContext} from './FavoritesContext'

export default function Favs() {
    const [favs,setFavs] = useContext(FavoritesContext)

    return (
        <div>
            <div>
                <h1>Coming Soon!!</h1>
            </div>
        </div>
    )
}
