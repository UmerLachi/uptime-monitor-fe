import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import axiod from 'axios';
import { useSnackbar } from 'react-simple-snackbar';
import { useRouter } from 'next/router';

import { TextField } from '../components/Inputs';
import { accountsUrl } from '../constants/urls';

const SigninScreen = () => {
  const router = useRouter();

  const [openSnackbar] = useSnackbar({
    position: 'top-center',
    style: {
      background: '#f44336',
      color: '#fff',
      fontWeight: '700',
      fontFamily: 'inherit',
    },
  });

  const createAccount = useMutation((newAccount) =>
    axiod.post(accountsUrl, newAccount)
  );

  return (
    <div className='px-4 mx-auto my-20 max-w-7xl'>
      <div className='max-w-sm mx-auto'>
        <h1 className='mb-8 text-2xl font-bold'>Create your account</h1>

        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            fullName: Yup.string().min(3).required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required(),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const { data } = await createAccount.mutateAsync(values);
              localStorage.setItem('userInfo', JSON.stringify(data));
              resetForm();
              router.push('/confirm-email');
            } catch (err) {
              if (err.response && err.response.data.message) {
                openSnackbar(err.response.data.message);
              } else {
                openSnackbar('Something went wrong, please retry later');
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='mb-4'>
                <TextField label='Full name' type='text' name='fullName' />
              </div>

              <div className='mb-4'>
                <TextField label='Email address' type='text' name='email' />
              </div>

              <div className='mb-6'>
                <TextField label='Password' type='password' name='password' />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full mb-6 btn btn-primary'
              >
                {isSubmitting ? 'loading...' : 'Sign up'}
              </button>
              <p className='text-sm text-center'>
                Already have an account?{' '}
                <Link href='/signin'>
                  <a className='ml-1 font-medium text-blue-500 underline'>
                    Sign in
                  </a>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SigninScreen;
