import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login({ setUser }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-900 to-gray-900">

      <div className="bg-white rounded-2xl shadow-2xl p-10 w-96">

        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          🌲 Forest Guardian
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-green-700 hover:bg-green-800 text-white p-3 rounded-lg font-semibold transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Smart Forest Fire Detection System
        </p>

      </div>

    </div>
  );
}

export default Login;