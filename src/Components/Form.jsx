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
        <div className="form-group">
          <label>Nombre</label>
          <input type= "text" name="nombre" onChange={handleChange}/>
          <br/> 
          <label>Email</label>
          <input type= "email" name="email" onChange={handleChange}/>
          <br/> 
          <button className="butForm">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;