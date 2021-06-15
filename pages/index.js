import Image from 'next/image';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useMutation } from 'react-query';

import { TextField } from '../components/Inputs';
import { monitorUrl } from '../constants/urls';

const Home = () => {
  const mutation = useMutation((url) => axios.post(monitorUrl, url));

  return (
    <>
      <section className='px-4 py-24'>
        <h1 className='text-4xl font-bold text-center '>
          Lachi Sols Website Uptime Test
        </h1>
        <p className='mt-5 text-xl text-center '>
          Down for everyone? Or is it just me?
        </p>

        <Formik
          initialValues={{ url: '' }}
          validationSchema={Yup.object({
            url: Yup.string()
              .url('Please enter a valid URL. eg: https://twitter.com')
              .required(''),
          })}
          onSubmit={(values) => {
            mutation.mutate(values);
          }}
        >
          {({ dirty, isValid }) => (
            <Form>
              {mutation.isLoading ? (
                <div className='mt-5 text-center'>
                  <div className='cs-spinner'>
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
              ) : (
                <>
                  <div className='flex flex-col justify-center max-w-xl mx-auto mt-8 md:flex-row'>
                    <div className='w-full mb-4 mr-4'>
                      <TextField
                        type='text'
                        name='url'
                        placeholder='Enter a webpage URL'
                      />
                    </div>
                    <div className='w-full md:w-36'>
                      <button
                        type='submit'
                        disabled={!(isValid && dirty)}
                        className='w-full btn btn-primary'
                      >
                        Test Site
                      </button>
                    </div>
                  </div>
                  {mutation.isSuccess ? (
                    <div
                      className={`max-w-xl p-6 mx-auto mt-10 border-t-4 ${
                        mutation.data.data.status === 'up'
                          ? 'border-green-500'
                          : 'border-red-500'
                      }  rounded shadow`}
                    >
                      {mutation.data.data.status === 'up' ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-12 h-12 mx-auto text-green-500'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-12 h-12 mx-auto text-red-500'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      )}

                      <h3 className='mt-4 text-2xl font-medium text-center'>
                        {mutation.data.data.url} is{' '}
                        <span
                          className={`font-bold ${
                            mutation.data.data.status === 'up'
                              ? 'text-green-500'
                              : 'text-red-500'
                          } underline`}
                        >
                          {mutation.data.data.status.toUpperCase()}
                        </span>
                      </h3>

                      <div className='mt-6 text-center'>
                        {mutation.data.data.status === 'up' &&
                          mutation.data.data.image && (
                            <Image
                              src={mutation.data.data.image}
                              width={800}
                              height={600}
                            />
                          )}
                        {mutation.data.data.status === 'down' && (
                          <Image
                            src='/img/down-error.svg'
                            width={200}
                            height={200}
                          />
                        )}
                      </div>
                    </div>
                  ) : null}
                </>
              )}
            </Form>
          )}
        </Formik>
      </section>

      <section className='px-4 py-24 bg-gray-50'>
        <div className='flex flex-col items-center mx-auto lg:flex-row max-w-7xl'>
          <div className='mb-12 md:px-6 lg:w-1/2'>
            <h2 className='text-3xl'>
              How Website Downtime <br className='hidden lg:block' /> Impacts
              Your SEO?
            </h2>
            <p className='mt-6 text-gray-500'>
              Googlebot indexes your website by crawling the pages of your
              website. The crawler tries to reach your website throughout the
              day to check if it is up again. In the meantime, your site will
              experience a temporary downfall In Google search results rankings.
              But if the website is down for days, Google will completely remove
              your site from its index.
            </p>
            <p className='mt-6 text-gray-500'>
              The most obvious impact of downtime is that it prevents your
              potential customers from using your site. Not only does it affect
              sales, but the bounce rate of the website increases. A negative
              bounce rate will rank you down in the search. One bad thing leads
              to another.
            </p>
          </div>
          <div className='text-right lg:w-1/2'>
            <Image src='/img/down-rank.png' width={540} height={340} />
          </div>
        </div>
      </section>

      <section className='px-4 py-24'>
        <div className='flex flex-col items-center mx-auto lg:flex-row max-w-7xl'>
          <div className='order-2 lg:w-1/2'>
            <Image src='/img/alert-down.png' width={550} height={320} />
          </div>
          <div className='order-1 mb-12 md:px-6 lg:w-1/2'>
            <h2 className='text-3xl font-medium'>How can we help you?</h2>
            <p className='mt-6 text-gray-500'>
              LachiSols offers cost-effective and reliable uptime monitoring for
              your website.
            </p>
            <p className='mt-6 text-gray-500'>
              Downtime can have a negative impact on your business. It can cause
              you to lose revenue, create a negative impression, and impact your
              search rankings and SEO in a massive way. With LachiSols, you can
              prevent them or get your site up and running as quickly as
              possible.
            </p>
            <Link href='/signup'>
              <a className='inline-flex items-center hidden pb-2 mt-6 border-b-2 border-opacity-50 border-brand'>
                <span className='mr-4'>Start Monitoring</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 text-brand'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className='hidden px-4 py-12 text-center bg-gray-50'>
        <div className='mx-auto max-w-7xl'>
          <h2 className='text-3xl leading-relaxed'>
            <span className='font-bold'>Website downtimes are stressful</span>.{' '}
            <br /> Be the first to know when your site is down.
          </h2>
          <Link href='/signup'>
            <a className='px-6 py-3 mt-6 text-xl btn btn-primary'>
              Try it free
            </a>
          </Link>
          <p className='mt-6 text-sm text-gray-600'>No credit card required</p>
        </div>
      </section>

      <section className='px-4 py-12 text-center bg-gray-50'>
        <div className='flex flex-col items-center justify-between mx-auto space-y-6 lg:space-y-0 lg:flex-row max-w-7xl'>
          <div>
            <a href='#'>
              <Image src='/logo.png' width={150} height={35} />
            </a>
          </div>

          <div>
            <h3>
              Copyright © {new Date().getFullYear()} Lachi Solutions. All rights
              reserved.
            </h3>
          </div>
          <div className='space-x-5'>
            <a href='https://www.facebook.com/lachisolutions'>
              <Image src='/img/facebook.svg' width={25} height={25} />
            </a>
            <a href='https://twitter.com/UmerLachi'>
              <Image src='/img/twitter.svg' width={25} height={25} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
