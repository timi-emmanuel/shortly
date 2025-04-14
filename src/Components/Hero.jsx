import heroImage from '../assets/illustration-working.svg';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-[80%] max-w-[1200px] mx-auto mt-20">
      
      {/* Text Section */}
      <div className="text-center md:text-left md:max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-darkViolet leading-tight md:leading-[1.2] mb-4">
          More than just shorter links
        </h1>
        <p className="text-Gray text-lg md:text-base mb-8 px-4 md:px-0">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <button className="bg-cyan text-white py-3 px-10 rounded-full font-bold text-lg hover:opacity-70 transition duration-200">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-auto md:ml-12">
        <img
          src={heroImage}
          alt="Working Illustration"
          className="w-full max-w-xl md:max-w-[600px] lg:max-w-[650px] h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
