import React, {
  useCallback 
} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './checkBox.module.sass'

function CheckBox(props) {
  const { check, setCheck, text, isCheckChangeColor } = props

  const onChangeFn = useCallback(() => {
    setCheck(!check)
  }, [check, setCheck])

  console.log('isCheckChangeColor',isCheckChangeColor)

  return (
    <div onClick={onChangeFn} className={clsx(styles.checkBox, check && styles.check, isCheckChangeColor && styles.changeColor)}>
      <div className={styles.button}>
        {check && (<div className={styles.gou} />)}
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

CheckBox.propTypes = {
  check: PropTypes.bool,
  setCheck: PropTypes.func,
  text: PropTypes.string,
  isCheckChangeColor: PropTypes.bool,
}

CheckBox.defaultProps = {
  check: false,
  setCheck: () => {},
  text: 'Default',
  isCheckChangeColor: false,
}

export default CheckBox