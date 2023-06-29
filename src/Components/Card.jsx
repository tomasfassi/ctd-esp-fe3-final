import React, {useReducer, useEffect} from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
  const {themeState} = useContextGlobal()

  const {favDispatch, favState} = useContextGlobal()
  console.log('favState es ',favState)
  console.log('favState.filter(fav=>fav.id==1)', favState.filter(fav=>fav.id==1))
  console.log('favState.filter(fav=>fav.id==3)', favState.filter(fav=>fav.id==3))
  const addFav = ()=>{
    if(favState.filter(fav=>fav.id==dentist.id).length==0){
      favDispatch({type:'ADD_FAV',payload:dentist})
      alert('Dentista agregado a favoritos')
    } else {
      alert('Ya esta en favoritos')
    }
  }

  const deleteFav=()=>{
    if(favState.filter(fav=>fav.id==dentist.id).length==0){
      alert('Dentista  no pertenece a favoritos')
    } else {
      favDispatch({type:'DELETE_FAV',payload:dentist})
      alert('dentista eliminado de Favoritos')
    }
  }

  return (
    <div className={themeState.theme? 'card': 'card-dark'} style={{width:"300px",height:'550px', lineHeight:"0px"}}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="images/doctor.jpg" style={{width:"200px",height:'500px'}} alt="doctor"/>
        <p style={{fontSize:'15px', color:"#126399", textAlign:"center", fontWeight:"500", lineHeight:"5px"}}><h3 className="h3NavBar">Nombre:</h3>
        {dentist.name}
        <h3 className="h3NavBar">Username:</h3>{dentist.username}
        <h3 className="h3NavBar">Id:</h3> {dentist.id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link className="detailDentist" key={dentist.id} to={'/dentist/'+dentist.id}>
            <h3>Details🔍</h3>
          </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add to Favs⭐</button>
        <button onClick={deleteFav} className="favButton">Remove from Favs ❌</button>

    </div>
  );
};

export default Card;