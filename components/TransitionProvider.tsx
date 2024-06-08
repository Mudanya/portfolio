'use client'
import { ReactNode } from 'react';
import NavBar from './NavBar';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const pathName = usePathname()
   return (
      <AnimatePresence mode='wait'>
         <div key={pathName} className='w-screen h-screen bg-gradient-to-b from-cyan-100 to-slate-700'>
            <motion.div className='h-screen w-screen bg-slate-700 z-40 rounded-b-[100px]' 
                animate={{height:'0vh'}}
                exit={{height:'140vh'}}
                transition={{duration:.4,ease:'easeOut'}}
            />
            <motion.div className='h-screen w-screen fixed bottom-0 bg-slate-700 rounded-t-[100px] z-30' 
            initial={{height:'140vh'}}
            animate={{height:'0vh',transition:{delay:.6}}}
            />
            <motion.div className='fixed m-auto w-fit h-fit bg-slate-700 top-0 left-0 bottom-0 cursor-default right-0 text-8xl text-cyan-100 z-50'
            initial={{opacity:1}}
            animate={{opacity:0}}
            exit={{opacity:0}}
            >
                {pathName.substring(1) ? pathName.substring(1) : 'home' }
            </motion.div>

            <NavBar />
            <div className='h-[calc(100vh-6rem)] '>
               {children}
            </div>
         </div>
      </AnimatePresence>
   );
};

export default TransitionProvider;
