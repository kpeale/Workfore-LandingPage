import JobSearch from './JobSearch';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center fex-col'>
      <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* text content */}
        <div >
          <h1 className='text-3xl sm:text-6xl font-bold'>
            Join us & Explore Thousands of Jobs
          </h1>
          <p className='mt-4 text-sm sm:text-lg font-medium'>
            find Jobs, Employment & Career Opportunities
          </p>
          <JobSearch />
          <div className='text-base font-semibold text-gray-700 dark:text-gray-300 mt-6 flex items-center space-x-6'>
            <span>Popular Search: </span>
            <span className='text-sm text-gray-700 dark:text-gray-100 font-light'>
              Designer, Developer, Web, IOS, PHP, Senior, Engineer
            </span>
          </div>
        </div>
        {/* image content */}
        <div className='mx-auto hidden xl:block'  >
          <Image
            src='/images/hero.png'
            width={900}
            height={900}
            alt='hero'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
