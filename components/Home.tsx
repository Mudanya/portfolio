import Image from 'next/image';
const Home = () => {
   return (
      <div
         className='h-full sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col lg:flex-row gap-4'
      >
         <div className='h-1/2 relative lg:h-full lg:w-1/2 '>
            <Image
               src='/assets/nexo-hero.jpeg'
               alt='Nexo hero'
               fill
               className='object-contain '
            />
         </div>
         <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col  gap-4 items-center justify-center'>
            <h1 className='text-3xl font-bold md:text-4xl'>
               Empowering Innovation through Code, Crafting Digital Marvels!
            </h1>
            <p className='md:text-xl'>
               Meet the Architect of Digital Excellence. With a fusion of design
               finesse and backend brilliance, I shape digital landscapes with
               unparalleled skill. From sleek interfaces to optimized databases,
               I am the wizard behind every digital masterpiece that captivates
               and inspires.
            </p>
            <div className='flex gap-4'>
               <button className='p-4 rounded-lg ring-1 ring-slate-900 bg-slate-900 text-cyan-100'>
                  My Work
               </button>
               <button className='p-4 rounded-lg ring-1 ring-slate-900 text-slate-900'>
                  Contact Me
               </button>
            </div>
         </div>
      </div>
   );
};

export default Home;
