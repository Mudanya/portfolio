'use client';
import { motion } from 'framer-motion';
const page = () => {
   return (
      <motion.div
         className='h-full'
         initial={{ y: '-200vh' }}
         animate={{ y: '0%' }}
         transition={{ duration: 1 }}
      >
         Contact
      </motion.div>
   );
};

export default page;
