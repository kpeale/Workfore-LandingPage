import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';
  return (
    <div>
      <div
        className={`fixed ${navOpen} inset-0 transition-all transform right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}
      >
        <div
          className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delsy-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[1000050] right-0`}
        >
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
            >
              <p>{link.label}</p>
            </Link>
          ))}
          <CgClose
            className='absolute  top-[-0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'
            onClick={closeNav}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
