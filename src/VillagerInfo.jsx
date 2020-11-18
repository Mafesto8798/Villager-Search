import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'


export default function VillagerInfo() {
    const {villagerID} = useParams()
    const [villagerInfo,setVillagerInfo] = useState()
    const [name,setName] = useState()
    const [image,setImage] = useState()
    const [saying,setSaying] = useState()
    const [species,setsSpecies] = useState()
    const [bubbleClr,setBubbleClr] = useState('')
    const [textClr,setTextClr] = useState('')
    const [hobby,setHobby] = useState('')
    const [currentPageUrl,setCurrentPageUrl] = useState(`http://acnhapi.com/v1a/villagers/${villagerID}`)

useEffect(() => {
    axios.get(currentPageUrl).then(res => {
        setVillagerInfo(res.data)
        setName(res.data.name["name-USen"])
        setImage(res.data.image_uri)
        setSaying(res.data.saying)
        setsSpecies(res.data.species)
        setBubbleClr(res.data["bubble-color"])
        setTextClr(res.data["text-color"])
        setHobby(res.data.hobby)
    })
},[currentPageUrl])

const villagerStyles = {
    background:bubbleClr,
    color: textClr
}

console.log(villagerInfo)

    return (
        <>
        <Link to="/home">
        <button>Back</button>
        </Link>
        <div className="villager-info-card">
            <div>
                <img src={image} alt="portrait"/>
                <h1 style={villagerStyles}>{name} the {species}</h1>
            </div>
            <section style={villagerStyles}>
                <h3>Hobby: {hobby} </h3>
                <h3  id="saying">Saying: {saying}</h3>
            </section>
        </div>
        </>
    )
}
