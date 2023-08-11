import React, {
  useEffect, useRef, useState, useMemo
} from 'react'
import gsap from 'gsap'
import EmployeeBadge from '../employeeBadge'
import {
  Controller, Scene 
} from 'react-scrollmagic'
import {
  useNavigate 
} from 'react-router-dom'
import {
  Tween
} from 'react-gsap'
import {
  useSelector
} from 'react-redux'
import ScrollAnim from '../scrollAnim'
import clsx from 'clsx'
import styles from './letterFlyAnim.module.sass'

import desktop from '../../../assets/image/anim/desktop.svg'
import letter from '../../../assets/image/anim/letter.svg'
import coffee from '../../../assets/image/anim/coffee.svg'
import book from '../../../assets/image/anim/book.svg'
import window from '../../../assets/image/anim/window.svg'
import letterMask from '../../../assets/image/anim/letterMask.png'
import letterTriangle from '../../../assets/image/anim/letterTriangle.png'

function LetterFlyAnim() {
  const navigate = useNavigate()
  const triggerRef = useRef(null)
  const [trigger, setTrigger] = useState(triggerRef.current)

  const defaultMemberData = useMemo(() => {
    if (!localStorage.getItem('memberData') || localStorage.getItem('memberData') === 'undefined') {
      return {
        photo: '',
        name: '',
        mail: '',
        work: '網頁前端工程師',
      }
    }
    return JSON.parse(localStorage.getItem('memberData'))
  }, [])
  const [memberData] = useState(defaultMemberData)

  const isShowOpeningAnimation = useSelector(state => state.showOpenAnim.isOpen)

  useEffect(() => {
    setTrigger(triggerRef.current)
  }, [])
 
  const showLetterAnim = () => {
    let tl = gsap.timeline()
    tl.to('#overlayScene',{
      delay: .3,
      duration: 1,
      opacity: 1,
      display: 'flex',
    }, 'showOverlay').to('#scrollAnim',{
      duration: 1,
      opacity: 0,
    }, 'showOverlay').to('#letter',{
      duration: .6,
      transform: 'rotate3d(0, 0, 0, 0)',
    }).to('#letterMask',{
      duration: .6,
      marginTop: '420px',
    }, 'letterMove').to('#letterTriangle',{
      duration: .6,
      top: '270px',
    }, 'letterMove').to('#employeeBadge',{
      duration: .6,
      top: '220px',
      zIndex: 2,
    }, 'letterMove').to('#letterMask',{
      duration: .3,
      opacity: 0,
    }, 'letterMove+=0.3').to('#letterTriangle',{
      duration: .3,
      opacity: 0,
      onComplete: () => {
        tl.kill()
        tl = null
      },
    }, 'letterMove+=0.3')
  }

  const resetOpenAnim = () => {
    let tl = gsap.timeline()
    tl.to('#mail',{
      duration: 0,
      right: '-500px',
    }).to('#letter',{
      duration: 0,
      transform: 'rotate3d(1, 1, 0, 90deg)',
    }).to('#letterMask',{
      duration: 0,
      marginTop: 0,
      opacity: 1,
    }).to('#letterTriangle',{
      duration: 0,
      top: '60px',
      opacity: 1,
    }).to('#employeeBadge',{
      duration: 0,
      marginTop: '0',
      top: '290px',
      zIndex: 1,
    }).to('#overlayScene',{
      duration: 0,
      opacity: 0,
      display: 'none',
      onComplete: () => {
        tl.kill()
        tl = null
      },
    })
  }

  const showLoadingAnim = () => {
    let tl = gsap.timeline()
    tl.to('#progressBar',{
      duration: 0.6,
      width: '100%',
      ease: 'Power0.easeNone',
    }).to('#progress',{
      duration: 0.3,
      opacity: 0,
      delay: 0.3,
    }).to('#welcomeText',{
      duration: 0.3,
      opacity: 1,
      left: '50px',
    }, 'welcome').to('#welcomeName',{
      duration: 0.3,
      opacity: 1,
      left: '50px',
    }, 'welcome').to('#overlayScene',{
      delay: 1,
      duration: 0,
      onComplete: () => {
        navigate('/Home', { replace: true })
        tl.kill()
        tl = null
      },
    }, 'welcome')
  }

  const resetLoadingAnim = () => {
    let tl = gsap.timeline()
    tl.to('#progressBar',{
      duration: 0,
      width: '50%',
    }).to('#welcomeText',{
      duration: 0,
      left: '80px',
      opacity: 0,
    }).to('#overlayScene',{
      duration: 0,
      opacity: 0,
      display: 'none',
    }).to('#welcomeName',{
      duration: 0,
      left: '80px',
      opacity: 0,
      onComplete: () => {
        tl.kill()
        tl = null
        showLoadingAnim()
      },
    })
  }

  useEffect(() => {
    if (isShowOpeningAnimation) {
      resetOpenAnim()
      return
    }
    resetLoadingAnim()
  }, [])

  return (
    <div className={styles.letterFlyAnim}>
      <div className={styles.scene}>
        <div className={styles.line} />
        <img className={styles.book} src={book} alt="" />
        <img className={styles.window} src={window} alt="" />
        <img className={styles.desktop} src={desktop} alt="" />
        {(!isShowOpeningAnimation) && (
          <div className={styles.screen}>
            <div className={styles.loading}>
              <div id={'progress'} className={styles.progress}>
                <div id={'progressBar'} className={styles.progressBar} />
              </div>
              <div className={styles.welcome}>
                <p id={'welcomeText'} className={styles.welcomeText}>{'welcome'}</p>
                <p id={'welcomeName'} className={styles.name}>{memberData?.name || ''}</p>
              </div>
            </div>
          </div>
        )}
        {(isShowOpeningAnimation) && (
          <Controller>
            <div className={clsx(styles.screen, styles.overflow)}>
              <Scene
                triggerHook={0.7}
                triggerElement={trigger}
                duration={500}
              >
                {progress => (
                  <Tween            
                    to={{ right: '-120px' }}       
                    totalProgress={progress}
                    paused
                    onComplete={() => showLetterAnim()}
                  >
                    <img id={'mail'} className={styles.letter} src={letter} alt="" />
                  </Tween>    
                )}
              </Scene>
            </div>
          </Controller>
        )}
        <img className={styles.coffee} src={coffee} alt="" />
      </div>
      <div id={'overlayScene'} className={styles.overlayScene}>
        <div id={'letter'} className={styles.letter}>
          <div id={'letterMask'} className={styles.letterBg} />
          <div id={'employeeBadge'} className={styles.employeeBadge}>
            <EmployeeBadge />
          </div>
          <img id={'letterMask'} className={styles.letterMask} src={letterMask} alt="" />
          <img id={'letterMask', 'letterTriangle'} className={styles.letterTriangle} src={letterTriangle} alt="" />
        </div>
      </div>
      <div id={'scrollAnim'} className={styles.scrollAnim}>
        {(isShowOpeningAnimation) && (
          <ScrollAnim />
        )}
      </div>
    </div>
  )
}

export default LetterFlyAnim