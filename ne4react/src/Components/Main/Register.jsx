import {React, useState} from 'react';
import { useNavigate} from 'react-router-dom';


const Register = () => {
  let navigate= useNavigate();
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');
  const [name, setname] = useState('');
  const handlemail = (e) => {
    setmail(e.target.value);
  }
  const handlepass = (e) => {
    setpass(e.target.value);
  }
  const handlename = (e) => {
    setname(e.target.value);
  }
  function send () {
    fetch(`http://localhost:3001/user/register/`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({"user":{
    "mail":mail,
    "password":pass,
    "name":name,
    "dateLogin":Date(Date.now()),
    }
  }),
  })
  .then(response => response.json())
          .then((result) => {
              if(result.success===true){
                  alert("Usuario registrado con exito");
                  navigate('/');
              }else{
                  alert("Usuario no ingresado correctamente, recargue la pagina e intentelo nuevamente")
              }
          
          });
        }

  return (
    <div>
        <form/>
          <div className="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control" onChange={handlename} id="name"/>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" onChange={handlemail} id="email"/>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={handlepass} id="password"/>
          </div>
          <button type="button" className="btn btn-primary" onClick={send}>Entrar</button>

    </div>
  )
}

export default Register