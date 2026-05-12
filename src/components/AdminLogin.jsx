import { useState } from "react";
import { Lock } from "lucide-react";
import { useAdminAuth } from "../hooks/useAdminAuth";

export default function AdminLogin({ onSuccess }) {
  const { login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (login(email, password)) {
      setEmail("");
      setPassword("");
      setError("");
      onSuccess?.();
      return;
    }

    setError("Invalid admin email or password.");
  }

  return (
    <form onSubmit={handleSubmit} className="cyber-card rounded-xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2 text-cyan-400">
        <Lock size={16} />
        <span className="font-display text-sm tracking-widest">ADMIN LOGIN</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="admin@gmail.com"
          className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600"
        />
      </div>

      {error && <p className="font-mono text-xs text-red-400">{error}</p>}

      <button type="submit" className="animated-border p-px rounded self-start">
        <span className="block bg-black px-5 py-2 rounded font-mono text-xs tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-colors">
          LOGIN
        </span>
      </button>
    </form>
  );
}
