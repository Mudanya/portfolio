'use client';
import Brain from '@/components/Brain';
import { delay, motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa6';
const Page = () => {
   const contRef = useRef(null);
   const skillRef = useRef(null);
   const expRef = useRef(null);

   const { scrollYProgress } = useScroll({ container: contRef });
   const isInSkillRefView = useInView(skillRef, { margin: '-100px' });
   const isInExpRefView = useInView(expRef, { margin: '-100px' });
   return (
      <motion.div
         className='h-full'
         initial={{ y: '-200vh' }}
         animate={{ y: '0%' }}
         transition={{ duration: 1 }}
      >
         <div className='h-full overflow-scroll lg:flex' ref={contRef}>
            {/* left */}
            <div className='px-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 lg:pr-0 md:gap-32 lg:gap-48 xl:pr-0 lg:w-2/3 xl:w-1/2'>
               {/* Bio */}
               <div className='flex flex-col gap-12 justify-center '>
                  <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
                  <p className='text-lg'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Incidunt numquam omnis molestias porro, corrupti rem
                     inventore excepturi repellat a provident blanditiis.
                     Voluptatem quis unde eius laboriosam. Exercitationem cum
                     quis vitae.
                  </p>
                  <span className='italic'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <motion.div
                     initial={{ opacity: 0.2, y: 0 }}
                     animate={{ opacity: 1, y: '10px' }}
                     transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     }}
                  >
                     <FaArrowDown />
                  </motion.div>
               </div>
               {/* Skills */}
               <div
                  className='flex flex-col gap-12 justify-center '
                  ref={skillRef}
               >
                  <motion.h1
                     className='font-bold text-2xl'
                     initial={{ x: '-300px' }}
                     animate={isInSkillRefView ? { x: 0 } : {}}
                     transition={{ delay: 0.2 }}
                  >
                     SKILLS
                  </motion.h1>
                  <motion.div
                     className='flex gap-4 flex-wrap'
                     initial={{ x: '-300px' }}
                     animate={isInSkillRefView ? { x: 0 } : {}}
                     transition={{ delay: 0.2 }}
                  >
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        C#
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        Dot Net
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        Javascript
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        Typescript
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        Express js
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        Next js
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        React js
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        Angular js
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        Tailwind
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        Bootstrap
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        Kubernetes
                     </div>
                     <div className='rounded bg-slate-700 text-cyan-100 text-sm p-2 hover:text-slate-700 hover:bg-cyan-100'>
                        Docker
                     </div>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0.2, y: 0 }}
                     animate={{ opacity: 1, y: '10px' }}
                     transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     }}
                  >
                     <FaArrowDown />
                  </motion.div>
               </div>
               {/* Experience */}
               <div
                  className='flex flex-col gap-12 justify-center pb-48 '
                  ref={expRef}
               >
                  <motion.h1
                     className='text-2xl font-bold'
                     initial={{ x: '-300px' }}
                     animate={isInExpRefView ? { x: 0 } : {}}
                     transition={{ delay: 0.2 }}
                  >
                     EXPERIENCE
                  </motion.h1>
                  {/* Experience list */}
                  <motion.div
                     initial={{ x: '-300px' }}
                     animate={isInExpRefView ? { x: 0 } : {}}
                     transition={{ delay: 0.2 }}
                     className=''
                  >
                     {/* experience item */}
                     <div className='flex justify-between h-48'>
                        <div className='w-1/3 '>
                           <div className='p-3 bg-cyan-50 font-semibold rounded-s-lg rounded-br-lg'>
                              Fullstack Developer / Integration Engineer
                           </div>
                           <div className='p-3 italic text-sm'>
                              Developing both the fron-end and backend.
                              Interlinking with third party libraries too.
                           </div>
                           <div className='p-3 text-sm font-semibold text-sky-600'>
                              2022 - Present
                           </div>
                           <div className='p-2 text-sm font-semibold rounded bg-cyan-50 w-fit'>
                              ICEALION GROUP
                           </div>
                        </div>
                        <div className='w-1/6 flex justify-center'>
                           {/* line */}
                           <div className='w-1 h-full rounded bg-gray-600 relative'>
                              {/* circle */}
                              <div className='absolute -left-2 w-5 h-5 ring-1 ring-sky-600 bg-cyan-50 rounded-full'></div>
                           </div>
                        </div>
                        <div className='w-1/3 '></div>
                     </div>
                     <div className='flex justify-between h-48'>
                        <div className='w-1/3 '></div>
                        <div className='w-1/6 flex justify-center'>
                           {/* line */}
                           <div className='w-1 h-full rounded bg-gray-600 relative'>
                              {/* circle */}
                              <div className='absolute -left-2 w-5 h-5 ring-1 ring-sky-600 bg-cyan-50 rounded-full'></div>
                           </div>
                        </div>
                        <div className='w-1/3'>
                           <div className='p-3 bg-cyan-50 font-semibold rounded-e-lg rounded-bl-lg'>
                              Fullstack Developer
                           </div>
                           <div className='p-3 italic text-sm'>
                              Developing both the fron-end and backend.
                              Interlinking with third party libraries too.
                           </div>
                           <div className='p-3 text-sm font-semibold text-sky-600'>
                              2020 - 2022
                           </div>
                           <div className='p-2 text-sm font-semibold rounded bg-cyan-50 w-fit'>
                              ABNO Softwares
                           </div>
                        </div>
                     </div>
                     <div className='flex justify-between h-48'>
                        <div className='w-1/3 '>
                           <div className='p-3 bg-cyan-50 font-semibold rounded-s-lg rounded-br-lg'>
                              Front End Developer
                           </div>
                           <div className='p-3 italic text-sm'>
                              Developing both the fron-end and backend.
                              Interlinking with third party libraries too.
                           </div>
                           <div className='p-3 text-sm font-semibold text-sky-600'>
                              2019 - 2020
                           </div>
                           <div className='p-2 text-sm font-semibold rounded bg-cyan-50 w-fit'>
                              CRA
                           </div>
                        </div>
                        <div className='w-1/6 flex justify-center'>
                           {/* line */}
                           <div className='w-1 h-full rounded bg-gray-600 relative'>
                              {/* circle */}
                              <div className='absolute -left-2 w-5 h-5 ring-1 ring-sky-600 bg-cyan-50 rounded-full'></div>
                           </div>
                        </div>
                        <div className='w-1/3'></div>
                     </div>
                  </motion.div>
               </div>
            </div>
            {/* right */}
            <div className='hidden lg:block w-1/3 xl:w-1/2 sticky top-0  z-30'>
               <Brain scrollYPos={scrollYProgress} />
            </div>
         </div>
      </motion.div>
   );
};

export default Page;
