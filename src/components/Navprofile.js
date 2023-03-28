import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { CgProfile, CgLogOut } from 'react-icons/cg'
import { RiFilePaperLine } from 'react-icons/ri'

const Navprofile = () => {
    const router = useRouter()
    const [dropdown, setDropdown] = useState(false)
    const handleToggle = () => {
      setDropdown(!dropdown)
    }
    const user = JSON.parse(localStorage.getItem('user'))
    const test = () => {
        console.log("hello")
    }
  return (
    <div className='mr-3 text-xl cursor-pointer'>
      <div onClick={handleToggle} className='inline-flex items-center bg-black bg-opacity-20 rounded-full px-2 py-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
        <img
            src={`https://ui-avatars.com/api/?name=${user.firstName}`}
            alt =''
            className='w-[40px] h-[40px] rounded-full'
            />
            <h2 className='text-white font-medium mx-2'>Hi, {user.firstName}</h2>
      </div>
      {dropdown  && (
        <div className='absolute right-[16rem] mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='flex flex-col'>
              <button onClick={() => console.log('test')} className='py-1 px-1 m-1 cursor-pointer'>Profile</button>
              <button className='py-1 px-1 m-1' >Order</button>
          </div>

        </div>
      )}
      
    </div>
    
  )
}

export default Navprofile


// {/* <Menu as='div' className='mr-3 text-xl cursor-pointer'>
//       <div>
//         <Menu.Button className='inline-flex items-center bg-black bg-opacity-20 rounded-full px-2 py-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75' >
//             <img
//             src={`https://ui-avatars.com/api/?name=${user.firstName}`}
//             alt =''
//             className='w-[40px] h-[40px] rounded-full'
//             />
//             <h2 className='text-white font-medium mx-2'>Hi, {user.firstName}</h2>
//         </Menu.Button>
//       </div>
//       <Transition 
      
//       enter="transition ease-out duration-100"
//       enterFrom="transform opacity-0 scale-95"
//       enterTo="transform opacity-100 scale-100"
//       leave="transition ease-in duration-75"
//       leaveFrom="transform opacity-100 scale-100"
//       leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <button onClick={() => console.log('hello')}>hello</button>
//           <button>hello2</button>
//           <button>hello3</button>
//           {/* <div className='px-1 py-1'>
//             <Menu.Item > 
//                 {({ active }) => (
//                     <a onClick={test} className={`${active ? 'bg-blue-300 text-white' : 'text-gray-900'} group flex cursor-pointer items-center w-full rounded-md px-2 py-2 text-lg`}>
//                         Profile
//                     </a>
//                 )}
//             </Menu.Item>
           
//           </div> */}
//         </Menu.Items>
//       </Transition>
//     </Menu> */}