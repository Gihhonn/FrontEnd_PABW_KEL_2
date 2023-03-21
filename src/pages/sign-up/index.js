import React, { use, useCallback, useEffect } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/styles/sign-ig.module.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios";
import Link from "next/link";

const SignupSchema = yup.object().shape({
  fullName: yup.string().required('Please input your fullname'),
  email: yup.string().email('Must be a valid email').required('Please input your email').max(255),
  password: yup.string().required('Please input your password').min(8, 'Password is too short -  should be 8 chars min.').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "at least one letter and one number").max(255),
  passwordConfirmation: yup.string().required('Please input your password').min(8, 'Password is too short -  should be 8 chars min.').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "at least one letter and one number").max(255)
  .oneOf([yup.ref('password'), null], 'Please check again your confirmation password'),
})

const Index = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });

  const onSubmit = useCallback(async (data) => {
    try {
      await axios.post('https://petstore.swagger.io/v2/user', {
      id: 110,  
      username: data.fullName,
      firstName: data.fullName,
      lastName: data.fullName,
      email: data.email,
      password: data.password,
      phone: "8881288233",
      userStatus: 0,
      })
      .then((res) => {
        console.log(res)
        router.push('/sign-in')
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
            <h1 className={styles['text']}>Sign Up</h1>
            <span className={styles['text1']}>Get ready to join us</span>
            <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input className={styles['textinput']} placeholder="Fullname" {...register("fullName")}/>
                {errors.fullName && <p className={styles['errorText']}>{errors.fullName.message}</p>}
              </div>
              <div>
                <input type='email' className={styles['textinput']} placeholder="Email" {...register("email")}/>
                {errors.email && <p className={styles['errorText']}>{errors.email.message}</p>}
              </div>
              <div>
                <input className={styles['textinput']} placeholder="Password" type='password' {...register('password')}/>
                {errors.password && <p className={styles['errorText']}>{errors.password.message}</p>}
              </div>
              <div>
                <input className={styles['textinput']} placeholder="Password Confirmation" type='password' {...register('passwordConfirmation')}/>
                {errors.passwordConfirmation && <p className={styles['errorText']}>{errors.passwordConfirmation.message}</p>}
              </div>
              <input className={styles['submitinput']} type='submit'/>
            </form>
            <div className={styles['container6']}>
              <span className={styles['text4']}>Already have an account? </span>
              <span className={styles['text5']} onClick={() => router.push('/sign-in')}>Sign In</span>
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