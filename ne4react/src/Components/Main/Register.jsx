import React from 'react'

const Register = () => {
  return (
    <div>
        <form/>
          <div className="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"/>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password"/>
          </div>
          <button type="button" className="btn btn-primary">Entrar</button>

    </div>
  )
}

export default Register