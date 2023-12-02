import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

function About() {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt='group photo'
        className={styles.img}
        fill="true"
        ></Image>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDescription}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      
    </main>
  )
}

export default About