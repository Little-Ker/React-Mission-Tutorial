import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './finishStamp.module.sass'
      
function FinishStamp(props) {
  const { isFinish } = props

  return (
    <div className={clsx(styles.finishStamp, isFinish && styles.showFinish)}>
      <p>{'Finish'}</p>
    </div>
  )
}
  
FinishStamp.propTypes = {
  isFinish: PropTypes.bool,
}
      
FinishStamp.defaultProps = {
  isFinish: false,
}
            
export default FinishStamp