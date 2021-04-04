import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  NavLink,
} from 'react-router-dom';
import authSlice from '../../../redux/slices/auth.slice';
import { CreateUserSchema } from '../../../utils/validation/schemas';
import InputBox from '../../../components/FormikFields/InputBox/InputBox';
import PasswordInput from '../../../components/FormikFields/PasswordInput/PasswordInput';
import Eye from '../../../assets/img/icons/Eye.png';

const Register = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role:''
  };

  const dispatch = useDispatch();
  const formikRef = useRef<any>(null);

  const registerBuilder = (values: any) => {
    console.log(values);
    dispatch(authSlice.actions.userSignUp(values));
  };

  const EyeIcon = (props: any) => {
    const { className } = props;
    return <img className={`mr-4 pr-1 cursor-pointer ${className}`} src={Eye} alt="" />;
  };

  return (
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        onSubmit={registerBuilder}
        validationSchema={() => CreateUserSchema}
      >
        {({
          handleSubmit,
          values,
        }) => (
          <>
            <div className="flex items-center justify-center md:justify-end md:px-4 text-sm font-medium py-1 w-full">
              <p className="font-normal text-15 mr-4 text-black md:text-white lg:text-black">
                Already have an  account?
              </p>
              <NavLink to="/" className="bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded">SIGN IN</NavLink>
            </div>
            <main className="w-full justify-center flex-col items-end px-24 formField sections h-full max-w-6xl">
              <div className="flex flex-col w-full items-start mb-8">
                <h4 className="f-28 font-semibold text-left w-full text-2xl text-black">Create a New Account</h4>
                <span className="text-gray-500">Enter your credentials to continue</span>
              </div>
              

              <div className="w-full bg-white flex flex-col">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="md:w-1/2 w-full flex flex-col items-start pb-4">
                    <InputBox name="firstName" label="First Name*" placeholder="" />
                  </div>
                  <div className="md:w-1/2 w-full flex flex-col items-start ml-3 pb-4">
                    <InputBox name="lastName" label="Last Name*" placeholder="" />
                  </div>
                </div>
                <div className="flex items-center md:flex-row flex-col">
                  <div className="md:w-1/2 w-full flex flex-col items-start md:mr-2 pb-4">
                    <InputBox name="email" label="Email*" placeholder="" />
                  </div>
                  <div className="md:w-1/2 w-full flex flex-col items-start md:ml-2 pb-4">
                    <PasswordInput
                      name="password"
                      label="Password*"
                      placeholder=""
                      righticon={EyeIcon}
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex items-center md:flex-row flex-col">
                <div className="w-full flex flex-col items-start pb-4">
                  <InputBox name="role" label="Role *" placeholder="" />
                </div>
              </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (values.email && values.password) handleSubmit();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full"
              >
                Register
              </button>
            </main>
          </>
        )}
      </Formik>
  );
};

export default Register;
