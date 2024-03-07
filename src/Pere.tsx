import { useState } from "react";
import FilsAine from "./FilsAine";
import Frere from "./Frere";

export default function Pere(props: {prenom: string}){
    return (
    <div className="Pere">
      <h2>Pere: {props.prenom}</h2>
      <FilsAine prenom={props.prenom} />
      <Frere prenom={props.prenom} />
    </div>)
    }