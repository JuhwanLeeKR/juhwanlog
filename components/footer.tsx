import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className='body-font'>
        <div>
          <div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
            <Link href={'/'}>
              <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
                <span className='ml-3 text-xl'>이주환 포트폴리오</span>
              </a>
            </Link>
            <p className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4'>
              © 2022 —
              <a
                href='https://github.com/JuhwanLeeKR'
                rel='noopener noreferrer'
                target='_blank'
                className='text-gray-600 ml-1'
              >
                @JuhwanLeeKR
              </a>
            </p>
            <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2'>
              <a
                className='text-gray-500'
                href='https://velog.io/@leejuhwan'
                rel='noopener noreferrer'
                target='_blank'
              >
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-7 h-7'
                  viewBox='0 0 24 24'
                >
                  <path d='M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z' />
                </svg>
              </a>
              <a
                className='text-gray-500'
                href='https://github.com/JuhwanLeeKR'
                rel='noopener noreferrer'
                target='_blank'
              >
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-7 h-7'
                  viewBox='0 0 24 24'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
