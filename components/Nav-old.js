import { useState } from 'react';

const Nav = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className='relative bg-white'>
      <div className='px-4 mx-auto border-b-2 border-gray-100 max-w-7xl sm:px-6'>
        <div className='flex items-center justify-between py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#'>
              <h3 className='text-lg font-bold'>Uptime Verifier</h3>
            </a>
          </div>

          <div className='-my-2 -mr-2 md:hidden'>
            <button
              onClick={() => setOpenMobileMenu((prevState) => !prevState)}
              type='button'
              className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand'
              aria-expanded='false'
            >
              <span className='sr-only'>Open menu</span>

              {openMobileMenu ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>

          <nav className='items-center hidden space-x-14 md:flex'>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-brand'
            >
              Pricing
            </a>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-brand'
            >
              Support
            </a>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-brand'
            >
              Tools
            </a>

            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-brand'
            >
              Sign in
            </a>

            <a
              className='inline-flex px-5 py-2 font-semibold text-white transition rounded-full bg-brand hover:bg-brand-dark'
              href=''
            >
              Try it free
            </a>
          </nav>

          <div
            className={`${
              !openMobileMenu ? 'hidden' : ''
            } absolute inset-x-0 transition origin-top-right transform top-16 md:hidden`}
          >
            <div className='bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
              <div className='px-5 pt-5 pb-6'>
                <nav className='grid gap-y-8'>
                  <a
                    href='#'
                    className='flex items-center p-3 -m-3 rounded-md hover:bg-gray-50'
                  >
                    <span className='text-base font-medium text-gray-900 '>
                      Pricing
                    </span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center p-3 -m-3 rounded-md hover:bg-gray-50'
                  >
                    <span className='text-base font-medium text-gray-900 '>
                      Support
                    </span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center p-3 -m-3 rounded-md hover:bg-gray-50'
                  >
                    <span className='text-base font-medium text-gray-900 '>
                      Tools
                    </span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center p-3 -m-3 rounded-md hover:bg-gray-50'
                  >
                    <span className='text-base font-medium text-gray-900 '>
                      Sign in
                    </span>
                  </a>

                  <a
                    className='inline-block px-5 py-3 font-semibold text-center text-white transition rounded-full bg-brand hover:bg-brand-dark'
                    href=''
                  >
                    Try it free
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
