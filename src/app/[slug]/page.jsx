import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import Comment from '@/components/comments/Comment'

//Finding Page like clicking any link or undifined pages in web, it forword to this page

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}> 
                    <h1 className={styles.title}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p2.jpg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>Aishwarya Rai</span>
                            <span className={styles.date}> - 21.09.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
             <div className={styles.post}>
                <div className={styles.description}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta dolor consectetur, quia tempore magni eligendi ullam. 
                     Consectetur ea at quam quas eius, 
                    a optio possimus. Error facilis culpa ab laboriosam?
                </p>

                <h1>Lorem ipsum dolor sit amet.</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta dolor consectetur, quia tempore magni eligendi ullam. 
                     Consectetur ea at quam quas eius, 
                    a optio possimus. Error facilis culpa ab laboriosam?
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta dolor consectetur, quia tempore magni eligendi ullam. 
                     Consectetur ea at quam quas eius, 
                    a optio possimus. Error facilis culpa ab laboriosam?
                </p>

                </div>

                <div className={styles.comment}>
                <Comment/>

                </div>
             
             </div>

             <Menu />

 
            </div>

            

           


        </div>
    )
}

export default SinglePage
