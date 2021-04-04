import React, {
  useEffect, useState,
} from 'react';
import filterImg from '../../../assets/img/icons/filter.svg';
import right from '../../../assets/img/icons/right.png';
import left from '../../../assets/img/icons/left.png';
import search from '../../../assets/img/icons/Search.png';

import uparrowActive from '../../../assets/img/icons/uparrowActive.svg';

const MerchantsList = () => {
  
  return (
    <div className="py-4 md:p-6 pt-6 w-full h-full-calc flex flex-col font-black">
      <div>
        <div className="fixed top-0 z-50 w-4/12 ml-1 h-525 hidden md:flex flex-col justify-center">
          <input
            className="topSearch focus:outline-none border border-transparent focus:bg-white md:focus:border-gray-300 placeholder-gray-600 rounded-4 bg-gray-110 py-3 pr-4 md:pl-12 block appearance-none leading-normal w-full"
            type="text"
            placeholder="Search for Inventory type..."
          />
          <div className="h-full w-12 absolute top-0 flex items-center md:left-0 right-0">
            <img src={search} className="pl-4" alt="search" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2 md:px-0">
        <div className="flex flex-col">
          <p className="text-xl">Inventory</p>
        </div>
        <div className="flex items-center">
          <div className="md:flex hidden items-center text-blue-710 hover:text-white bg-blue-710hover justify-center border rounded-4 border-blue-710 px-4 py-2 mr-2 h-10 cursor-pointer bg-white">
            <img src={filterImg} alt="Filter" />
            <p className="text-sm ml-1">Filter</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full-calc bg-white rounded-4 mt-4 p-4 pb-0 mb-12 md:mb-0">
        <div className="w-full h-full">
          <div className="w-full h-85 overflow-x-auto overflow-y-hidden md:pb-16">
            <table className="w-full border">
              <thead className="w-full">
                <tr className="bg-gray-110 ">
                  <th className="pl-4 py-4 text-left" aria-label="stats" />
                  <th className="pr-4 pl-1 py-4 text-left font-medium">#</th>
                  <th className="px-4 py-2 text-left w-13 cursor-pointer" >
                    <div className="flex items-center">
                      <span className="font-medium">Inventory Name</span>
                      <img src={uparrowActive} className="ml-2 cursor-pointer" alt="up" />
                    </div>
                  </th>
                  <th className="px-4 py-4 text-left cursor-pointer">
                    <div className="flex items-center">
                      <span className="font-medium">Price</span>
                      <img src={uparrowActive} className="ml-2 cursor-pointer" alt="Filter" />
                    </div>
                  </th>
                  <th className="px-4 py-4 text-left font-medium">Status</th>
                  <th className="px-4 py-4 text-left" aria-label="stats" />
                  <th className="px-4 py-4 text-left" aria-label="stats" />
                </tr>
              </thead>
              <tbody className="w-full h-full">
                      <tr
                        className="w-full relative cursor-pointer"
                      >
                        <td className="pl-4 py-4 border-b">
                          <div className="flex justify-center items-center">
                            <label className="containers h-5 w-3 text-gray-600  text-sm flex justify-center items-center relative pl-8 cursor-pointer" htmlFor="ListItem">
                              <input
                                type="checkbox"
                                className="absolute cursor-pointer left-0  h-5 w-5 z-50 opacity-0"
                              />
                              <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white border border-gray-400 rounded-4" />
                            </label>
                            {' '}
                          </div>
                        </td>
                        <td className="pr-4 pl-1 py-4 text-base text-gray-800 border-b">
                         1
                        </td>
                        
                        <td className="px-4 py-4 border-b">
                              <button
                                type="button"
                                className="bg-green-710 w-20 py-1 rounded-4 text-white text-xs relative tooltip2"
                              >
                                Active
                                <span className="tooltiptext flex invisible bg-white text-gray-900 px-3 py-3 text-center absolute z-50 rounded-4">
                                  Click here to Inactive the account
                                </span>
                              </button>
                        </td>
                        
                      </tr>
                  ))
                )
                    {/* <tr>
                      <td colSpan="11"><div className="w-full flex justify-center items-center py-5">no data found!!</div></td>
                    </tr> */}
              </tbody>
            </table>
          </div>
          <div className="h-15 w-full flex justify-end items-center md:pb-8 right-0 md:mr-4 fixed md:static bottom-0 bg-white">
            <span className="mr-8 text-xs">
             1
              -
              5
              of
              100
            </span>
            <div
              tabIndex={0}
              role="button"
              className={`hover:bg-gray-500 flex justify-center items-center w-6 h-6 rounded-4 mr-2 bg-blue-710`}
            >
              <img src={left} alt="left arrow" />
            </div>
            <div
              className={`hover:bg-gray-500 flex justify-center items-center w-6 h-6 rounded-4 ml-2 bg-gray-500 cursor-not-allowed`}
            >
              <img src={right} alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantsList;
