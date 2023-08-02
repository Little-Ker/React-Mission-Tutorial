import React, {
  useMemo
} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './progressBar.module.sass'
  
function ProgressBar(props) {
  const { finishCount, totalCount } = props

  const progressBarPercent = useMemo(() => {
    const percent = finishCount / totalCount
    const progress = Math.round(percent * 100)
    return progress
  }, [finishCount, totalCount])
    
  return (
    <div className={styles.progressBar}>
      <div className={clsx(styles.progress, (progressBarPercent === 100) && styles.completeBar)}>
        <div
          className={styles.progressBar}
          style={{ width: `${progressBarPercent}%` }}
        >
          <p className={styles.number}>{(progressBarPercent === 100) ? 'Complete' : `${progressBarPercent}%`}</p>
        </div>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  finishCount: PropTypes.number,
  totalCount: PropTypes.number,
}

ProgressBar.defaultProps = {
  finishCount: 0,
  totalCount: 100,
}
        
export default ProgressBar