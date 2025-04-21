import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.svg";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const isActive = (path) =>
    location.pathname === path ? "text-Red md:text-darkViolet" : "text-white md:text-Gray";
 

 
  const getLastName = () => {
    if (!user?.displayName) return "";
    const parts = user.displayName.split(" ");
    return parts.length > 1 ? parts[1] : parts[0];
  };

  return (
    <header className="w-[90%] md:w-[75%] mx-auto mt-6 relative z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 justify-between w-full md:w-auto">
          <Link to="/">
            <img src={logo} alt="logo icon" />
          </Link>
          <button onClick={toggleMobileMenu} className="text-4xl text-grayishViolet md:hidden">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-between items-center w-full ml-8">
          <div className="flex gap-8 text-white items-center text-sm font-bold">
            <Link to="/features" className={`${isActive("/features")} hover:text-darkViolet`}>Features</Link>
            <Link to="/pricing" className={`${isActive("/pricing")} hover:text-darkViolet`}>Pricing</Link>
            <Link to="/resources" className={`${isActive("/resources")} hover:text-darkViolet`}>Resources</Link>
          </div>

          
          <div className="flex gap-8 items-center text-sm font-bold">
            {user ? (
              <>
                <span className=" text-grayishViolet text-lg">Welcome, {getLastName()}</span>
                <button
                  onClick={() => logout()}
                  className="bg-cyan py-2 px-6 text-white rounded-full hover:opacity-70"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={`${isActive("/login")} hover:text-darkViolet`}>Login</Link>
                <Link
                  to="/signup"
                  className={`bg-cyan py-2 px-6 text-white rounded-full hover:opacity-70`}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blr-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            <motion.div
              className="absolute top-20 left-0 right-0 bg-darkViolet text-white rounded-xl text-center py-12 mx-2 space-y-12 font-bold md:hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-10 text-2xl">
                <Link to="/features" onClick={toggleMobileMenu} className={`${isActive("/features")}`}>Features</Link>
                <Link to="/pricing" onClick={toggleMobileMenu} className={`${isActive("/pricing")}`}>Pricing</Link>
                <Link to="/resources" onClick={toggleMobileMenu} className={`${isActive("/resources")}`}>Resources</Link>
              </div>
              <hr className="border-gray mx-10" />
              <div className="flex flex-col space-y-10 text-2xl">
                {user ? (
                  <>
                    <button
                      onClick={() => {
                        logout();
                        toggleMobileMenu();
                      }}
                      className="text-Red"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={toggleMobileMenu} className={`${isActive("/login")}`}>Login</Link>
                    <Link
                      to="/signup"
                      onClick={toggleMobileMenu}
                      className="bg-cyan text-white w-4/5 mx-auto py-4 px-6 rounded-full hover:opacity-70"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
