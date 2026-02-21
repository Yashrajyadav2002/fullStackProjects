import React from 'react'
import { FaSearch } from "react-icons/fa";

function search() {
  return (
    <div className='px-6 py-4'>
       <form action=''>
         <div className='flex space-x-3'>

           <label className=" input-bordered flex items-center   w-[90%]">
             <input type="text" className='grow' placeholder="Search" />
           </label>
             <button>
               <FaSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300'/>
             </button>
         </div>

       </form>
    </div>
  )
}

export default search