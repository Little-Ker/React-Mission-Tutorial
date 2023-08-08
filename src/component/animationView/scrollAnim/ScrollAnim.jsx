import React from 'react'
import styles from './scrollAnim.module.sass'

function ScrollAnim() {
  return (
    <div className={styles.scrollAnim}>
      <div className={styles.border}>
        <div className={styles.dot} />
      </div>
      <p className={styles.tip}>{'Scroll'}</p>
    </div>
  )
}
  
export default ScrollAnim