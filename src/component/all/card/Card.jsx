import React from 'react'
import PropTypes from 'prop-types'
import styles from './card.module.sass'

export default function Card(props) {
  const { content, style } = props

  return (
    <div className={styles.card}>
      <div className={styles.bg} style={style}></div>
      <div className={styles.cardContent} style={style}>
        {content}
      </div>
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
}
  
Card.defaultProps = {
  content: null,
  style: {},
}