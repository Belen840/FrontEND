import React,{useEffect,useState} from "react"

const Perfil = () =>{
    //contador de likes
    const[contadorLikes, setContadorLikes] = useState(0)
    const handleContador = () =>{
        setContadorLikes(contadorLikes+1)
    }
    return(
        <>
        <h1>estoy en perfil</h1>
        <button type="button" onClick={handleContador}> sumar like</button>
        <p>conteo de likes : {contadorLikes}</p>
        </>
    )
}
export default Perfil