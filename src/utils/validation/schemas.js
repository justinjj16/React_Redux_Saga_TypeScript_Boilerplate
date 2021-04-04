/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const CreateUserSchema = Yup.object().shape({
  email: Yup.string().required('Required').email('Valid email required'),
  password: Yup.string()
    .min(8)
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters including Alphabet, Number and Special Character',
    ),
    firstName:Yup.string().required('Required'),
    lastName:Yup.string().required('Required'),
    role:Yup.string().required('Required')
});

