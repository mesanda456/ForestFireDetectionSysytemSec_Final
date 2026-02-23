import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../firebase";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("citizen");
  const [govId, setGovId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Save extra user info in database
      await set(ref(database, "users/" + user.uid), {
        name,
        email,
        role,
        govId: role === "authority" ? govId : null,
        createdAt: new Date().toISOString()
      });

      alert("Registration successful!");
      navigate("/login");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-gray-900">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-lg">

        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          🌲 Forest Guardian Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-50 text-black focus:ring-2 focus:ring-green-600 outline-none"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-50 text-black focus:ring-2 focus:ring-green-600 outline-none"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-50 text-black focus:ring-2 focus:ring-green-600 outline-none"
            required
          />

         {/* Role Selection */}
<div>
  <p className="font-semibold text-gray-800 mb-3">
    Select Role
  </p>

  <div className="grid grid-cols-2 gap-4">

    {/* Citizen */}
    <div
      onClick={() => setRole("citizen")}
      className={`cursor-pointer p-4 rounded-xl border text-center font-semibold transition-all duration-300 ${
        role === "citizen"
          ? "border-green-600 bg-green-100 text-green-800 shadow-md"
          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      }`}
    >
      👤 Citizen
    </div>

    {/* Authority */}
    <div
      onClick={() => setRole("authority")}
      className={`cursor-pointer p-4 rounded-xl border text-center font-semibold transition-all duration-300 ${
        role === "authority"
          ? "border-green-600 bg-green-100 text-green-800 shadow-md"
          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      }`}
    >
      🛡 Authority
    </div>

  </div>
</div>

          {/* Gov ID for Authority */}
          {role === "authority" && (
            <input
              type="text"
              placeholder="Government Employee ID"
              value={govId}
              onChange={(e) => setGovId(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 text-black focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white p-3 rounded-lg font-semibold transition"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;