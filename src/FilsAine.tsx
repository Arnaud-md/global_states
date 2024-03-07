import { useState } from "react";

export default function FilsAine(props: {prenom: string}){
    return (
    <div className="FilsAine">
      <h2>FilsAine: {props.prenom}</h2>
    </div>)
    }