import React, { useState } from "react";

const Formulario = () => { 
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validarInput = (e) => { 
    e.preventDefault(); 
    
   
    setError("");
    setSuccess("");

   
    if (!email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setSuccess("Formulario enviado con éxito.");
  };

  return (
    <> 
      <div className='caja'>
        <form onSubmit={validarInput}>
          <h3>Email</h3>
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />  
          </div>

          <h3>Contraseña</h3>
          <div className="form-group">
            <input
              className="form-control"
              name="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> 
          </div>

          <h3>Confirmar contraseña</h3>
          <div className="form-group">
            <input
              className="form-control"
              name="ConfirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            /> 
          </div>
          
          <button className="btn btn-dark mt-3" type="submit">
            Enviar
          </button>
        </form> 

        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && <div className="alert alert-success mt-3">{success}</div>}
      </div>
    </>
  );
};

export default Formulario;

