import React from 'react'
import PropTypes from 'prop-types'
import styles from './iconButton.module.sass'

export default function IconButton(props) {
  const { onClickFn, icon } = props

  return (
    <div className={styles.iconButton} onClick={onClickFn}>
      <div className={styles.btnBg}></div>
      <div className={styles.btnTop}>
        <div className={styles.icon}>{icon}</div>
      </div>
    </div>
  )
}

IconButton.propTypes = {
  onClickFn: PropTypes.func,
  icon: PropTypes.node,
}
  
IconButton.defaultProps = {
  onClickFn: () => {},
  icon: null,
}