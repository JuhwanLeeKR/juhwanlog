import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className='body-font'>
        <div>
          <div className='container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row'>
            <Link href={'/'}>
              <div className='flex items-center justify-center font-medium text-gray-900 title-font md:justify-start'>
                <span className='ml-3 text-xl'>이주환 포트폴리오</span>
              </div>
            </Link>
            <p className='mt-4 text-sm text-center text-gray-500 sm:ml-6 sm:mt-0'>
              © 2022 — Website created using Next.js
              <a
                href='https://github.com/JuhwanLeeKR'
                rel='noopener noreferrer'
                target='_blank'
                className='ml-1 text-gray-600'
              >
                @JuhwanLeeKR
              </a>
            </p>
            <span className='inline-flex items-center justify-center gap-2 mt-4 sm:ml-auto sm:mt-0 sm:justify-start lg:gap-3'>
              <a
                className='text-gray-500'
                href='https://open.kakao.com/o/sHwUNMle'
                rel='noopener noreferrer'
                target='_blank'
              >
                <svg
                  viewBox='0 0 208 191.94'
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-7 h-7'
                >
                  <g>
                    <polygon
                      className='cls-1'
                      points='76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49'
                    />
                    <path
                      className='cls-1'
                      d='M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z'
                    />
                  </g>
                </svg>
              </a>
              <a
                className='text-gray-500'
                href='mailto:dev.juhwanlee@gmail.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-9 w-9'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
              </a>
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
                href='https://github.com/JuhwanLeeKR/portfolio-nextjs'
                rel='noopener noreferrer'
                target='_blank'
              >
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-8 h-8'
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
};

export default Footer;
