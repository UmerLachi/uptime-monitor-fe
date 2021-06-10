import Link from 'next/link';

const ForgotPasswordScreen = () => {
  return (
    <div className='px-4 mx-auto my-36 max-w-7xl'>
      <div className='max-w-sm mx-auto '>
        <h1 className='mb-3 text-2xl font-bold'>Reset password</h1>
        <p className='mb-6 text-gray-600'>
          Please enter the email address you used when creating your account.
        </p>

        <div className='mb-4'>
          <label className='block mb-2 font-semibold text-gray-600' htmlFor=''>
            Email address
          </label>
          <input
            className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-400 focus:ring-0'
            type='text'
          />
        </div>

        <button className='w-full px-4 py-2 mb-6 font-semibold text-white transition rounded-md bg-brand hover:bg-brand-dark'>
          Send Reset Email
        </button>

        <Link href='/signin'>
          <a className='block ml-1 text-sm font-medium text-center text-blue-500 underline'>
            Go back to sign in
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
