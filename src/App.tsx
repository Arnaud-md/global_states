import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArriereGrandPere from './ArriereGrandPere'

import { useContext } from 'react';
import { LevelContext } from './LevelContext.tsx';
import Heading from './Heading.tsx'



function App() {
  const [count, setCount] = useState(0)
  const [prenomDeLaFamille, setPrenomDeLaFamille] = useState("Arnaud");
  return (
    <>
        <ArriereGrandPere prenom={prenomDeLaFamille} onChangePrenom={(prenom) => {setPrenomDeLaFamille(prenom)}}/>
        <Heading level={1}>First-heading</Heading>
    </>
  )
}

export default App
