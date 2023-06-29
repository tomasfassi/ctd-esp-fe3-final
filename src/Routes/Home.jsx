import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {apiState} = useContextGlobal()

  return (
    <main className="" >
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {apiState.dentistList.map(dentist=>
          <Card key={dentist.id} dentist={dentist}/>
          )}



      </div>
    </main>
  )
}

export default Home