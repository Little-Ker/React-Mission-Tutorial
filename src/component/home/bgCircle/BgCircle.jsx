import React from 'react'
import styles from './bgCircle.module.sass'

function BgCircle() {
  return (
    <div className={styles.bgCircle}>
      <div className={styles.circleA}></div>
      <div className={styles.circleB}></div>
      <div className={styles.circleC}></div>
    </div>
  )
}

export default BgCircle