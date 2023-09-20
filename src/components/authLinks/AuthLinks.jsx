"use client"
import React, { useState } from 'react'
import styles from "./authlinks.module.css"
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

const AuthLinks = () => {

  const [open, setOpen] = useState(false)

  //Temporary
  //const status = "authenticated" 

  const {status} = useSession();

  return (
    <>

      {status === "authenticated" ? (  //"notauthenticated" you cant see the  Write a Post and LogOut Link

        <Link href="/login" className={styles.link}>Login</Link>

      ) : (
        <>

          <Link href="/write" className={styles.link}>Write</Link>
          <Link href="/login" className={styles.link}>Logout</Link>

        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">ContactUs</Link>

          {status === "notauthenticated" ? (

            <Link href="/login">Login</Link>

          ) : (
            <>

              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={"signOut"}>Logout</span>

            </>
          )}
        </div>
      )}
    </>
  );




};

export default AuthLinks
