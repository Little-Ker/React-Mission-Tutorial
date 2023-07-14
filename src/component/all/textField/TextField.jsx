import React from 'react'
import PropTypes from 'prop-types'
import styles from './textField.module.sass'

export default function TextField(props) {
  const { value ,setValue, label, width } = props

  return (
    <div className={styles.textField}>
      <div className={styles.label}>{label}</div>
      <input
        value={value}
        onChange={event => setValue(event.target.value)}
        style={{width}}
      />
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  width: PropTypes.string,
}
  
TextField.defaultProps = {
  value: '',
  label: '',
  setValue: () => {},
  width: '100%',
}