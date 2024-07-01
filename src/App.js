import React,{useEffect,useState} from "react"
import {Router, Route ,Link, Routes } from "react-router-dom"
import Inicio from "./componente/Inicio"
import Perfil from "./componente/Perfil"
/*
componente vista: llamado app 
*/
const App = () =>{
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/Perfil" element={<Perfil />}></Route>
    </Routes>
  )
}
export default App
