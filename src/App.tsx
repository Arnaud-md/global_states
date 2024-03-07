import { createContext, useState } from 'react'
import './App.css'
import ArriereGrandPere from './ArriereGrandPere'
import Pere from './Pere'

export const FamilyContext = createContext<{
  prenom: string,
  setPrenom: (prenom: string) => void,
}>({
  prenom: "",
  setPrenom: () => {},
})


function App() {
  const [prenomState, setPrenomState] = useState("Jean")

  return (
    <>
    <FamilyContext.Provider value={{prenom: prenomState, setPrenom: setPrenomState}}>
        <ArriereGrandPere />
      </FamilyContext.Provider>
    </>
  )
}



// import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ArriereGrandPere from './ArriereGrandPere'

// import { useContext } from 'react';
// import { LevelContext } from './LevelContext.tsx';
// import Heading from './Heading.tsx'

// export const FamilyContext = createContext<{
//   prenom: string,
//   setPrenom: (prenom: string) => void,
// }>({
//   prenom: "",
//   setPrenom: () => {},
// })


// function App() {
//   //const [prenomDeLaFamille, setPrenomDeLaFamille] = useState("Arnaud");
//   const [prenomPremierFils, setPrenomPremierFils] = useState("Jason")
//   const [prenomState, setPrenomState] = useState("Jean")

//   return (
//     <>
//       <ArriereGrandPere prenomARGP={prenomPremierFils} updatePrenom={setPrenomPremierFils} />
//       <FamilyContext.Provider value={{prenom: prenomState, setPrenom: setPrenomState}}>
//         <ArriereGrandPere />
//       </FamilyContext.Provider>
//     </>
//  )
  // return (
  //   <>
  //       <ArriereGrandPere prenom={prenomDeLaFamille} onChangePrenom={(prenom) => {setPrenomDeLaFamille(prenom)}}/>
  //       <Heading level={1}>First-heading</Heading>
  //   </>
  // )
//}

//export default App
