import Image from 'next/image'
import React from 'react'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';

const Navtabs = () => {
    const router = useRouter()
    const flightSchema = yup.object().shape({
      depatureCity: yup.string().required('cant be empty'),
      arrivalCity: yup.string().required('cant be empty'),
      depatureDate: yup.date().required('cant be empty'),
      arrivalDate: yup.date().required('cant be empty'),
      flightClass: yup.string().required('cant be empty'),
      passenger: yup.number().required('cant be empty')
    })

    const roomSchema = yup.object().shape({
        locationHotel: yup.string().required('cant be empty'),
        checkin: yup.date().required('cant be empty'),
        checkout: yup.date().required('cant be empty'),
      })

    const { register,handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(flightSchema, roomSchema)})

    const onSubmit = (data) => {
      console.log(data)
    }
  return (
    <div className='w-full py-4 sm:px-0 mx-auto'>
        <Tab.Group>
            <Tab.List className='flex w-[50%] m-auto rounded-xl bg-blue-900/20 p-1'>
                <Tab
                className={({ selected }) => classNames('w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white')}
                >Flights</Tab>
                <Tab
                className={({ selected }) => classNames('w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white')}
                >Rooms</Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel className='flex justify-center'>
                    <form className='flex w-full flex-col mx-4'>
                        <div className='flex w-auto h-[100px] my-3 gap-8 items-center mx-auto justify-center'>
                            <div className='flex w-auto h-[100px] gap-3 relative my-[0.5rem] mx-auto items-start'>
                                <Image
                                alt='image'
                                src="/playground_assets/depature%20city%20icon2.svg"
                                width={100}
                                height={100}
                                className='w-[50px] h-[50px] self-center object-cover'
                                />
                                <div className='flex self-center items-start flex-col gap-[0.5rem]'>
                                    <span className=' text-[#5d5f67] text-lg'>Depature City</span>
                                    <input placeholder='Where want....' type='text' {...register("depatureCity")}/>
                                </div>
                            </div>
                            <div className='flex w-auto h-[100px] gap-3 relative my-[0.5rem] mx-auto items-start'>
                                <Image
                                alt='image'
                                src="/playground_assets/depature%20city%20icon2.svg"
                                width={100}
                                height={100}
                                className='w-[50px] h-[50px] self-center object-cover'
                                />
                                <div className='flex self-center items-start flex-col gap-[0.5rem]'>
                                    <span className=' text-[#5d5f67] text-lg'>Arrival City</span>
                                    <input placeholder='Where want....' type='text' {...register("arrivalCity")}/>
                                </div>
                            </div>
                            <div className='flex w-auto h-[100px] gap-3 relative my-[0.5rem] mx-auto items-start'>
                                <Image
                                alt='image'
                                src="/playground_assets/calender%20depature.svg"
                                width={100}
                                height={100}
                                className='w-[50px] h-[50px] self-center object-cover'
                                />
                                <div className='flex self-center items-start flex-col gap-[0.5rem]'>
                                    <span className=' text-[#5d5f67] text-lg'>Departure Date</span>
                                    <input className='w-[200px]' placeholder='Where want....' type='date' {...register("depatureDate")}/>
                                </div>
                            </div>
                            <div className='flex w-auto h-[100px] gap-3 relative my-[0.5rem] mx-auto items-start'>
                                <Image
                                alt='image'
                                src="/playground_assets/calender%20depature.svg"
                                width={100}
                                height={100}
                                className='w-[50px] h-[50px] self-center object-cover'
                                />
                                <div className='flex self-center items-start flex-col gap-[0.5rem]'>
                                    <span className=' text-[#5d5f67] text-lg'>Arrival Date</span>
                                    <input className='w-[200px]' placeholder='Where want....' type='date' {...register("depatureDate")}/>
                                </div>
                            </div>
                        </div>
                        {/** --------- */}
                        <div className='flex w-auto h-[100px] my-3 gap-8 items-center mx-auto justify-center'>
                            <div className='flex w-auto h-[100px] gap-3 relative my-[0.5rem] mx-auto items-start'>
                                <Image
                                alt='image'
                                src="/playground_assets/circle%20icon.svg"
                                width={100}
                                height={100}
                                className='w-[50px] h-[50px] self-center object-cover'
                                />
                                <div className='flex self-center items-start flex-col gap-[0.5rem]'>
                                    <span className=' text-[#5d5f67] text-lg'>Class</span>
                                    <input placeholder='Where want....' type='text' {...register("flightClass")}/>
                                </div>
                            </div>
                            <div className='flex w-auto h-[100px] gap-3 relative my-[0.5rem] mx-auto items-start'>
                                <Image
                                alt='image'
                                src="/playground_assets/circle%20icon2.svg"
                                width={100}
                                height={100}
                                className='w-[50px] h-[50px] self-center object-cover'
                                />
                                <div className='flex self-center items-start flex-col gap-[0.5rem]'>
                                    <span className=' text-[#5d5f67] text-lg'>Passenger</span>
                                    <input placeholder='Where want....' type='number' min='1' {...register("passenger")}/>
                                </div>
                            </div>
                            <button type='submit' className='w-[530px] mx-4 flex items-center px-4 justify-center bg-[#3e5cb8] py-2 rounded'>
                            <svg
                            viewBox="0 0 950.8571428571428 1024"
                            className='fill-white w-6 h-6'>
                                <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
                            </svg>
                            <span className='text-white font-semibold px-2'>Search</span>
                            </button>
                        </div>
                    </form>
                </Tab.Panel>
                <Tab.Panel>
                <form className='flex w-full flex-col mx-4'>
                        {/** --------- */}
                        <div className='flex w-auto h-[100px] my-3 gap-8 items-center mx-auto justify-center'>
                            <div className='flex w-auto h-[100px] gap-3 relative my-[0.5rem] mx-auto items-start'>
                                <Image
                                alt='image'
                                src="/playground_assets/locationIcon2.svg"
                                width={100}
                                height={100}
                                className='w-[50px] h-[50px] self-center object-cover'
                                />
                                <div className='flex self-center items-start flex-col gap-[0.5rem]'>
                                    <span className=' text-[#5d5f67] text-lg'>Class</span>
                                    <input placeholder='Where want....' type='text' {...register("flightClass")}/>
                                </div>
                            </div>
                            <div className='flex w-auto h-[100px] gap-3 relative my-[0.5rem] mx-auto items-start'>
                                <Image
                                alt='image'
                                src="/playground_assets/calender%20depature.svg"
                                width={100}
                                height={100}
                                className='w-[50px] h-[50px] self-center object-cover'
                                />
                                <div className='flex self-center items-start flex-col gap-[0.5rem]'>
                                    <span className=' text-[#5d5f67] text-lg'>Check In</span>
                                    <input className='w-[200px]' placeholder='Where want....' type='date' {...register("checkin")}/>
                                </div>
                            </div>
                            <div className='flex w-auto h-[100px] gap-3 relative my-[0.5rem] mx-auto items-start'>
                                <Image
                                alt='image'
                                src="/playground_assets/calender%20depature.svg"
                                width={100}
                                height={100}
                                className='w-[50px] h-[50px] self-center object-cover'
                                />
                                <div className='flex self-center items-start flex-col gap-[0.5rem]'>
                                    <span className=' text-[#5d5f67] text-lg'>Check Out</span>
                                    <input className='w-[200px]' placeholder='Where want....' type='date' {...register("checkout")}/>
                                </div>
                            </div>
                            <button type='submit' className='w-[100px] h-[100px] mx-4 flex flex-col items-center px-4 justify-center bg-[#3e5cb8] py-2 rounded'>
                            <svg
                            viewBox="0 0 950.8571428571428 1024"
                            className='fill-white w-6 h-6'>
                                <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
                            </svg>
                            <span className='text-white font-semibold px-2'>Search</span>
                            </button>
                        </div>
                    </form>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    </div>
  )
}

export default Navtabs;