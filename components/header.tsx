import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggleBtn from './darkModeToggleBtn';
import LogoJuhwan from './assets/logoJuhwan';
import LogoPortfolio from './assets/logoPortfolio';

const Header = () => {
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row'>
          <Link href={'/'}>
            <div className='flex gap-2 w-60'>
              <LogoJuhwan />
              <LogoPortfolio />
            </div>
          </Link>
          <nav className='flex flex-wrap items-center justify-center mt-5 text-base md:ml-auto md:mt-0 gap-x-5 gap-y-3'>
            <Link href={'/'}>
              <div className='hover:text-gray-900'>HOME</div>
            </Link>
            <Link href={'/about'}>
              <div className='hover:text-gray-900'>About Me</div>
            </Link>
            <Link href={'/skills'}>
              <div className='hover:text-gray-900'>Skills</div>
            </Link>
            <Link href={'/projects'}>
              <div className='hover:text-gray-900 md:mr-6'>Projects</div>
            </Link>
            {/* <Link href={'/blog'}>
              <div className='hover:text-gray-900'>BLOG</div>
            </Link> */}
          </nav>
          <DarkModeToggleBtn />
        </div>
      </header>
    </>
  );
};

export default Header;
