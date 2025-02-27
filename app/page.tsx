'use client';
import Home from '@/components/Home';
import { motion } from 'framer-motion';

const Page = () => {
   return (
      <motion.div
         className='h-full'
         initial={{ y: '-200vh' }}
         animate={{ y: '0%' }}
         transition={{ duration: 1 }}
      >
         <Home />
      </motion.div>
   );
};

export default Page;
