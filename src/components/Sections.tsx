import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
  return (
    <motion.div
      id="about"
      className="h-screen flex justify-center items-center"
    >
      <p className="text-lg text-gray-900 dark:text-gray-200">
        About Us Content Here...
      </p>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  return (
    <motion.div
      id="contact"
      className="h-screen flex justify-center items-center"
    >
      <p className="text-lg text-gray-900 dark:text-gray-200">
        Contact Information Here...
      </p>
    </motion.div>
  );
};

export { AboutUs, Contact };
