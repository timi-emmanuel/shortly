import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";



const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  
    setLoading(false);
  };
  

  return (    
      <motion.div
       initial={{ opacity: 0, y: 30 }} 
       animate={{ opacity: 1, y: 0 }} 
       transition={{ duration: 0.5 }}
      className="flex items-center justify-center w-full"
    >
      <div className="w-full  rounded-lg ">
        <h2 className="text-xl font-bold text-cyan mb-4 mt-3 text-left">Create an Account</h2>

        <form onSubmit={handleSignup} className="space-y-3">
          <div>
            <label className="text-sm font-medium text-cyan">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan"
            />
          </div>

         <div className="relative">
              <label className="block text-sm font-medium mb-1 text-cyan">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-cyan"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-1 top-1/2 transform -translate-x-1/2 cursor-pointer text-cyan"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>


          <div>
            <label className="text-sm font-medium text-cyan">Confirm Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan"
            />
          </div>

          {error && <p className="text-Red text-left text-sm mt-2">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan text-white py-3 rounded-md font-bold hover:opacity-90 transition"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm mt-4 text-center text-black">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
      </motion.div>

    
    
  );
};

export default Signup;
