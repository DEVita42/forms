import React, { useRef } from "react";

function UncontrolledLogin({ onLogin }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const remember = e.target.remember.checked;

    onLogin({ username, password, remember });
  };

  const handleReset = (e) => {
    e.target.reset();

    return (
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              ref={usernameRef}
            />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              ref={passwordRef}
            />
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" name="remember" ref={rememberRef} />
            Remember Me
          </label>
        </div>

        <div>
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    );
  };
}

export default UncontrolledLogin;
