import { useState } from "react";
import Pere from "./Pere";

export default function GrandPere(props: {prenom: string, onChangePrenom: (newPrenom: string) => void}){
    return (
    <div className="GrandPere">
    <button onClick={() => props.onChangePrenom("Leslie")}>Change prenom</button>

      <h2>GrandPere: {props.prenom}</h2>
      <Pere prenom={props.prenom} />
    </div>)
    }