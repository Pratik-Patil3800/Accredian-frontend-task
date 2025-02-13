import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Process = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 bg-[#EEF5FF]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          How Do I <span className="text-blue-600">Refer?</span>
        </motion.h2>

        <motion.div 
          variants={itemVariants}
          className="relative mb-12"
        >
          <div className="hidden md:block">
            <img 
              src="../HDIR1.svg" 
              alt="Referral Process"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:hidden">
            <img  
              src="../HDIR2.svg" 
              alt="Referral Process Mobile"
              className="w-8/12 mx-auto rounded-lg "
            />
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            Refer now
          </motion.button>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Process;