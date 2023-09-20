import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Comment = () => {

    const status ="authenticated";

    // If User Is Login Then They can Comment The Post 
    
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>

        
    
        {status === "authenticated" ? (  //Checking User is Login
        <div className={styles.write}>

            <textarea placeholder='write a comment...' className={styles.input}/>
            <button className={styles.button}>Send</button>

            
        </div>
        ) : (
        
        <Link href="/login">Login to Comment</Link>
        
        )}

        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p3.jpg" alt='' width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>SalmanKhan</span>
                        <span className={styles.date}> - 21.09.2023</span>

                    </div>
                </div>

                <p className={styles.desc}>Yo Ash i still miss you yarr..</p>

               

               
            </div>


            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p3.jpg" alt='' width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>SalmanKhan</span>
                        <span className={styles.date}> - 21.09.2023</span>

                    </div>
                </div>

                

                <p className={styles.desc}>I will Spam your comment section if you dont reply me ..</p>

               
            </div>


            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p3.jpg" alt='' width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>SalmanKhan</span>
                        <span className={styles.date}> - 21.09.2023</span>

                    </div>
                </div>

                
                <p className={styles.desc}>reply me   ..</p>
            </div>

        </div>
      
    </div>
  )
}

export default Comment
