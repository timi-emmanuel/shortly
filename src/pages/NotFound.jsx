import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center items-center bg-white text-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-6xl font-extrabold text-darkViolet mb-4">404</h1>
      <p className="text-xl text-grayishViolet mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-cyan text-white px-6 py-3 rounded-full hover:opacity-80 transition"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
