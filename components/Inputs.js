import { useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {label && (
        <label className='block mb-2 font-semibold text-gray-600'>
          {label}
        </label>
      )}
      <input
        {...field}
        {...props}
        className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-400 focus:ring-0'
      />
      {meta.touched && meta.error ? (
        <small className='text-brand'>{meta.error}</small>
      ) : null}
    </>
  );
};
