import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Villagers from './Villagers'

export default function HomePage() {
    const [currentPageUrl,setCurrentPageUrl] = useState("http://acnhapi.com/v1a/villagers/");
    const [villagers,setVillagers] = useState([])
    const [searchTerm,setSearchTerm] = useState('')



useEffect(() => {
    axios.get(currentPageUrl).then((res)=> {
    setVillagers(res.data.map(villager => villager))
    })

},[])

function updateSearch(e){
    setSearchTerm(e.target.value)
}

function dynamicSearch(){
    return villagers.filter(villager => villager.name["name-USen"].toLowerCase().includes(searchTerm.toLowerCase()))
}



    return(
        <>
        <div className="search-bar">
            <input type="text" placeholder="Search Villagers..." onChange={updateSearch} value={searchTerm}/>
        </div>
        <div>
            <Villagers villagers={dynamicSearch()} />
        </div>
        </>
    )
}
