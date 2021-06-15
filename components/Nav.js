import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  return (
    <div className='bg-white border-b-2 border-gray-100 '>
      <div className='flex items-center justify-center px-4 py-4 mx-auto sm:px-6 max-w-7xl'>
        <Link href='/'>
          <a>
            <Image src='/logo.png' width={150} height={35} />
          </a>
        </Link>
        <a
          className='hidden'
          onClick={() => router.push('https://www.pawnhost.com')}
          href='#'
        >
          Hello
        </a>
        <div className='items-center hidden ml-auto space-x-10 md:flex'>
          <a
            className='text-base font-medium text-gray-500 hover:text-brand'
            href='https://www.pawnhost.com/cheap-vps-hosting.php'
          >
            VPS Hosting
          </a>
          <a
            className='text-base font-medium text-gray-500 hover:text-brand'
            href='https://www.pawnhost.com/cheap-dedicated-server.php'
          >
            Dedicated Hosting
          </a>
          <a
            className='text-base font-medium text-gray-500 hover:text-brand'
            href='https://www.xbulkemailverifier.com/'
          >
            Email Verifier
          </a>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className='bg-white border-b-2 border-gray-100 '>
  //     <div className='flex items-center px-4 py-4 mx-auto sm:px-6 max-w-7xl'>
  //       <Link href='/'>
  //         <a>
  //           <Image src='/logo.png' width={150} height={35} />
  //         </a>
  //       </Link>
  //       <div className='items-center hidden ml-auto space-x-10 md:flex'>
  //         {router.pathname === '/signin' ? (
  //           <>
  //             <p>New to Lachi Sols?</p>
  //             <Link href='/signup'>
  //               <a className='btn btn-light'>Create an account</a>
  //             </Link>
  //           </>
  //         ) : (
  //           <>
  //             <a
  //               className='text-base font-medium text-gray-500 hover:text-brand'
  //               href='#'
  //             >
  //               Pricing
  //             </a>
  //             <a
  //               className='text-base font-medium text-gray-500 hover:text-brand'
  //               href='#'
  //             >
  //               Support
  //             </a>
  //             <a
  //               className='text-base font-medium text-gray-500 hover:text-brand'
  //               href='#'
  //             >
  //               Tools
  //             </a>
  //             <Link href='/signin'>
  //               <a className='text-base font-medium text-gray-500 hover:text-brand'>
  //                 Sign in
  //               </a>
  //             </Link>
  //             <Link href='/signup'>
  //               <a className='btn btn-primary'>Try it free</a>
  //             </Link>
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Nav;
