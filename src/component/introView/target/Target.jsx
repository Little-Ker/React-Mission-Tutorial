import React, {
  useEffect, useCallback
} from 'react'
import {
  useNavigate 
} from 'react-router-dom'
import {
  useSelector 
} from 'react-redux'
import PropTypes from 'prop-types'
import AOS from 'aos'
import ShadowButton from '../../../component/all/shadowButton/ShadowButton'
import styles from './target.module.sass'

function Target(props) {
  const { handleClose } = props
  const navigate = useNavigate()
  const targetDate = useSelector(state => (state.personalWebsiteData.missionData))

  const closeIntroHandler = useCallback(() => {
    handleClose()
    navigate('/home', { replace: true })
  }, [])

  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])

  return (
    <div className={styles.target}>
      <p className={styles.title}>{'你/妳要製作一個涵蓋但不限於以下內容的自我介紹網頁'}</p>
      <div className={styles.missionsList}>
        {targetDate.map((item, index) => (
          <div data-aos="fade-right" data-aos-delay={600 * index} data-aos-duration={1000} className={styles.mission} key={index}>
            <div className={styles.index}>{index + 1}</div>
            <div>
              <p className={styles.subTitle}>{item.title}</p>
              {item.content.map(cur => (
                <p key={cur} className={styles.content}>{cur}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <ShadowButton 
          text={'接受任務'}
          width={'180px'}
          onClickFn={closeIntroHandler}
        />
      </div>
    </div>
  )
}

Target.propTypes = {
  handleClose: PropTypes.func.isRequired,
}

export default Target