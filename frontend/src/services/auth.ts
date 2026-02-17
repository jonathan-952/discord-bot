const API_URL = "https://your-backend.com/api";

export async function handleLogin({ email, password }: { email: string; password: string }) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error("invalid credentials");
    const data = await response.json();
    await chrome.storage.local.set({ jwt_token: data.token });
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function handleSignup({ email, password }: { email: string; password: string }) {
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error("signup failed");
    const data = await response.json();
    await chrome.storage.local.set({ jwt_token: data.token });
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function handleLogout() {
  await chrome.storage.local.remove("jwt_token");
  return { success: true };
}