import React,  { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [newUser, setNewUser] = useState({
    nombre:'',
    email:'',
  })

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(newUser.email)
    if(newUser.nombre.length>5 && emailTest){
      console.log('Formulario enviado')
      alert('Gracias '+newUser.nombre+', te contactaremos cuanto antes vía mail')
    }else{
      console.log('Formulario no enviado')
      alert('Por favor verifique su información nuevamente')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="input-form">
          <input class="nye" type= "text" placeholder="Nombre..." onChange={handleChange}/>
          <br/>
          <input class="nye" type= "email" placeholder="Email..." onChange={handleChange}/>
          <br/> 
          <button class="enviarForm">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;