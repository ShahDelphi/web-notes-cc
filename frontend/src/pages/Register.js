import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { Button, Input } from "../components/ui";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username.trim() || !password.trim()) return setError("Semua field wajib diisi");
    try {
      await axiosInstance.post("/auth/register", { username, password });
      alert("Registrasi berhasil, silakan login!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Gagal registrasi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-400 mb-6">🆕 Register</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <label className="block text-gray-300 text-sm font-semibold mb-2">Username</label>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mb-4 bg-gray-700 border border-gray-600 text-white"
        />

        <label className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-6 bg-gray-700 border border-gray-600 text-white"
        />

        <Button
          onClick={handleRegister}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow w-full"
        >
          Register
        </Button>

        <p className="mt-4 text-gray-400 text-sm text-center">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
