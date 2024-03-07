// import { useState } from "react";
// import Pere from "./Pere";

// export default function GrandPere(props: {prenom: string, onChangePrenom: (newPrenom: string) => void}){
//     return (
//     <div className="GrandPere">
//     <button onClick={() => props.onChangePrenom("Leslie")}>Change prenom</button>

//       <h2>GrandPere: {props.prenom}</h2>
//       <Pere prenom={props.prenom} />
//     </div>)
//     }
import { useContext } from "react";
import Pere from "./Pere";
import { FamilyContext } from "./App";

export default function GrandPere() {
    const { prenom } = useContext(FamilyContext)

    return (
        <div>
        <h1>Grand-père : {prenom }</h1>
        <Pere />
        </div>
    );
}