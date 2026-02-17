import { useState } from "react";

interface LoginProps {
  onLogin: () => void;
  onSignup: () => void;
}

export default function Login({ onLogin, onSignup }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    if (!username || !password) {
      setError("fill in both fields.");
      return;
    }
    setLoading(true);
    setError("");

    chrome.runtime.sendMessage(
      { type: "LOGIN", payload: { username, password } },
      (response) => {
        setLoading(false);
        if (response?.success) onLogin();
        else setError(response?.error ?? "something went wrong.");
      }
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p>{error}</p>}
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "logging in..." : "login"}
      </button>
      <button onClick={onSignup}>sign up</button>
    </div>
  );
}