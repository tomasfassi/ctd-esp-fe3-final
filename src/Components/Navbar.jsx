import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../routes'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate()
  const {themeState, themeDispatch} = useContextGlobal()

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type:'SWITCH_DARK'})
    }else{
      themeDispatch({type:'SWITCH_LIGHT'})
    }
  }

  return (
    <nav>
      <ul>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home}><li class="link">Home</li></Link>
      <Link to={routes.favorites}><li class="link">Favorites</li></Link>
      <Link to={routes.contact}><li class="link">Contact</li></Link>
      </ul>

      <button onClick={switchTheme}>{themeState.theme ? '🌙':'☀️' }</button>
    </nav>
  )
}

export default Navbar