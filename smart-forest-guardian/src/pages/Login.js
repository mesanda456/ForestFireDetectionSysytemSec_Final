import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth, database } from "../firebase";

function Login({ setRole }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 🔥 Fetch role from database
      const snapshot = await get(
        ref(database, "users/" + user.uid)
      );

      if (snapshot.exists()) {
        const userData = snapshot.val();

        console.log("ROLE FROM DB:", userData.role);

        setRole(userData.role?.toLowerCase());
        navigate("/");
      } else {
        alert("User data not found in database");
      }

    } catch (error) {
      alert("Invalid Email or Password");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-900 to-gray-900">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-96">

        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          🌲 Forest Guardian
        </h2>

        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border rounded-lg bg-gray-50 text-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          className="w-full p-3 mb-6 border rounded-lg bg-gray-50 text-black"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-green-700 text-white p-3 rounded-lg font-semibold"
        >
          Login
        </button>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-700 font-semibold">
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;