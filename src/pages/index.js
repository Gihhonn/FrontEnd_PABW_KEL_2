import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import InputDate from '@/components/input-date'
import InputGeneral from '@/components/input-general'
import InputPassenger from '@/components/input-passenger'
import InputSeat from '@/components/input-seat'
import NavigationLinks from '@/components/navigation-links'
import NavigationLinks1 from '@/components/navigation-links1'


export default function Home() {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header data-role="Header" className="home-header">
          <Image
            alt="logo"
            src="/playground_assets/logo%20black.svg"
            className="home-image"
            width={109}
            height={66}
          />
          <div className="home-nav"></div>
          <div className="home-btn-group">
            <button className="home-login button">Sign in</button>
            <button className="home-register button">Sign up</button>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav1">
              <div className="home-container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image1"
                />
                <div data-role="CloseMobileMenu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="navigation-links-root-class-name8"></NavigationLinks>
            </div>
          </div>
        </header>
        <div className="home-hero">
          <div className="home-container2">
            <h1 className="home-text">Experience your</h1>
            <h1 className="home-text1">Travel with us</h1>
            <span className="home-text2">
              We have more than 1 million happy customer arround the world
            </span>
          </div>
        </div>
        <div className="home-container3">
          <div className="home-container4">
            <div className="home-container5">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M895.488 528.896l-212.821-121.643v-204.587c0-82.347-66.987-149.333-149.333-149.333s-149.333 66.987-149.333 149.333v204.587l-212.821 121.643c-56.192 32.085-79.573 101.163-54.443 160.811 25.131 59.691 90.965 91.093 153.131 73.387l114.133-32.64v35.755l-37.291 29.824c-51.115 40.917-63.147 113.792-27.861 168.917 35.285 55.168 106.411 74.795 165.077 45.483 0.171-0.043 21.333-7.808 49.408-7.808s49.237 7.765 49.408 7.808c58.667 29.312 129.792 9.685 165.077-45.483 35.285-55.125 23.253-128-27.861-168.917l-37.291-29.824v-35.755l114.176 32.64c62.165 17.707 128-13.696 153.131-73.387 25.131-59.691 1.749-128.725-54.485-160.811zM871.339 656.555c-8.405 19.883-30.336 30.421-51.029 24.448l-222.976-63.659v189.909l69.333 55.467c17.024 13.611 21.035 37.931 9.301 56.32-11.733 18.347-35.328 24.875-55.040 15.147-0.341-0.171-35.157-16.853-87.595-16.853s-87.253 16.683-87.595 16.853c-19.712 9.685-43.307 3.157-55.040-15.147-11.733-18.389-7.765-42.667 9.301-56.32l69.333-55.467v-189.909l-222.976 63.701c-20.693 5.973-42.624-4.565-51.029-24.448-8.363-19.883-0.597-42.88 18.176-53.589l255.829-146.219v-254.123c0-35.285 28.715-64 64-64s64 28.715 64 64v254.123l255.829 146.176c18.773 10.709 26.539 33.707 18.176 53.589z"></path>
                <path d="M554.667 192c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333 0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333z"></path>
              </svg>
              <span className="home-text3">Flights</span>
            </div>
            <div className="home-container6">
              <svg viewBox="0 0 1024 1024" className="home-icon07">
                <path d="M256 512v128h512v-128h-512zM342 298v128h128v-128h-128zM682 426v-128h-128v128h128zM854 512v214h-58l-28 84h-42l-28-84h-370l-30 84h-42l-28-84h-58v-214q0-34 26-60t60-26v-128q0-34 26-59t60-25h340q34 0 60 25t26 59v128q34 0 60 26t26 60z"></path>
              </svg>
              <span className="home-text4">Rooms</span>
            </div>
          </div>
          <div className="home-group-input-top">
            <InputGeneral></InputGeneral>
            <InputGeneral
              text="Arrival City"
              image_src="/playground_assets/arrival%20city%20icon2.svg"
              textinput_placeholder="Where are you going..."
            ></InputGeneral>
            <InputDate
              text="Departure Date"
              image_src="/playground_assets/calender%20depature.svg"
              rootClassName="input-date-root-class-name"
              textinput_placeholder="When you want go"
            ></InputDate>
            <InputDate
              text="Arrival Date"
              image_src="/playground_assets/calender%20depature.svg"
              rootClassName="input-date-root-class-name1"
            ></InputDate>
          </div>
          <div className="home-group-input-bot">
            <InputSeat
              text="Seat Class"
              image_src="/playground_assets/circle%20icon.svg"
              rootClassName="input-seat-root-class-name"
            ></InputSeat>
            <InputPassenger
              text="Passenger"
              image_src="/playground_assets/circle%20icon2.svg"
              rootClassName="input-passenger-root-class-name"
              textinput_placeholder="Passengers"
            ></InputPassenger>
            <div className="home-container7 button">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon09">
                <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
              </svg>
              <span className="home-text5">Search</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .home-image {
            width: 109px;
            height: 66px;
          }
          .home-nav {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            color: #ffffff;
            width: 108px;
            height: 44px;
            font-style: normal;
            transition: 0.3s;
            font-family: Montserrat;
            font-weight: 600;
            border-color: #ffffff;
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            border-radius: 13px;
            background-color: rgba(255, 255, 255, 0);
          }
          .home-login:hover {
            cursor: pointer;
            background: rgba(62, 92, 184, 0.44);
            border-color: rgba(62, 92, 184, 0.44);
          }
          .home-register {
            color: #ffffff;
            width: 108px;
            height: 44px;
            font-style: normal;
            transition: 0.3s;
            font-family: Montserrat;
            font-weight: 600;
            border-color: #ffffff;
            border-width: 0px;
            border-radius: 13px;
            background-color: #3e5cb8;
          }
          .home-register:hover {
            cursor: pointer;
            background: rgba(62, 92, 184, 0.44);
            border-color: rgba(62, 92, 184, 0.44);
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image1 {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: blur(0.5px);
            display: flex;
            padding: var(--dl-space-space-threeunits);
            z-index: 96;
            position: absolute;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/wp9247941-4k-indonesia-wallpapers-1500h.jpg');
          }
          .home-hero:hover {
            border-color: rgba(62, 92, 184, 0.44);
          }
          .home-container2 {
            top: 429px;
            left: 558px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            font-size: 2rem;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 700;
            text-shadow: 2px 6px 4px rgba(0, 0, 0, 0.25);
          }
          .home-text1 {
            color: var(--dl-color-gray-white);
            font-size: 48px;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Montserrat;
            font-weight: 700;
            text-shadow: 2px 6px 4px rgba(0, 0, 0, 0.25);
          }
          .home-text2 {
            color: var(--dl-color-gray-white);
            font-size: 24px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Montserrat;
            font-weight: 700;
            text-shadow: 2px 6px 4px rgba(0, 0, 0, 0.25);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container3 {
            top: 697px;
            flex: 0 0 auto;
            left: 190px;
            width: 80%;
            height: auto;
            margin: auto;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            border-color: #a7a7a7;
            border-style: solid;
            border-width: 1px;
            border-radius: 13px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-container4 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
          }
          .home-container5 {
            display: flex;
            align-items: flex-start;
          }
          .home-icon04 {
            width: 32px;
            height: 32px;
            transform: rotate(45deg);
            align-self: center;
          }
          .home-text3 {
            align-self: center;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 600;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
          }
          .home-container6 {
            display: flex;
            align-items: flex-start;
          }
          .home-icon07 {
            width: 32px;
            height: 32px;
            align-self: center;
          }
          .home-text4 {
            align-self: center;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 600;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
          }
          .home-group-input-top {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .home-group-input-bot {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .home-container7 {
            width: 675px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: #3e5cb8;
          }
          .home-icon09 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-text5 {
            color: #ffffff;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 600;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-text {
              text-align: center;
            }
            .home-text1 {
              text-align: center;
            }
            .home-text2 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-mobile-menu {
              display: none;
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-image {
              width: 93px;
              height: 44px;
            }
            .home-btn-group {
              display: none;
            }
            .home-mobile-menu {
              display: none;
              padding: 16px;
            }
            .home-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}
