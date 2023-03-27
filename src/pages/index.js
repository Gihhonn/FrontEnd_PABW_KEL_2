import Head from 'next/head'
import Image from 'next/image'
import Layouts from '@/components/Layouts'
import styles from '@/styles/Home.module.scss'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'


export default function Home() {
  const router = useRouter()
  const searchSchema = yup.object().shape({
    depatureCity: yup.string().required('cant be empty'),
    arrivalCity: yup.string().required('cant be empty'),
    depatureDate: yup.date().required('cant be empty'),
    arrivalDate: yup.date().required('cant be empty'),
    flightClass: yup.string().required('cant be empty'),
    passenger: yup.number().required('cant be empty')
  })

  const { register,handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(searchSchema)})

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Layouts>
      <Head>
        <title>Trippy - Flight</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles['hero']}>
          <div className={styles['container2']}>
            <h1 className={styles['text']}>Experience your</h1>
            <h1 className={styles['text1']}>Travel with us</h1>
            <span className={styles['text2']}>We have more than 1 million happy customer arround the world</span>
          </div>
        </div>
        <div className={styles['container3']}>
          <div className={styles['container4']}>
            <Link href="/" className={styles['container5']}>
              <span className={router.pathname == "/" ? styles['text-active'] : styles['text3']}>
                <svg viewBox="0 0 1024 1024" className={router.pathname == "/" ? styles['icon04-active'] : styles['icon04']}>
                  <path d="M895.488 528.896l-212.821-121.643v-204.587c0-82.347-66.987-149.333-149.333-149.333s-149.333 66.987-149.333 149.333v204.587l-212.821 121.643c-56.192 32.085-79.573 101.163-54.443 160.811 25.131 59.691 90.965 91.093 153.131 73.387l114.133-32.64v35.755l-37.291 29.824c-51.115 40.917-63.147 113.792-27.861 168.917 35.285 55.168 106.411 74.795 165.077 45.483 0.171-0.043 21.333-7.808 49.408-7.808s49.237 7.765 49.408 7.808c58.667 29.312 129.792 9.685 165.077-45.483 35.285-55.125 23.253-128-27.861-168.917l-37.291-29.824v-35.755l114.176 32.64c62.165 17.707 128-13.696 153.131-73.387 25.131-59.691 1.749-128.725-54.485-160.811zM871.339 656.555c-8.405 19.883-30.336 30.421-51.029 24.448l-222.976-63.659v189.909l69.333 55.467c17.024 13.611 21.035 37.931 9.301 56.32-11.733 18.347-35.328 24.875-55.040 15.147-0.341-0.171-35.157-16.853-87.595-16.853s-87.253 16.683-87.595 16.853c-19.712 9.685-43.307 3.157-55.040-15.147-11.733-18.389-7.765-42.667 9.301-56.32l69.333-55.467v-189.909l-222.976 63.701c-20.693 5.973-42.624-4.565-51.029-24.448-8.363-19.883-0.597-42.88 18.176-53.589l255.829-146.219v-254.123c0-35.285 28.715-64 64-64s64 28.715 64 64v254.123l255.829 146.176c18.773 10.709 26.539 33.707 18.176 53.589z"></path>
                  <path d="M554.667 192c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333 0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333z"></path>
                </svg>
              Flights
              </span>
            </Link>
            <Link href="/room" className={styles['container5']}>
              <span className={router.pathname == "/room" ? styles['text-active'] : styles['text3']}>
                <svg viewBox="0 0 1024 1024" className={router.pathname == "/room" ? styles['icon07-active'] : styles['icon07']}>
                <path d="M256 512v128h512v-128h-512zM342 298v128h128v-128h-128zM682 426v-128h-128v128h128zM854 512v214h-58l-28 84h-42l-28-84h-370l-30 84h-42l-28-84h-58v-214q0-34 26-60t60-26v-128q0-34 26-59t60-25h340q34 0 60 25t26 59v128q34 0 60 26t26 60z"></path>
                </svg>
              Rooms
              </span>
            </Link>
            {/* <div className={styles['container6']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon07']}>
                <path d="M256 512v128h512v-128h-512zM342 298v128h128v-128h-128zM682 426v-128h-128v128h128zM854 512v214h-58l-28 84h-42l-28-84h-370l-30 84h-42l-28-84h-58v-214q0-34 26-60t60-26v-128q0-34 26-59t60-25h340q34 0 60 25t26 59v128q34 0 60 26t26 60z"></path>
              </svg>
              <span className={styles['text4']}>Rooms</span>
            </div> */}
          </div>
            <form className='flex w-full flex-col' onSubmit={handleSubmit(onSubmit)}>
              <div className={styles['group-input-top']}>
                <div className={styles['input-container']}>
                  <Image
                  alt='image'
                  src="/playground_assets/depature%20city%20icon2.svg"
                  width={100}
                  height={100}
                  className={styles['image-input']}
                  />
                  <div className={styles['input-box']}>
                    <span className={styles['input-title']}>Departure City</span>
                    <input placeholder='Where want to go..' type='text' {...register("depatureCity")} />
                  </div>
                </div>
                <div className={styles['input-container']}>
                  <Image
                  alt='image'
                  src="/playground_assets/depature%20city%20icon2.svg"
                  width={100}
                  height={100}
                  className={styles['image-input']}
                  />
                  <div className={styles['input-box']}>
                    <span className={styles['input-title']}>Arrival City</span>
                    <input placeholder='Where want to go..' type='text' {...register("arrivalCity")} />
                  </div>
                </div>
                <div className={styles['input-container']}>
                  <Image
                  alt='image'
                  src="/playground_assets/calender%20depature.svg"
                  width={100}
                  height={100}
                  className={styles['image-input']}
                  />
                  <div className={styles['input-box']}>
                    <span className={styles['input-title']}>Departure Date</span>
                    <input className='w-[200px]' placeholder='When want to go..' type='date' {...register("depatureDate")} />
                  </div>
                </div>
                <div className={styles['input-container']}>
                  <Image
                  alt='image'
                  src="/playground_assets/calender%20depature.svg"
                  width={100}
                  height={100}
                  className={styles['image-input']}
                  />
                  <div className={styles['input-box']}>
                    <span className={styles['input-title']}>Arrival Date</span>
                    <input className='w-[200px]' placeholder='When want to go..' type='date' {...register("arrivalDate")} />
                  </div>
                </div>
              </div>
              <div className={styles['group-input-bot']}>
                <div className={styles['input-container']}>
                    <Image
                    alt='image'
                    src="/playground_assets/circle%20icon.svg"
                    width={100}
                    height={100}
                    className={styles['image-input']}
                    />
                    <div className={styles['input-box']}>
                      <span className={styles['input-title']}>Class</span>
                      <input placeholder='Select your flight class' type='text' {...register("flightClass")} />
                    </div>
                </div>
                <div className={styles['input-container']}>
                    <Image
                    alt='image'
                    src="/playground_assets/circle%20icon2.svg"
                    width={100}
                    height={100}
                    className={styles['image-input']}
                    />
                    <div className={styles['input-box']}>
                      <span className={styles['input-title']}>Passenger</span>
                      <input placeholder='How many you need..' type='number' min='1' {...register("passenger")} />
                    </div>
                </div>
                <button className={`${styles['container7']} ${styles['button-search']}`}>
                  <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className={styles['icon09']}
                  >
                    <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
                  </svg>
                  <span className={styles['text5']}>Search</span>
                </button>
              </div>
            </form>
        </div>
      </Layouts>
    </>
  )
}
