import { useState } from "react";
import GrandPere from "./GrandPere";

export default function ArriereGrandPere(props: {prenom: string, onChangePrenom: (newPrenom: string) => void}){
return (
<div className="ArriereGrandPere">
    <h2>ArriereGrandPere: {props.prenom}</h2>
    <GrandPere prenom={props.prenom} onChangePrenom={props.onChangePrenom} />
</div>)
}