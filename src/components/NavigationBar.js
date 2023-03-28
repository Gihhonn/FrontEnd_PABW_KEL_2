import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import style from '@/styles/Navbar.module.scss';
import Notification from './Notification';
import Navprofile from './Navprofile';
import { MdLogout } from 'react-icons/md'
import { Menu } from '@headlessui/react';

const NavigationBar = ({ nav }) => {
    const handleSignOut = () => {
        localStorage.clear()
        navigate.reload()
    }
    const navigate = useRouter()
    const token = JSON.parse(localStorage.getItem('token'));
    const user = JSON.parse(localStorage.getItem('user'))
  return (
    <nav className={`${nav}`}>
        <div className='flex justify-between container mx-auto px-10 h-20 items-center'>
            <div className='flex justify-between items-center'>
                <div className=' cursor-pointer w-40' onClick={() => navigate.push('/')}>
                    <Image
                    src='/playground_assets/logo%20black.svg'
                    alt='logo'
                    width={109}
                    height={66}
                    />
                </div>
            </div>
            <div className='flex items-center hidden sm:flex'>
                {!token ? (
                    <div className=''>
                        <button className=' bg-[#3e5cb8] text-white px-4 py-2 rounded-lg' onClick={() => navigate.push('/sign-in')}>Sign In</button>
                    </div>
                ) : (
                    <div className='profil flex items-center'>
                        <Notification/>
                        {/* <div className='relative'>
                            <Notification/>
                        </div> */}
                        {/* <Navprofile/> */}
                        <Menu as='div' className='mr-3 text-xl cursor-pointer'>
      <Menu.Button className='flex items-center'>
        <img
        src={`https://ui-avatars.com/api/?name=${user.firstName}`}
        alt =''
        className='w-[40px] h-[40px] rounded-full'
        />
        <h2 className='text-white font-medium mx-2'>Hi, {user.firstName}</h2>
      </Menu.Button>
      <Menu.Items className=' absolute right-4 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Order
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
                        {/** */}
                        <button onClick={handleSignOut} className='bg-black bg-opacity-20 rounded-full px-2 py-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                            <MdLogout className='text-3xl text-white'/>
                        </button>
                        
                    </div>
                )}
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar