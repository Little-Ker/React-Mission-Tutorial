import React, {
  useCallback 
} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './checkBox.module.sass'

function CheckBox(props) {
  const { check, setCheck, text, isCheckChangeColor, style, circleStyle, checkStyle } = props

  const onChangeFn = useCallback(() => {
    setCheck(!check)
  }, [check, setCheck])

  return (
    <a>
      <div onClick={onChangeFn} style={style} className={clsx(styles.checkBox, check && styles.check, isCheckChangeColor && styles.changeColor)}>
        <div className={styles.button} style={circleStyle}>
          {check && (<div style={checkStyle} className={styles.gou} />)}
        </div>
        {(text) && (<p className={styles.text}>{text}</p>)}
      </div>
    </a>
  )
}

CheckBox.propTypes = {
  check: PropTypes.bool,
  setCheck: PropTypes.func,
  text: PropTypes.string,
  isCheckChangeColor: PropTypes.bool,
  circleStyle: PropTypes.object,
  checkStyle: PropTypes.object,
  style: PropTypes.object,
}

CheckBox.defaultProps = {
  check: false,
  setCheck: () => {},
  text: null,
  isCheckChangeColor: false,
  circleStyle: {},
  checkStyle: {},
  style: {},
}

export default CheckBox