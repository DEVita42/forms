import React from "react";

function UncontrolledLogin({ onLogin }) {
  const handleSubmit = (e) => {
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";

    onLogin({ username, password, remember });
  };

  const handleReset = (e) => {
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div>
        <label>
          Username:
          <input type="text" name="username" placeholder="Enter username" />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input type="password" name="password" placeholder="Enter password" />
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" name="remember" />
          Remember Me
        </label>
      </div>

      <div>
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}

export default UncontrolledLogin;
