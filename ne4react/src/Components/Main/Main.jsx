import { React, useState, useEffect } from "react";

const Main = () => {
  const [database, setDatabase] = useState();
  

  useEffect(() => {
    ifTengo('')          
    },[]);

function ifTengo(endpoint) {
            fetch(`http://localhost:3001/figuritas/${endpoint}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'auth-token':localStorage.getItem('jwt')
          }})
          .then((response) => response.json())
          .then((result) => {setDatabase(result)}
          );
        }

  const handlehave = (figurita) => {
    fetch(`http://localhost:3001/figuritas/have/`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'auth-token':localStorage.getItem('jwt')},
body: JSON.stringify({"figurita":{
  "id":figurita.id,
  }
}),
  })
  .then((response) => response.json())
  .then((result) => {
    if(result.success===true){
      alert("exito al cambiar el estado");
  }else{
      alert("ocurrio un error, intentalo otra vez")
  }
  }
  );
  }
  const handleqty = (figurita,operator) => {
    fetch(`http://localhost:3001/figuritas/have/`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'auth-token':localStorage.getItem('jwt')},
body: JSON.stringify({"figurita":{
  "id":figurita.id,
  }
}),
  })
  .then((response) => response.json())
  .then((result) => {
    if(result.success===true){
      alert("exito al cambiar el estado");
  }else{
      alert("ocurrio un error, intentalo otra vez")
  }
  }
  );
  }

  return (
    <div>
      <h2>Lista de figuritas</h2>
        <div>
            <button onClick={()=>ifTengo('')}>Figuritas Home</button>
            <button onClick={()=>ifTengo('tengo')}>Figuritas Tengo</button>
            <button onClick={()=>ifTengo('notengo')}>Figuritas No Tengo</button>
            <button onClick={()=>ifTengo('repeat')}>Figuritas repetidas</button>
        </div>
      {database?
      <div>
        { database.map((figurita, key) => {
          return (
            <div key={key}>
              <p>ID: {figurita.id}</p>
              <p>Nombre: {figurita.name}</p>
              <p>Categoria: {figurita.category}</p>
              <p>Repetidas: {figurita.repeat}</p>
              <button onClick={()=>handleqty(figurita,'+')}>-</button>
              <button onClick={()=>handleqty(figurita,'-')}>+</button>
              <button onClick={()=>handlehave(figurita)}>{figurita.have?'Tengo':'No Tengo'}</button>
              <p>----------------------------------</p>
            </div>
          );        
        })}
      </div>
      :null}
    </div>
  );
};

export default Main;
