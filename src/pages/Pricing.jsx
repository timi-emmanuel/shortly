import ConstrucImage from '../assets/underconstruction.jpeg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Pricing = () => {
return (
  <motion.div
    className="flex flex-col items-center justify-center mt-24 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <img src={ConstrucImage} alt="Under Construction" className="max-w-full h-auto mb-5" />
    <p>This page is currently under construction. Please check back later!</p>
    <Link 
      to="/"
      className="mt-5 px-4 py-2 text-sm cursor-pointer bg-blue-500 text-white rounded-full hover:bg-blue-600"
    >
      Go Back Home
    </Link>
  </motion.div>
);
}
 
export default Pricing;