import React from 'react'
import PropTypes from 'prop-types'
import styles from './card.module.sass'

export default function Card(props) {
  const { content, width, height } = props

  return (
    <div className={styles.card}
      style={{
        width,
        height,
      }}
    >
      <div className={styles.bg}></div>
      <div className={styles.cardContent}>
        {content}
      </div>
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
}
  
Card.defaultProps = {
  content: null,
  width: 'auto',
  height: 'auto',
}