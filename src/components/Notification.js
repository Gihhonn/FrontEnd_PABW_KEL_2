import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { IoMdNotificationsOutline, IoMdAirplane } from "react-icons/io";


const Notification = ( {style} ) => {
const notifs = [
  { id: 1, title: 'Order: tf53fd203-736df33-3837f', content: 'Pembayaran telah dikonfirmasi' },
  { id: 2, title: 'Promo Tahun Baru', content: 'Diskon di Tahun Baru untuk semua pembayaran via Dana' },
  { id: 3, title: 'Wisata Liburan Ke Bali', content: 'Ayo segera pesan tiket anda dan berlibur ke Bali' },
]
  return (
    <Menu as='div' className='mr-3 text-xl cursor-pointer'>
      <div>
        <Menu.Button className='inline-flex bg-black bg-opacity-20 rounded-full px-2 py-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75' >
          <IoMdNotificationsOutline className='text-2xl text-white' aria-hidden="true"/>
        </Menu.Button>
      </div>
      <Transition 
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="fixed right-[22rem] cursor-pointer mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className='px-1 py-1 cursor-pointer'>
            {notifs.map((items) => {
              return (
                
                 <Menu.Item key={items.id}> 
                  {({ active }) => (
                    <div className={`${active ? 'bg-blue-300 text-white' : 'text-gray-900'} group flex flex-col w-full cursor-pointer rounded-md px-2 py-2 text-sm`}>
                      <h1>{items.title}</h1>
                      <h2>{items.content}</h2>
                    </div>
                  )}
            </Menu.Item>
                
              )
            })}
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    // <div className='mr-3 text-xl cursor-pointer'>
    //   <IoMdNotificationsOutline className=' text-3xl text-white'/>
    // </div> 
  )
}

export default Notification