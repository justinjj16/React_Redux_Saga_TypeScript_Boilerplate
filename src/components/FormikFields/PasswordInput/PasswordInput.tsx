import React, { useState } from 'react';
import Eye from '../../../assets/img/icons/Eye.png';
import hide from '../../../assets/img/icons/hide.svg';

const { InputBox } = require('../InputBox/InputBox');

const EyeIcon = () => <img className="mr-4 pr-1 cursor-pointer" src={Eye} alt="eye" />;

const Hide = () => <img className="mr-4 pr-1 cursor-pointer" src={hide} alt="hide" />;

export const PasswordInput = (props: any) => {
  const [type, setType] = useState('password');
  const onClickRightButton = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };
  return (
    <InputBox
      autoComplete="off"
      name="password"
      label="Password"
      placeholder="password"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      type={type}
      righticon={type === 'password' ? EyeIcon : Hide}
      onClickRionghtButton={onClickRightButton}
    />
  );
};
export default PasswordInput;
