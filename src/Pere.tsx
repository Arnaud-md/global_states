// import { useState } from "react";
// import FilsAine from "./FilsAine";
// import Frere from "./Frere";

// export default function Pere(props: {prenom: string}){
//     return (
//     <div className="Pere">
//       <h2>Pere: {props.prenom}</h2>
//       <FilsAine prenom={props.prenom} />
//       <Frere prenom={props.prenom} />
//     </div>)
//     }
import { useContext } from "react";
import Frere from "./Frere";
import { FamilyContext } from "./App";

export default function Pere() {
    const prenomP = useContext(FamilyContext).prenom
    return (
        <div>
            <h1>Père : {prenomP} </h1>
            <Frere />
        </div>
    );
}