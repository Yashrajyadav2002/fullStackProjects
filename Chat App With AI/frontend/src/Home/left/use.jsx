import React from 'react'

function use() {
  return (
    <div>
      <div className=' py-2 flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer'>
        <div className=" avatar online">
           <div className="w-14 rounded-full">
             <img src="dp img.jpg" />
           </div>
        </div>
        <div>
            <h1 className='font-bold'>Vishal Pal</h1>
            <span>Vishalpal@gmail.com</span>
        </div>  
    </div>

       
    </div>
  )
}

export default use