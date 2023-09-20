
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {

    //Sections Of Blog Page (Other Blog)
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
               <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}> 15.9.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
            
            <Link href="/">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quisquam asperiores labore consectetur laboriosam adipisci 
                 nisi commodi possimus harum, aliquam magni.
                 Reprehenderit dolores velit fugit placeat at corrupti quia maiores ipsam.
            </p>

            <Link href="/">Read More</Link>

            </div>

        </div>
    );
};

export default Card
