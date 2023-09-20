import React from 'react'
import styles from "./Blogpage.module.css"
import CardList from '@/components/CardList/CardLIst'
import Menu from '@/components/Menu/Menu'

const Blogpage = () => {
  //Blog Categories Page (Style Page) that shows the trending style..
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}

export default Blogpage
