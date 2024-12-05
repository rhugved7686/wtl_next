"use client"; // Ensures client-side rendering

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter(); // Correct hook for App Router

  const handleRegister = (e) => {
    e.preventDefault();

    // Example validation logic
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Add your registration API call here
    console.log({ username, email, password });

    // Redirect to login page after successful registration
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Register
        </h2>

        {error && (
          <div className="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
