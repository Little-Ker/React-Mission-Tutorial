import React, {
  useEffect
} from 'react'
import {
  useSelector, useDispatch
} from 'react-redux'
import LetterFlyAnim from '../../component/animationView/letterFlyAnim'
import styles from './animationView.module.sass'

import {
  showOpenAnim 
} from '../../redux/showOpenAnimSlice'

const AnimationView = () => {
  const dispatch = useDispatch()
  const isOpenOverlay = useSelector(state => state.showOpenAnim.isOpen)

  useEffect(() => {
    if (location.search === '?Animation') {
      dispatch(showOpenAnim(true))
    }
  }, [location?.search])

  return (
    <div>
      {(isOpenOverlay) && (
        <div className={styles.animationView}>
          <LetterFlyAnim />
          <div className={styles.border} />
        </div>
      )}
    </div>
  )
}

export default AnimationView