import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const Username = (e) => {
    setUsername(e.target.value);
  };

  const Password = (e) => {
    setPassword(e.target.value);
  };

  const Remember = (e) => {
    setRemember(e.target.checked);
  };

  const LoginClick = () => {
    onLogin({ username, password, remember });
  };

  const LoginDisabled = username === "" || password === "";

  const Submit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", remember);
  };

  return (
    <form onSubmit={Submit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={Username}
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
            onChange={Password}
            placeholder="Enter password"
          />
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" checked={remember} onChange={Remember} />
          Remember Me
        </label>
      </div>

      <div>
        <button type="button" onClick={LoginClick} disabled={LoginDisabled}>
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
