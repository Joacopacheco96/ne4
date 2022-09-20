import { React, useState, useEffect } from "react";

const Main = () => {
  const [database, setDatabase] = useState([]);

  useEffect(() => {          
    home();
    },[] );

function home() {
        fetch(`http://localhost:3001/figuritas/`, {
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
function tengo() {
            fetch(`http://localhost:3001/figuritas/tengo/`, {
          method: "GET",})
          .then((response) => response.json())
          .then((result) => {setDatabase(result)}
          );
      
  };

  // onClick={handlehave(figurita)}
  const handlehave = (figurita) => {
  
    fetch(`http://localhost:3001/figuritas/repetidas`, {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'auth-token':localStorage.getItem('jwt'),
body: JSON.stringify({
  "figurita": {
    "id": figurita.id,
    "have": figurita.have,
  }
}),
  }})
  .then((response) => response.json())
  .then((result) => {setDatabase(result)}
  );

  }

  return (
    <div>
      <h2>Lista de figuritas</h2>
        <div>
            <button onClick={home}>Figuritas Home</button>
            <button onClick={tengo}>Figuritas Tengo</button>
        </div>
      <div>
        { database.map((figurita) => {
          return (
            <div>
              <p>ID: {figurita.id}</p>
              <p>Nombre: {figurita.name}</p>
              <p>Categoria: {figurita.category}</p>
              <p>Repetidas: {figurita.repeat}</p>
              <button >Tengo</button>
              <p>----------------------------------</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
