import React, { useState } from "react";
import "./InstructionCard.scss";

const AuthCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    console.log("Logging in with:", { username, password });
    alert(
      `Attempting to log in with Username: ${username} and Password: ${password}`
    );
  };

  return (
    <div className="instruction">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="demo-row">
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Login"
          />
        </div>

        <div className="demo-row">
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn-outline">
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthCard;
