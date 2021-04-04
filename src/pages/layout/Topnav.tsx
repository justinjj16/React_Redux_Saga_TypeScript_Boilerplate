import React from 'react';
import { useDispatch } from 'react-redux';
import authSlice from '../../redux/slices/auth.slice';
const Topnav = () => {

  const dispatch = useDispatch();
  const signout = ()=>{
    dispatch(authSlice.actions.logout());
  }

  return(
  <>
    <header className="w-full flex items-center py-2 pl-6 pr-6 sm:flex pb-5">
      <div className="w-1/2" />
      <div  className="relative w-1/2 flex justify-end">
        <button onClick={()=>signout()} className="realtive z-10 px-5 mt-2 h-8 pt-2 pb-1 overflow-hidden rounded-full chat-box flex justify-center items-center mr-3">
          Signout
        </button>
      </div>
    </header>
  </>
);
  }
export default Topnav;
