import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentist, setDentist] = useState({})
  const {apiState, apiDispatch} = useContextGlobal()
  const params = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/'+params.id


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => apiDispatch({type:'GET_DENTIST',payload:data}))
  }, [])



  return (
    <>
      <h1>About</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="dentistDetail">
        <img src="/images/doctor.jpg" style={{width:"300px",height:'350px', marginTop:"30px"}} alt="doctor"/> 
        <div style={{marginBottom:"25px", lineHeight:"7px"}}>
          <label>
            <h3>Nombre:</h3> {apiState.dentistDetail.name}
          </label>
            <h3>Email:</h3> {apiState.dentistDetail.email}
            <h3>Telefono:</h3> {apiState.dentistDetail.phone}
            <h3>Sitio Web:</h3> {apiState.dentistDetail.website}
        </div>
      </div>

    </>
  )
}

export default Detail