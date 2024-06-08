'use client';
import { portfolioItems } from '@/resources/portfolio';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
   return (
      <motion.div
         className='h-full'
         initial={{ y: '-200vh' }}
         animate={{ y: '0%' }}
         transition={{ duration: 1 }}
      >
         <div className='h-[600vh] relative'>
            <div className='h-[calc(100vh-6rem)] w-screen flex text-8xl text-center items-center justify-center'>
               My Works
            </div>
            <div className='sticky top-0 flex h-screen gap-4 items=center'>
               <div className='flex'>
                  {portfolioItems.map((item) => (
                     <div
                        key={item.id}
                        className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} `}
                     >
                        <div className='flex flex-col gap-8 text-white'>
                           <h1>{item.title}</h1>
                           <div className='relative'>
                              <Image src={item.img} fill alt='' />
                           </div>
                           <Link href={item.link}>See Demo</Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </motion.div>
   );
};

export default page;
