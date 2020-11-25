import React from 'react'
import {Link} from 'react-router-dom'

export default function Villager({villager}) {
    const villagerName = villager.name["name-USen"];
    const icon = villager.icon_uri;
    const characterID = villager.id;

    console.log(villager)
    
    return (
        
        <div className="villager-card">
            <section>
                <h1>{villagerName}</h1>
                <Link to={`/${characterID}/info`}>
                <img  className="villager-card-img"src={icon} alt="icon"/>
                </Link>
            </section>
        </div>
        
    )
}
