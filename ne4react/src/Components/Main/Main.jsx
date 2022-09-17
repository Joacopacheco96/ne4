import { React, useState, useEffect } from "react";

const Main = () => {
  const [database, setDatabase] = useState([]);

useEffect(() => {          
    home();
    }, []);
function home() {
        fetch(`http://localhost:3001/`, {
      method: "GET",})
      .then((response) => response.json())
      .then((result) => {setDatabase(result)}
      );
    }
function tengo () {
            fetch(`http://localhost:3001/tengo`, {
          method: "GET",})
          .then((response) => response.json())
          .then((result) => {setDatabase(result)}
          );
      
  };

  return (
    <div>
      <h2>Lista de figuritas</h2>
        <div>
            <button onClick={home}>Figuritas Home</button>
            <button onClick={tengo}>Figuritas Tengo</button>
        </div>
      <div>
        {database.map((figurita) => {
          return (
            <div>
              <p>ID: {figurita.id}</p>
              <p>Nombre: {figurita.nombre}</p>
              <p>Categoria: {figurita.categoria}</p>
              <p>Repetidas: {figurita.repetida}</p>
              <button className="iftengo"></button>
              <p>----------------------------------</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
