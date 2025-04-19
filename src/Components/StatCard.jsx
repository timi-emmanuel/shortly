import PropTypes from "prop-types";
import { motion } from "framer-motion";

const StatCard = ({ icon, title, description }) => {
  return (
    <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }} 
    className="relative bg-white p-6 rounded-md shadow-md text-center md:text-left">
      <div className="absolute -top-8 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 w-16 h-16 rounded-full bg-darkViolet flex items-center justify-center">
        <img src={icon} alt={`${title} icon`} className="w-8 h-8" />
      </div>

      <h3 className="text-lg font-bold mt-10 mb-2">{title}</h3>
      <p className="text-grayishViolet text-xs">{description}</p>
    </motion.div>
  );
};

StatCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StatCard;
