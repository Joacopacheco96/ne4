import { useState, React } from 'react';
import { useNavigate} from 'react-router-dom';

const Login = () => {
let navigate= useNavigate();
const [mail, setmail] = useState('');
const [pass, setpass] = useState('')
const handlemail = (e) => {
  setmail(e.target.value);
}
const handlepass = (e) => {
  setpass(e.target.value);
}
function send () {
  fetch(`http://localhost:3001/user/login/`, {
method: "POST",
headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
},
body: JSON.stringify({"user":{
  "mail":mail,
  "password":pass,
  "dateLogin":Date(Date.now()),
  }
}),
})
.then(response => response.json())
        .then((result) => {
            if(result.success===true){
                localStorage.setItem('jwt',result.token);
                navigate('/figuritas');
            }else{
                alert("Fue lo primero que se me ocurrio, usuario no ingreesado")
            }
        
        });
      }
  return (
    <div>
        <form/>
          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" onChange={handlemail} id="email"/>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={handlepass} id="password"/>
          </div>
          <button type="button" className="btn btn-primary" onClick={send}>Entrar</button>
          <button type="button" className="btn btn-primary" onClick={()=>navigate('/register')}>Registrarse!</button>


    </div>
  )
}

export default Login