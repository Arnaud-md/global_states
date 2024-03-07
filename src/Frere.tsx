// import { useState } from "react";

// export default function Frere(props: {prenom: string}){
//     const [prenom, setPrenom] = useState("Geoffroy");
//     return (
//     <div className="Frere">
//       <h2>Frere: {props.prenom}</h2>
//     </div>)
//     }
import { useContext, useState } from "react";
import { FamilyContext } from "./App";

export default function Frere(){
    const { prenom, setPrenom } = useContext(FamilyContext)
    const [newPrenom, setNewPrenom] = useState(prenom)

    const handleChangePrenom = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPrenom(e.target.value)
    }

    const handleUpdatePrenom = () => {
        setPrenom(newPrenom)
    }

    return (
        <div>
        <h1>Frère : {prenom} </h1>
        <input type="text" value={newPrenom} onChange={handleChangePrenom} />
        <button onClick={handleUpdatePrenom}>Mettre à jour le prénom</button>
        </div>
    );
}