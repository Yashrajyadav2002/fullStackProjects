import React from 'react'
import Chatuser from './Chatuser';
import Messages from './Messages';
import Type from './Type';

 const Right = () => {
  return (

    <>
    <div className='w-[70%]  bg-slate-950 text-white'>
      <Chatuser></Chatuser>
      
      <div className='flex-vishal overflow-y-auto'
          style={{mixHeight:"calc(92vh - 8vh)"}}>
        <Messages></Messages>
      </div>
      <Type></Type>
    </div>

    </>
  )
};

export default Right;
