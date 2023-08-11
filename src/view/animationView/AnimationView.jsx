import React from 'react'
import LetterFlyAnim from '../../component/animationView/letterFlyAnim'
import styles from './animationView.module.sass'

const AnimationView = () => {
  return (
    <div className={styles.animationView}>
      <LetterFlyAnim />
      <div className={styles.border} />
    </div>
  )
}

export default AnimationView