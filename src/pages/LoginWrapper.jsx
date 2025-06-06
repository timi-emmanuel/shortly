import Login from "../Components/Login";
import Signup from "../Components/Signup";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";


const LoginWrapper = ({path}) => {
 return ( 
  <div className="bg-darkViolet min-h-screen flex justify-center flex-col items-center">    
      <div className=" bg-white w-[90%] md:w-[60%] xl:w-2/5 rounded-lg flex justify-center flex-col items-center py-4 px-8">
      <Link to="/"><img src={logo} alt="logo icon" /></Link>
       {path === "/login" &&  <Login/>}
       {path === "/signup" &&  <Signup/>}  
      </div>       
  </div>
 );
}
 
export default LoginWrapper;