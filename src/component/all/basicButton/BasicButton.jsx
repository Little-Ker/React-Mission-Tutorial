import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './basicButton.module.sass'

export default function BasicButton(props) {
  const { img ,text, onClickFn, icon, width, height } = props

  return (
    <div className={styles.button}
      style={{
        width,
        height,
      }}
      onClick={onClickFn}>
      <div className={styles.btnBg}></div>
      <div className={clsx(styles.btnTop, icon && styles.iconPos)}>
        <div className={styles.leftBlock}>
          <div className={styles.img}>{img}</div>
          <p>{text}</p>
        </div>
        {(icon) && (<div className={styles.icon}>{icon}</div>)}
      </div>
    </div>
  )
}

BasicButton.propTypes = {
  img: PropTypes.node,
  text: PropTypes.string,
  onClickFn: PropTypes.func,
  icon: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
}
  
BasicButton.defaultProps = {
  img: null,
  text: 'Default',
  onClickFn: () => {},
  icon: null,
  width: 'auto',
  height: '48px',
}