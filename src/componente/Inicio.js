import React,{useEffect,useState} from "react"
import { Link } from "react-router-dom"

const Inicio = () =>{
    return(
        <>
        <h1>hola desde el inicio</h1>
        <div>
            <Link to="perfil">ir a perfil con react</Link>
        </div>
        </>
    )
}
export default Inicio