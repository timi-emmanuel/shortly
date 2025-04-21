
const NotFound = () => {
 return (
  <div className="flex flex-col items-center justify-center mt-32 text-center text-gray-800 font-sans">
   <div className="mb-5">
    <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     className="w-24 h-24 text-red-500"
    >
     <circle cx="12" cy="12" r="10" />
     <line x1="15" y1="9" x2="9" y2="15" />
     <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
   </div>
   <h1 className="text-2xl font-bold mb-2">404 - Page Not Found</h1>
   <p className="text-lg mb-5">
    Oops! The page you are looking for does not exist.
   </p>
   <a
    href="/"
    className="text-darkViolet hover:underline text-lg"
   >
    Go back to Home
   </a>
  </div>
 );
};

export default NotFound;
