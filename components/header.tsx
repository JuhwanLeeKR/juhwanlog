import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggleBtn from './darkModeToggleBtn';
import LogoJuhwan from './assets/logoJuhwan';
import LogoPortfolio from './assets/logoPortfolio';

const Header = () => {
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link href={'/'}>
            <a className='w-60 flex gap-2'>
              <LogoJuhwan />
              <LogoPortfolio />
            </a>
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center mt-5 md:mt-0 text-base justify-center gap-x-5 gap-y-3'>
            <Link href={'/'}>
              <a className='hover:text-gray-900'>HOME</a>
            </Link>
            <Link href={'/about'}>
              <a className='hover:text-gray-900'>About Me</a>
            </Link>
            <Link href={'/skills'}>
              <a className='hover:text-gray-900'>Skills</a>
            </Link>
            <Link href={'/projects'}>
              <a className='hover:text-gray-900 md:mr-6'>Projects</a>
            </Link>
            {/* <Link href={'/blog'}>
              <a className='hover:text-gray-900'>BLOG</a>
            </Link> */}
          </nav>
          <DarkModeToggleBtn />
        </div>
      </header>
    </>
  );
};

export default Header;
