import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArriereGrandPere from './ArriereGrandPere'

function App() {
  const [count, setCount] = useState(0)
  const [prenomDeLaFamille, setPrenomDeLaFamille] = useState("Arnaud");
  return (
    <>
        <ArriereGrandPere prenom={prenomDeLaFamille} onChangePrenom={(prenom) => {setPrenomDeLaFamille(prenom)}}/>
    </>
  )
}

export default App
