/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Search, User1, DownArrow } from '../../assets/images';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [showSelect, setshowSelect] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <main className="w-full flex-grow pl-5 pr-5">
      <div className="fixed top-0 mt-5 z-40 w-4/12 hidden md:flex flex-col justify-center">
        <input
          className="topSearch focus:outline-none border placeholder-gray-600 rounded-4 py-4 pr-4 md:pl-12 block appearance-none leading-normal w-full rounded-full bg-transparent text-13px"
          type="text"
          placeholder="Search here"
        />
        <div className="h-full w-12 absolute top-0 flex items-center md:left-0 right-0">
          <img src={Search} className="pl-4" alt="search" />
        </div>
      </div>
      <div className="text-black">
      Dashboard
      </div>
    </main>
  );
};
export default Dashboard;
