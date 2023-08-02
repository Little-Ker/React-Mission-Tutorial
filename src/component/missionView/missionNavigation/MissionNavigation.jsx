import React, {
  useCallback, useEffect
} from 'react'
import gsap from 'gsap'
import PropTypes from 'prop-types'
import IconButton from '../../../component/all/iconButton'
import CloseIcon from '@mui/icons-material/Close'
import data from '../data'
import clsx from 'clsx'
import styles from './missionNavigation.module.sass'
  
function MissionNavigation(props) {
  const { swiper, openNavigation, setOpenNavigation, onResetTypeCheck } = props

  const resetAnim = () => {
    let tl = gsap.timeline()
    tl.to('#missionNavigationOverlay',{
      duration: 0,
      opacity: 0,
      display: 'none',
    }).to('#missionNavigationList',{
      duration: 0,
      right: '-500px',
    }).to('#missionNavigationTitle', {
      duration: 0,
      opacity: 0,
      transform: 'translateZ(0) scale(0.2)',
      onComplete: () => {
        tl.kill()
        tl = null
      },
    })

    data?.mission?.forEach((cur, index) => {
      let tl = gsap.timeline()
      tl.to(`#missionNavigationLink${index}`,{
        duration: 0,
        opacity: 0,
        transform: 'translate3d(0,100px,0)',
        onComplete: () => {
          tl.kill()
          tl = null
        },
      })
    })
  }
 
  const showLinkAnim = useCallback(() => {
    data?.mission?.forEach((cur, index) => {
      let tl = gsap.timeline()
      tl.to(`#missionNavigationLink${index}`,{
        delay: index * 0.1,
        duration: .6,
        opacity: 1,
        transform: 'translateZ(0)',
        onComplete: () => {
          tl.kill()
          tl = null
        },
      })
    })
  }, []) 
 
  const onClickOpenFn = useCallback(() => {
    let tl = gsap.timeline()
    tl.to('#missionNavigationOverlay',{
      duration: .1,
      opacity: 1,
      display: 'block',
    }).to('#missionNavigationList',{
      duration: .2,
      right: 0,
    }).to('#missionNavigationTitle', {
      delay: 0.3,
      duration: 0.3,
      opacity: 1,
      transform: 'translateZ(0) scale(1)',
    }).add(() => {
      showLinkAnim()
    }).to('#missionNavigationTitle', {
      duration: 0.3,
      opacity: 1,
      transform: 'translateZ(0) scale(1)',
      onComplete: () => {
        tl.kill()
        tl = null
      },
    })
  }, [])

  useEffect(() => {
    resetAnim()
    if (!openNavigation) return

    onClickOpenFn()
  }, [openNavigation])
  
  const onClickCloseFn = useCallback(() => {
    let tl = gsap.timeline()
    tl.to('#missionNavigationList',{
      duration: .2,
      right: '-500px',
    }).to('#missionNavigationOverlay',{
      duration: .1,
      opacity: 0,
      display: 'none',
      onComplete: () => {
        setOpenNavigation(false)
        tl.kill()
        tl = null
      },
    })
  }, [])

  const onSlideTo = useCallback((index) => {
    if(swiper) {
      swiper.slideTo(index)
      onResetTypeCheck()
      onClickCloseFn()
    }
  }, [swiper])

  return (
    <div id={'missionNavigationOverlay'} className={styles.missionNavigation} onClick={onClickCloseFn}>
      <div id={'missionNavigationList'} className={styles.missionList} onClick={(e)=>{e.stopPropagation()}}>
        <div className={styles.header}>
          <IconButton
            onClickFn={onClickCloseFn}
            icon={<CloseIcon />}
          /> 
        </div>
        <div className={styles.content}>
          <p id={'missionNavigationTitle'} className={styles.title}>{'- List -'}</p>
          <div className={clsx(styles.list, (data?.mission.length > 8 && styles.listBorder))}>
            {data?.mission.map((cur, index) => (
              <a id={`missionNavigationLink${index}`} className={styles.link} key={cur.title} onClick={() => onSlideTo(index)}>
                <p className={styles.subTitle}>{`[ ${cur.title} ]`}</p>
                <p>{cur.subTitle}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

MissionNavigation.propTypes = {
  swiper: PropTypes.object,
  openNavigation: PropTypes.bool,
  setOpenNavigation: PropTypes.func,
  onResetTypeCheck: PropTypes.func,
}
      
MissionNavigation.defaultProps = {
  swiper: null,
  openNavigation: false,
  setOpenNavigation: () => {},
  onResetTypeCheck: () => {},
}
        
export default MissionNavigation