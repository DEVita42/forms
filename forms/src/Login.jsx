import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberChange = (e) => {
    setRemember(e.target.checked);
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    
    onLogin({ username, password, remember });


  };

  const isLoginDisabled = username === "" || password === "";

  const handleResetClick = () => {
    setUsername("");  
    setPassword("");  
    setRemember(false);  
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter username"
          />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={handleRememberChange}
          />
          Remember Me
        </label>
      </div>

      <div>
        <button type="submit" disabled={isLoginDisabled}>
          Login
        </button>

        <button
          type="button"
          onClick={handleResetClick}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default Login;
