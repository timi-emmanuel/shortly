import ShortenForm from "./ShortenForm";
import StatsSection from "./StatSection";

const Wrapper = () => {
 return ( 
  <section className="bg-gray-100 p-2 mt-32 md:mt-24">
   <ShortenForm/>
   <StatsSection/>
  </section>
  );
}
 
export default Wrapper;