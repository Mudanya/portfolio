'use client';
import { motion } from 'framer-motion';
import { link } from '@/Types/link';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './NavLink';

const links: link[] = [
   { url: '/', title: 'Home' },
   { url: '/about', title: 'About' },
   { url: '/portfolio', title: 'Portfolio' },
   { url: '/contact', title: 'Contact' },
];
const tpvars = {
   closed: {
      rotate: 0,
   },
   opened: { rotate: 45, backgroundColor: 'rgb(236 254 255 / 1)' },
};
const cntvars = {
   closed: {
      opacity: 1,
   },
   opened: { opacity: 0 },
};
const btmvars = {
   closed: {
      rotate: 0,
   },
   opened: { rotate: -45, backgroundColor: 'rgb(236 254 255 / 1)' },
};

const lstvars = {
   opened: {
      x: 0,
      transition: { when: 'beforeChildren', staggerChildren: 0.2 },
   },
   closed: { x: '100vw' },
};
const lstitmvars = {
   closed: {
      x: -10,
      opacity: 0,
   },
   opened: {
      x: 0,
      opacity: 1,
   },
};
const NavBar = () => {
   const [toggleMenu, setToggleMenu] = useState(false);
   return (
      <div className='h-24  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex justify-between items-center  text-xl'>
         {/* Logo */}
         <div className=''>
            <Link
               href='/'
               className='text-sm w-fit bg-slate-700 font-semibold p-1 rounded-md flex items-center justify-center'
            >
               <span className='text-white mr-1'>Nexo</span>
               <span className='w-12 h-8 rounded-e bg-cyan-50 flex items-center justify-center'>
                  .dev
               </span>
            </Link>
         </div>

         {/* Desktop Menu */}
         <div className='sm:flex gap-4 hidden '>
            {links
               .filter((l, i) => i !== 0)
               .map((link) => (
                  <NavLink key={link.title} {...link} />
               ))}
         </div>

         {/* Mobile menu */}
         <div className='sm:hidden'>
            <button
               className='w-10 h-8 flex flex-col justify-between z-20 relative'
               onClick={() => setToggleMenu(!toggleMenu)}
            >
               <motion.div
                  className='w-10 h-1 bg-black rounded origin-left'
                  variants={tpvars}
                  animate={toggleMenu ? 'opened' : 'closed'}
               ></motion.div>
               <motion.div
                  className='w-10 h-1 bg-black rounded'
                  variants={cntvars}
                  animate={toggleMenu ? 'opened' : 'closed'}
               ></motion.div>
               <motion.div
                  className='w-10 h-1 bg-black rounded origin-left'
                  variants={btmvars}
                  animate={toggleMenu ? 'opened' : 'closed'}
               ></motion.div>
            </button>
            {toggleMenu && (
               <motion.div
                  variants={lstvars}
                  initial={'closed'}
                  animate='opened'
                  className='w-screen h-screen z-10 absolute right-0 top-0 left-0 bg-slate-700 text-cyan-50 flex flex-col items-center justify-center gap-8 text-4xl'
               >
                  {links.map((link) => (
                     <motion.div
                        variants={lstitmvars}
                        
                        key={link.title}
                     >
                        <Link href={link.url}>{link.title}</Link>
                     </motion.div>
                  ))}
               </motion.div>
            )}
         </div>
      </div>
   );
};

export default NavBar;
