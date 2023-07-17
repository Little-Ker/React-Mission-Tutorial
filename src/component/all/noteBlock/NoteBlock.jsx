import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './noteBlock.module.sass'

function NoteBlock(props) {
  const { title, content, shadow, width, maxHeight, icon, iconFn, isCircleDecoration, isFooter } = props
  return (
    <div
      className={
        clsx(styles.noteBlock, shadow && styles.shadow)
      }
      style={{
        width,
        maxHeight,
      }}
    >
      <div className={styles.title}>
        {(isCircleDecoration) && (<div className={styles.circleDecoration} />)}
        <p className={clsx(isCircleDecoration && styles.titlePos)}>{title}</p>
        {(icon) && (
          <a>
            <div onClick={iconFn} className={styles.icon}>{icon}</div>
          </a>)}
      </div>
      <div className={styles.content} style={{ maxHeight }}>
        {content}
      </div>
      {(isFooter) && (<div className={styles.footer} />)}
    </div>
  )
}

NoteBlock.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  shadow: PropTypes.bool,
  maxHeight: PropTypes.string,
  width: PropTypes.string,
  icon: PropTypes.node,
  iconFn: PropTypes.func,
  isCircleDecoration: PropTypes.bool,
  isFooter: PropTypes.bool,
}

NoteBlock.defaultProps = {
  title: 'title',
  content: null,
  shadow: false,
  maxHeight: 'auto',
  width: 'auto',
  icon: null,
  iconFn: () => {},
  isCircleDecoration: false,
  isFooter: false,
}

export default NoteBlock