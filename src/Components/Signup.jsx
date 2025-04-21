import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase";



const Signup = () => {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
 

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
      await updateProfile(auth.currentUser, {
        displayName: `${firstname} ${lastname}`,
      });
      await auth.currentUser.reload(); // Force refresh user data
      setUser(auth.currentUser); // Manually update context
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
          <div className="flex flex-col md:flex-row gap-2">
          <div>
            <label className="text-sm font-medium text-grayishViolet">First Name</label>
            <input
              type="text"
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-darkViolet w-full mt-1 border px-4 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-grayishViolet">Last Name</label>
            <input
              type="text"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="text-darkViolet w-full mt-1 border px-4 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan"
            />
          </div>

          </div>
       

          <div>
            <label className="text-sm font-medium text-grayishViolet">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-darkViolet w-full mt-1 border px-4 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan"
            />
          </div>

          <div className="relative">
              <label className="block text-sm font-medium mb-1 text-grayishViolet">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-darkViolet w-full px-4 py-1 border rounded-md outline-none focus:ring-1 focus:ring-cyan"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-1 top-1/2 transform -translate-x-1/2 cursor-pointer text-cyan"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
          </div>


          <div className="relative">
              <label className="block text-sm font-medium mb-1 text-grayishViolet">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="text-darkViolet w-full px-4 py-1 border rounded-md outline-none focus:ring-1 focus:ring-cyan"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-1 top-1/2 transform -translate-x-1/2 cursor-pointer text-cyan"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
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

        <p className="text-sm mt-4  text-center text-grayishViolet">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan font-medium hover:underline ml-1">
            Log in
          </Link>
        </p>
      </div>
      </motion.div>

    
    
  );
};

export default Signup;
