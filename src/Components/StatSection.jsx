import StatCard from "./StatCard";
import icon1 from "../assets/icon-brand-recognition.svg";
import icon2 from "../assets/icon-detailed-records.svg";
import icon3 from "../assets/icon-fully-customizable.svg";

const StatsSection = () => {
  return (
    <section className=" py-20 px-6 md:w-[80%] mx-auto">
      <div className="text-center mb-20 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Advanced Statistics</h2>
        <p className="text-grayishViolet text-sm">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-6 max-w-6xl mx-auto">
         
        {/* Connecting Line */}
      
        <div className="flex flex-col md:flex-row absolute left-1/2 top-0 md:top-1/2 w-2 md:w-full h-full md:h-2 bg-cyan -translate-x-1/2 md:-translate-y-1/2 z-0" />


        <div className="relative z-10">
          <StatCard
            icon={icon1}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
        </div>
        <div className="relative z-10 mt-8 ">
          <StatCard
            icon={icon2}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </div>
        <div className="relative z-10 mt-12 md:mt-16">
          <StatCard
            icon={icon3}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
