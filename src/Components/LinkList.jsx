import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const LinkList = ({ links }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="w-[90%] md:w-[75%] mx-auto mt-5 space-y-4">
     <AnimatePresence>
      {links.map((link, index) => (
         <motion.div
           key={index}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           transition={{ duration: 0.3 }}
           className="bg-white py-6 md:py-3 px-4  rounded-md flex flex-col md:flex-row justify-between items-start md:items-center shadow-md "
         >
           <p className="text-darkViolet mb-1 md:mb-0 break-all md:text-sm">{link.original}</p>

           <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 w-full md:w-auto space-y-2 md:space-y-0">
              <div className="md:hidden border-Gray border w-full"></div>
             <a 
             className="text-cyan break-all text-lg md:text-sm"
             href={link.shortened}
             target="_blank"
             rel="noopener noreferrer"
             >{link.shortened}</a>
             <button
               onClick={() => handleCopy(link.shortened, index)}
               className={`${
                 copiedIndex === index ? "bg-darkViolet hover:opacity-100" : "bg-cyan"
               } text-white py-2 font-bold text-lg md:text-sm  px-4 rounded-md hover:opacity-70 transition w-full md:w-auto`}
             >
               {copiedIndex === index ? "Copied!" : "Copy"}
             </button>
           </div>
         </motion.div>
       ))}
     </AnimatePresence>     
    </div>
  );
};

export default LinkList;
