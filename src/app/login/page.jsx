"use client"

import React from 'react'
import styles from "./LoginPage.module.css"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' //navigation

//Login Page

const LoginPage = () => {

  const{data,status} = useSession()

  const router = useRouter() //iam using router rather than than nextjs pages


  if(status === "loading") {
    return<div className={styles.loading}>Loading...</div>
  }
  if(status === "anthenticated") {
    router.push("/") //Home
     
  }

  // Sign in page 
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} onClick={()=>signIn("google")}>Sign in with Google</div>
            <div className={styles.socialButton}>Sign in with Email</div>
            <div className={styles.socialButton}>Sign in with Facebook</div>
        </div>
      
    </div>
  )
}

export default LoginPage
