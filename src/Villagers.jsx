import React from 'react'
import Villager from './Villager'

export default function Villagers({villagers}) {

    return (
        <div>
            {villagers.map(villager => (
                <Villager villager = {villager} />
            ))}
        </div>
    )
}
