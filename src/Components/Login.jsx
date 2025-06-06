import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../Firebase/firebase"; 
// import logo from "../assets/logo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // redirect to homepage
    } catch (err) {
      console.error("Login failed:", err.code, err.message);
    
      switch (err.code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
          setError("Incorrect email or password.");
          break;
        case "auth/user-not-found":
          setError("No user found with this email.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address format.");
          break;
        case "auth/too-many-requests":
          setError("Too many failed attempts. Try again later.");
          break;
        default:
          setError("Something went wrong. Please try again.");
      }
    }
    
  };

  return (
    <div className="w-full">
      <div className="rounded-lg flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="text-xl font-bold text-left text-cyan my-6">Login to your account</h2>
          <form onSubmit={handleLogin} className="space-y-4 ">
            <div>
              <label className="block text-sm font-medium mb-1 text-grayishViolet">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-cyan text-darkViolet"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-grayishViolet">Password</label>
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

            <div className="flex justify-between w-full">
              {error && <p className="text-Red text-left text-sm">{error}</p>}


              <Link to="/reset-password" className="text-Gray hover:underline">forgot password?</Link>

            </div>

            


            <button
              type="submit"
              className="w-full py-2 bg-cyan text-white rounded-md font-semibold hover:opacity-80"
            >
              Login
            </button>

            <p className="text-center text-grayishViolet text-sm mt-4">
              Don't have an account? <Link to="/signup" className="text-cyan hover:underline ml-1">Sign up here</Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;