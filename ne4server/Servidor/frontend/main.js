const listaDeUsuariosUL = document.getElementById("listaDeUsuarios");


function crearNuevoUsuarioHTML(name, age, mail) {
    // Crear un nuevo elemento li y guardarlo en una variable
    const nuevoUsuario = document.createElement("li");
    // Cambiar el texto interno del li
    nuevoUsuario.textContent = `${name} -- ${age} -- ${mail}`;
  
    // Agregar una clase CSS al li
    // nuevoUsuario.classList.add(prioridad);
  
    // Agregar el li a la lista de tareas
    listaDeUsuariosUL.appendChild(nuevoUsuario);
  }


function cargarUsuarios(){
    fetch("http://localhost:3000/users",{
        method: "GET",
        headers: {"auth-token": localStorage.getItem("jwt")}
    }).then(function(respuesta){return respuesta.json()})
    .then (function(respuestaJSON){
        const usersToRender = (respuestaJSON.data)

        for(i = 0; i < usersToRender.length; i++) {
            crearNuevoUsuarioHTML(usersToRender[i].nombre, usersToRender[i].apellido, usersToRender[i].mail)
          }
    })
}

cargarUsuarios()