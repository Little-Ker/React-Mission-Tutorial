import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './basicButton.module.sass'

export default function BasicButton(props) {
  const { img ,text, onClickFn, icon, style } = props

  return (
    <a>
      <div className={styles.button}
        style={style}
        onClick={onClickFn}>
        <div className={styles.btnBg}></div>
        <div className={clsx(styles.btnTop, icon && (text || img) && styles.iconPos)}>
          <div className={styles.leftBlock}>
            {(img) && (<div className={styles.img}>{img}</div>)}
            {(text) && (<p>{text}</p>)}
          </div>
          {(icon) && (<div className={styles.icon}>{icon}</div>)}
        </div>
      </div>
    </a>
  )
}

BasicButton.propTypes = {
  img: PropTypes.node,
  text: PropTypes.string,
  onClickFn: PropTypes.func,
  icon: PropTypes.node,
  style: PropTypes.object,
}
  
BasicButton.defaultProps = {
  img: null,
  text: null,
  onClickFn: () => {},
  icon: null,
  style: {},
}