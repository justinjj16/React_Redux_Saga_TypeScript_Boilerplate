/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProfilePic } from '../../assets/images';
import './styles.scss';

const Sidenav = () => (
  <aside className="relative bg-sidebar h-screen w-1/5 hidden sm:block">
    <div className="bg-activeBlue profile-card pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm shadow-sm mx-auto mb-8">
      <div className="flex flex-col items-center justify-center w-full text-white pb-4">
        <img className="h-full w-24 pt-3" src={ProfilePic} />
        <h1 className="flex text-white font-bold text-lg pt-3">Justin Joseph</h1>
        <h6 className="font-medium">Garland Dallas TX</h6>
      </div>
      <div className="sidebar-profile pt-6 flex flex-wrap mx-6 justify-center">
        <NavLink
          to="/dashboard"
        >
        </NavLink>
      </div>
    </div>
    <div className="flex flex-wrap justify-between menu-items">
      <NavLink
        to="/"
        activeClassName="activeClass"
        className="menu-card justify-center items-center overflow-hidden mx-auto"
      >
        <div className="flex flex-col items-center justify-center px-3 py-5">
          <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5624 0H2.18742C0.981216 0 0 0.981216 0 2.18742V7.81242C0 9.01886 0.981216 10.0001 2.18742 10.0001H11.5624C12.7689 10.0001 13.7501 9.01886 13.7501 7.81242V2.18742C13.7501 0.981216 12.7689 0 11.5624 0Z" />
            <path d="M11.5624 12.4999H2.18742C0.981216 12.4999 0 13.4811 0 14.6875V27.8125C0 29.0187 0.981216 30 2.18742 30H11.5624C12.7689 30 13.7501 29.0187 13.7501 27.8125V14.6875C13.7501 13.4811 12.7689 12.4999 11.5624 12.4999Z" />
            <path d="M27.8125 19.9999H18.4375C17.2311 19.9999 16.2499 20.9811 16.2499 22.1875V27.8125C16.2499 29.0187 17.2311 30 18.4375 30H27.8125C29.0187 30 30 29.0187 30 27.8125V22.1875C30 20.9811 29.0187 19.9999 27.8125 19.9999Z" />
            <path d="M27.8125 0H18.4375C17.2311 0 16.2499 0.981216 16.2499 2.18742V15.3124C16.2499 16.5189 17.2311 17.5001 18.4375 17.5001H27.8125C29.0187 17.5001 30 16.5189 30 15.3124V2.18742C30 0.981216 29.0187 0 27.8125 0V0Z" />
          </svg>
          <h1 className="flex pt-3 text-xs">Home</h1>
        </div>
      </NavLink>
      
    </div>
  </aside>
);

export default Sidenav;
