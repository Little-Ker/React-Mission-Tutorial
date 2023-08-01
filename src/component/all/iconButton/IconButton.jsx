import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@mui/material/Tooltip'
import styles from './iconButton.module.sass'

export default function IconButton(props) {
  const { onClickFn, icon, tipText } = props

  return (
    <Tooltip title={tipText} placement="bottom-start">
      <a>
        <div className={styles.iconButton} onClick={onClickFn}>
          <div className={styles.btnBg}></div>
          <div className={styles.btnTop}>
            <div className={styles.icon}>{icon}</div>
          </div>
        </div>
      </a> 
    </Tooltip>
  )
}

IconButton.propTypes = {
  onClickFn: PropTypes.func,
  icon: PropTypes.node,
  tipText: PropTypes.string,
}
  
IconButton.defaultProps = {
  onClickFn: () => {},
  icon: null,
  tipText: null,
}