import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue text-white py-10 px-6 ">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
        
        {/* Logo */}
        <h2 className="text-3xl font-bold">Shortly</h2>

        {/* Link Sections */}
        <div className="flex flex-col md:flex-row gap-10 text-sm items-center md:items-start">
          <div>
            <h3 className="font-bold mb-3">Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className='cursor-pointer hover:text-cyan'>Link Shortening</li>
              <li className='cursor-pointer hover:text-cyan'>Branded Links</li>
              <li className='cursor-pointer hover:text-cyan'>Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li className='cursor-pointer hover:text-cyan'>Blog</li>
              <li className='cursor-pointer hover:text-cyan'>Developers</li>
              <li className='cursor-pointer hover:text-cyan'>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li className='cursor-pointer hover:text-cyan' >About</li>
              <li className='cursor-pointer hover:text-cyan' >Our Team</li>
              <li className='cursor-pointer hover:text-cyan' >Careers</li>
              <li className='cursor-pointer hover:text-cyan' >Contact</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl justify-center md:justify-start">
          <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-cyan" />
          <FaTwitter className="w-5 h-5 cursor-pointer hover:text-cyan" />
          <FaPinterest className="w-5 h-5 cursor-pointer hover:text-cyan" />
          <FaInstagram className="w-5 h-5 cursor-pointer hover:text-cyan" />

        </div>
      </div>
    </footer>
  );
};

export default Footer;
