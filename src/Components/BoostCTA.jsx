import { Link } from "react-router-dom";

const BoostCTA = () => {
 return ( 
  <section className="bg-[url('./assets/bg-boost-mobile.svg')] md:bg-[url('./assets/bg-boost-desktop.svg')] bg-darkViolet bg-no-repeat bg-cover bg-center p-8 text-center flex justify-center items-center flex-col space-y-4">
   <h2 className="text-white text-xl">Boost your links today</h2>
   <Link to="/login" className="bg-cyan text-white py-2 px-6 rounded-full font-bold text-base hover:opacity-70 transition duration-200">
          Get Started
        </Link>

  </section>
  );
}
 
export default BoostCTA;