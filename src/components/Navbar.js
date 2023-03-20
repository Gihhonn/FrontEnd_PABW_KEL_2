import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '@/styles/Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={style['header']}>
        <Image
        src="/playground_assets/logo%20black.svg"
        alt='logo'
        width={109}
        height={66}
        className={style['logo']}
        />
        {/* Button Group */}
        <div className={style['btn-group']}>  
          <button
          className={style['login-button']}
          onClick={() => router.push('/sign-in')}
          >Sign In</button>

          <button
          className={style['register-button']}
          onClick={() => router.push('/sign-up')}
          >Sign Up</button>
        </div>
        {/* Burger Menu */}
        {/* <div className=' hidden'></div>  */}
        {/* Mobile Menu */}
        {/* <div className=' hidden'></div>  */}
    </div>
  )
}

export default Navbar