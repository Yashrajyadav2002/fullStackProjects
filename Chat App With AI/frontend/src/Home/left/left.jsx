import React from 'react'
import Search from './search';
import User from './User';

const Left = () => {
  return (
    <>
   <div className="w-[30%]  bg-black text-white ">

    <h1 className='font-bold text-3xl p-11'>Chat</h1>
      <Search></Search>
      <hr />
      <User></User>
    </div>
    </>
  )
};

export default Left;
