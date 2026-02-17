import { useState } from "react";

interface SignupProps {
  onSignup: () => void;
  onBack: () => void;
}

export default function Signup({ onSignup, onBack }: SignupProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSignup() {
    if (!username || !email || !password) {
      setError("fill in all fields.");
      return;
    }
    setLoading(true);
    setError("");

    chrome.runtime.sendMessage(
      { type: "SIGNUP", payload: { username, email, password } },
      (response) => {
        setLoading(false);
        if (response?.success) onSignup();
        else setError(response?.error ?? "something went wrong.");
      }
    );
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p>{error}</p>}
      <button onClick={handleSignup} disabled={loading}>
        {loading ? "signing up..." : "sign up"}
      </button>
      <button onClick={onBack}>back to login</button>
    </div>
  );
}