/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

export const InputBox = (props: any) => {
  const [field, meta] = useField(props);
  const {
    label,
    type,
    placeholder,
    name,
    righticon
  } = props;
  const isInError = (meta.touched && meta.error && true) || false;
  let inputClassName = 'bg-white border border-gray-400 rounded-lg border-blue-710focus focus:outline-none py-3 px-3 block w-full appearance-none leading-normal mb-1 text-black';
  if (isInError) {
    inputClassName = 'bg-white border border-gray-400 rounded-lg focus:outline-none py-3 px-3 block w-full appearance-none leading-normal mb-1 border-red-400 placeholder::text-red-500  text-black';
  }

  return (
    <div className="w-full flex flex-col items-start relative">
      <div className="form-item w-full">
        <input
          autoComplete="off"
          required
          {...field}
          {...props}
          name={name}
          type={type}
          placeholder={placeholder}
          className={inputClassName}
        />
        {righticon?(
          <div className="absolute top-0 right-0 h-full flex items-center">
            <props.righticon className="text-red-500" />
          </div>
        ):null}
        <label className={meta.touched && meta.error ? 'text-red-500' : 'text-gray-500'} htmlFor={label}>{label}</label>
      </div>
      {meta.touched && meta.error && (
        <div className="absolute text-right text-sm mt-10 right-0 text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

export default InputBox;

InputBox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  righticon:PropTypes.func
};

InputBox.defaultProps = {
  label: '',
  type: '',
  placeholder: '',
  name: '',
  righticon:null
};
