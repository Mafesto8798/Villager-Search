import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function VillagerInfo() {
  const { villagerID } = useParams();
  const [villagerInfo, setVillagerInfo] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [saying, setSaying] = useState();
  const [species, setsSpecies] = useState();
  const [bubbleClr, setBubbleClr] = useState("");
  const [textClr, setTextClr] = useState("");
  const [hobby, setHobby] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [personality, setPersonality] = useState("");
  const [birthday, setBirthday] = useState("");
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://acnhapi.com/v1a/villagers/${villagerID}`
  );

  useEffect(() => {
    axios.get(currentPageUrl).then((res) => {
      setVillagerInfo(res.data);
      setName(res.data.name["name-USen"]);
      setImage(res.data.image_uri);
      setSaying(res.data.saying);
      setsSpecies(res.data.species);
      setBubbleClr(res.data["bubble-color"]);
      setTextClr(res.data["text-color"]);
      setHobby(res.data.hobby);
      setCatchPhrase(res.data["catch-phrase"]);
      setPersonality(res.data.personality);
      setBirthday(res.data["birthday-string"]);
    });
  }, [currentPageUrl]);

  const villagerStyles = {
    background: bubbleClr,
    color: textClr,
  };

  console.log(villagerInfo);

  return (
    <>
      <Link className="links" to="/home">
        <div className="back-button">Back</div>
      </Link>
      <div className="villager-info-card">
        <div className="portrait">
          <img src={image} alt="portrait" />
        </div>
        <section className="villager-bio" style={villagerStyles}>
          <div>
            <h1 style={{ textalign: "center" }}>
              {name} the {species}
            </h1>
            <p>Birthday: {birthday}</p>
            <h3>Hobby: {hobby} </h3>
            <h3 id="saying">Saying: {saying}</h3>
          </div>
          <div>
            <h3>Catch-phrase: "{catchPhrase}"</h3>
            <h3>Personality: {personality}</h3>
          </div>
        </section>
      </div>
    </>
  );
}
