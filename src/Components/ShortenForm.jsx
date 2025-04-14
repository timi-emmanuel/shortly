const ShortenForm = () => {
 return (
   <section className="-mt-20 md:-mt-12 w-[90%] md:w-[75%] p-6 flex flex-col md:flex-row items-center gap-4 mx-auto bg-[url('./assets/bg-shorten-mobile.svg')] md:bg-[url('./assets/bg-shorten-desktop.svg')] bg-darkViolet bg-no-repeat bg-cover rounded-md">
     <div className="w-full md:flex-1 rounded-md overflow-hidden">
       <input 
         type="text"
         placeholder="Shorten a link here..."
         className="w-full py-3 px-4 outline-none text-darkViolet rounded-md"
       />
     </div>
     <div className="w-full md:w-auto">
       <button className="bg-cyan w-full md:w-auto py-3 px-6 text-white rounded-md font-bold hover:opacity-70 transition duration-200">
         Shorten it!
       </button>
     </div>
   </section>
 );
}

export default ShortenForm;
