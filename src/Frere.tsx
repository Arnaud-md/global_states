import { useState } from "react";

export default function Frere(props: {prenom: string}){
    const [prenom, setPrenom] = useState("Geoffroy");
    return (
    <div className="Frere">
      <h2>Frere: {props.prenom}</h2>
    </div>)
    }