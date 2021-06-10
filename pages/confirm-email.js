import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { confirmEmailUrl } from '../constants/urls';

const ConfirmEmail = ({ status }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!status || !status.success) return;

    localStorage.setItem('userInfo', JSON.stringify(status.data));
  }, [status]);

  useEffect(() => {
    if (
      localStorage.getItem('userInfo') &&
      JSON.parse(localStorage.getItem('userInfo'))
    ) {
      setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
    }
  }, []);

  if (status && status.success) {
    return (
      <div className='px-4 mx-auto space-y-6 my-28 max-w-7xl'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-20 h-20 mx-auto text-green-500'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
            clipRule='evenodd'
          />
        </svg>
        <h2 className='text-4xl font-bold text-center '>Verified!</h2>
        <p className='font-medium text-center text-gray-500 '>
          Yay! You have successfully verified your email
        </p>
        <Link href='/signin'>
          <a className='block ml-1 font-medium text-center text-blue-500 underline'>
            Sign in to your account
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className='px-4 mx-auto my-28 max-w-7xl'>
      {status && !status.success && (
        <div className='flex max-w-lg p-4 mx-auto mb-12 font-semibold text-white bg-red-500 rounded-md'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 mr-3'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>{' '}
          {status.data}
        </div>
      )}

      {userInfo && (
        <div className='max-w-md mx-auto space-y-6 text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-16 h-16 mx-auto'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20'
            />
          </svg>
          <h1 className='text-3xl '>Verify your email</h1>
          <p>
            We sent a verification email to{' '}
            <span className='font-semibold'>{userInfo.email}</span>. Click the
            link inside to start using Lachi Sols!
          </p>

          <Link href='/signin'>
            <a className='block ml-1 font-medium text-blue-500 underline'>
              Email didn't arrive?
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  // if hash
  if (query.hash) {
    try {
      // Validate the hash
      const { data } = await axios.post(confirmEmailUrl, { hash: query.hash });

      // if success return user data
      return {
        props: {
          status: {
            success: true,
            data,
          },
        },
      };
    } catch (err) {
      let message = 'Something went wrong, please retry later';

      if (err.response && err.response.data.message) {
        message = err.response.data.message;
      }

      // If error return error
      return {
        props: {
          status: {
            success: false,
            data: message,
          },
        },
      };
    }
  }

  // if no hash return empty object
  return {
    props: {},
  };
};

export default ConfirmEmail;
