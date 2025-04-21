// src/pages/ResetPassword.jsx
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (err) {
      console.error(err);
      setError("Failed to send reset email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkViolet px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-cyan mb-6">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-cyan">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-cyan outline-none text-darkViolet"
              placeholder="Enter your email"
            />
          </div>
          {error && <p className="text-Red text-sm">{error}</p>}
          {message && <p className="text-green-600 text-sm">{message}</p>}

          <button
            type="submit"
            className="w-full bg-cyan text-white py-2 rounded-md hover:opacity-90"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          Remembered your password?{" "}
          <Link to="/login" className="text-cyan hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
