import Link from 'next/link';

const SigninScreen = () => (
  <div className='px-4 mx-auto mt-12 max-w-7xl'>
    <h1 className='text-2xl font-bold text-center'>Reset password</h1>
    <div className='max-w-md p-10 mx-auto mt-6 bg-white rounded-md shadow'>
      <div className='mb-6'>
        <label className='block mb-2 font-medium text-gray-600' htmlFor=''>
          Email address
        </label>
        <input
          className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-400 focus:ring-0'
          type='text'
        />
      </div>

      <div className='flex items-center'>
        <div className='w-1/2'>
          <Link href='/signin'>
            <a className='block text-sm font-medium text-gray-600 underline'>
              Go back to signin
            </a>
          </Link>
        </div>
        <div className='w-1/2 text-right'>
          <button
            type='button'
            className='px-4 py-2 font-semibold text-white transition rounded-md bg-brand hover:bg-brand-dark'
          >
            Send Reset Email
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SigninScreen;
