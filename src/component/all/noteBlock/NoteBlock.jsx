import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './noteBlock.module.sass'

function NoteBlock(props) {
  const { title, content, shadow, style, icon, iconFn, isCircleDecoration, isFooter } = props
  return (
    <div
      className={
        clsx(styles.noteBlock, shadow && styles.shadow)
      }
      style={style}
    >
      <div className={styles.title}>
        {(isCircleDecoration) && (<div className={styles.circleDecoration} />)}
        <p className={clsx(isCircleDecoration && styles.titlePos)}>{title}</p>
        {(icon) && (
          <a>
            <div onClick={iconFn} className={styles.icon}>{icon}</div>
          </a>)}
      </div>
      <div className={styles.content}>
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
  style: PropTypes.object,
  icon: PropTypes.node,
  iconFn: PropTypes.func,
  isCircleDecoration: PropTypes.bool,
  isFooter: PropTypes.bool,
}

NoteBlock.defaultProps = {
  title: 'title',
  content: null,
  shadow: false,
  style: {},
  icon: null,
  iconFn: () => {},
  isCircleDecoration: false,
  isFooter: false,
}

export default NoteBlock