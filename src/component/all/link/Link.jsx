import React from 'react'
import PropTypes from 'prop-types'
import styles from './link.module.sass'

function Link(props) {
  const { linkUrl, text } = props
  return (
    <a className={styles.link} href={linkUrl} target="_blank" rel="noreferrer">{text}</a>
  )
}

Link.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Link