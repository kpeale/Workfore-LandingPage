import { LuNetwork } from 'react-icons/lu';

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-200 dark:bg-gray-900'>
      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start'>
        <div className='xl:col-span-2'>
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-cyan-800 dark:bg-white  rounded-full flex items-center justify-center flex-col'>
              <LuNetwork className='w-5 h-5 text-white dark:text-black' />
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-cyan-800 dark:text-white font-bold'>
              Devhire
            </h1>
          </div>
          <p className='mt-4 text-sm text-gray-600 dark:text-gray-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            quisquam autem blanditiis explicabo quia rem voluptas repellat
          </p>
          <div className='mt-5'>
            <h1 className='lg:text-xl text-base text-gray-700 dark:text-gray-300 font-medium'>
              Call us
            </h1>
            <p className='mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold'>
              +2390567119178
            </p>
          </div>
          <p className='text-sm text-gray-600 dark:text-gray-400 mt-4'>
            Drake Tanguil
          </p>
          <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
            Drake Tanguil Bangualash
          </p>
          <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
            legbarak28@gmail.com
          </p>
        </div>

        <div className='space-y-6'>
          <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
            For Candidates
          </h1>
          <p className='footer__link'>Browse Jobs</p>
          <p className='footer__link'>Browse Categories</p>
          <p className='footer__link'>Candidate Dashboard</p>
          <p className='footer__link'>Jobs Alerts</p>
          <p className='footer__link'>My Bookmarks</p>
        </div>

        <div className='space-y-6'>
          <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
            For Employers
          </h1>
          <p className='footer__link'>Browse Candidates</p>
          <p className='footer__link'>Employer Dashboard</p>
          <p className='footer__link'>Add Job</p>
          <p className='footer__link'>Jobs Packages</p>
        </div>

        <div className='space-y-6'>
          <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
            About Us
          </h1>
          <p className='footer__link'>Jobs page</p>
          <p className='footer__link'>Job Page Alternatives</p>
          <p className='footer__link'>Resume Page</p>
          <p className='footer__link'>Blog </p>
          <p className='footer__link'> Contact</p>
        </div>

        <div className='space-y-6'>
          <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
            Helpful Resources
          </h1>
          <p className='footer__link'>Site Map</p>
          <p className='footer__link'>Terms of use</p>
          <p className='footer__link'>Privacy Center</p>
          <p className='footer__link'>Security Center</p>
          <p className='footer__link'>Accessibility Center</p>
        </div>
      </div>

      <div className='pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800 '>
        <p className='text-gray-500'>@ 2025. Made by Kpeale</p>
      </div>
    </div>
  );
};

export default Footer;
