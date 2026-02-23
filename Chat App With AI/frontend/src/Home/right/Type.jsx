import React from 'react'
import { BsSendFill } from "react-icons/bs";

function Type() {
  return (
    <>
   
       <div className='flex space-x-3 h-[10vh] text-center bg-gray-800'>
         <div className='w-[60%] mx-4'>
           <input type="text" placeholder="Type here" className="input input-bordered w-full py-3 px-3 rounded-xl grown outline-none bg-slate-700 mt-1" />
         </div>
             <button className='text-2xl'>
                <BsSendFill />
             </button>
         </div>

    </>
  )
}

export default Type