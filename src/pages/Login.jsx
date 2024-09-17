import React, { useState } from "react";

const Login = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validarInput = (e) => { 
    e.preventDefault(); 
    
    // Resetear mensajes de error y éxito
    setError("");
    setSuccess("");

    // Validaciones
    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Supongamos que los datos correctos son:
    const datosCorrectos = {
      email: "ally@gmail.com",
      password: "123456"
    };

    if (email !== datosCorrectos.email || password !== datosCorrectos.password) {
      setError("Email o contraseña incorrectos.");
      return;
    }

    // Si todos los datos son correctos
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
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default Login;


