import Link from 'next/link';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useSnackbar } from 'react-simple-snackbar';
import { useRouter } from 'next/router';

import { signinUrl } from '../constants/urls';
import { TextField } from '../components/Inputs';

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

  const signinUser = useMutation((user) => axios.post(signinUrl, user));

  return (
    <div className='px-4 mx-auto my-36 max-w-7xl'>
      <div className='max-w-sm mx-auto '>
        <h1 className='mb-10 text-2xl font-bold text-center'>
          Sign in to Lachi Sols
        </h1>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(8, 'Invalid password').required(),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const { data } = await signinUser.mutateAsync(values);
              localStorage.setItem('userInfo', JSON.stringify(data));
              resetForm();
              router.push('/');
            } catch (err) {
              if (err.response && err.response.data.message) {
                openSnackbar(err.response.data.message);
              } else {
                openSnackbar('Failed to sign in, please retry later');
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='mb-4'>
                <TextField label='Email address' type='text' name='email' />
              </div>

              <div className='mb-6'>
                <div className='flex items-center justify-between'>
                  <label className='block mb-2 font-medium text-gray-600'>
                    Password
                  </label>
                  <Link href='/password/forgot'>
                    <a className='block mb-2 text-sm font-medium text-blue-500 underline'>
                      Forgot password?
                    </a>
                  </Link>
                </div>

                <TextField type='password' name='password' />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full btn btn-primary'
              >
                {isSubmitting ? 'loading...' : 'Sign in'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SigninScreen;
