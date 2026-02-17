import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Login from "./popup/Login";
import Signup from "./popup/Signup";
// import Dashboard from "./popup/Dashboard";
import "./index.css";

type Page = "login" | "signup" | "dashboard";

export default function App() {
  const [page, setPage] = useState<Page>("login");

  useEffect(() => {
    chrome.storage.local.get("jwt_token", (result) => {
      if (result.jwt_token) setPage("dashboard");
    });
  }, []);

  // if (page === "dashboard") return <Dashboard onLogout={() => setPage("login")} />;
  if (page === "signup") return <Signup onSignup={() => setPage("dashboard")} onBack={() => setPage("login")} />;
  return <Login onLogin={() => setPage("dashboard")} onSignup={() => setPage("signup")} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
