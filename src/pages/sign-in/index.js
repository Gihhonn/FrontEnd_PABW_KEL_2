import React, { use, useCallback, useEffect } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/styles/sign-ig.module.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios";
import Link from "next/link";

const SigninSchema = yup.object().shape({
  fullName: yup.string().required('Please input your fullname'),
  password: yup.string().required('Please input your password').min(8, 'Password is too short -  should be 8 chars min.').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "at least one letter and one number")
})

const Index = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SigninSchema)
  });

  const onSubmit = useCallback(async (data) => {
    try {
      await axios.get('https://petstore.swagger.io/v2/user/login', {
        username: data.fullName,
        password: data.password
      })
      .then((res) => {
        console.log(res)
        router.push('/')
      })
    } catch (error) {
      console.log(error)
    }
  }) 

  return (
    <div className={styles['container']}>

      
      {/* <button
      className={styles['image']}
      onClick={() => router.push('/')}>Logo
      </button> */}
      {/* <a className={styles['image']} onClick={() => router.push('/sign-up')}>
        <img
        alt='image'
        src="/playground_assets/logo%20black.svg"
        />
      </a> */}
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <div className={styles['logo']}>
            <button onClick={() => router.push('/')}>
              <Image
                src="/playground_assets/logo%20black.svg"
                alt="image"
                width={100}
                height={100}
              />
            </button>
          </div>
          <div className={styles['container3']}>
            <h1 className={styles['text']}>Sign In</h1>
            <span className={styles['text1']}>Get Started to Travel</span>
            <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input className={styles['textinput']} placeholder="Fullname" {...register("fullName")}/>
                {errors.fullName && <p className={styles['errorText']}>{errors.fullName.message}</p>}
              </div>
              <div>
                <input className={styles['textinput']} placeholder="Password" type='password' {...register('password')}/>
                {errors.password && <p className={styles['errorText']}>{errors.password.message}</p>}
              </div>
              <button className={styles['submitinput']} type="submit">Sign In</button>
              {/* <input className={styles['submitinput']} type='submit'/> */}
            </form>
            <div className={styles['container6']}>
              <span className={styles['text4']}>Not a trippy member? </span>
              <span className={styles['text5']} onClick={() => router.push('/sign-up')}>Sign Up</span>
            </div>
          </div>
        </div>
        <div className={styles['container7']}>
          <Image
          src='/playground_assets/wp9247941-4k-indonesia-wallpapers-1500h.jpg'
          alt="image"
          className={styles['image2']}
          width={1500}
          height={1500}
          />
        </div>
      </div>
    </div>
  )
}

export default Index