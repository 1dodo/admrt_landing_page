import React from 'react'
import logo from '../Group 1000005596 (3).svg'

const Navbar = () => {
  return (
    <div>
      <nav class="bg-sky-100 border-gray-200 ">
        <div className='max-w-screen-xl mx-auto '>
         <div class="flex justify-between p-4">
          <div>
            <a href="https://admrt.com/" class="">
            <img src={logo} class="md:h-12" alt="Flowbite Logo" />
           </a>
        </div>
  
      </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar