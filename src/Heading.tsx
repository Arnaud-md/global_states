import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Heading({ children }) {
    const level = useContext(LevelContext);
    // ...
  }