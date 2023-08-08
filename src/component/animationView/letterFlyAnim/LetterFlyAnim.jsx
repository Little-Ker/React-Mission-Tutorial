import React, {
  useEffect, useRef, useState
} from 'react'
import gsap from 'gsap'
import EmployeeBadge from '../employeeBadge'
import {
  Controller, Scene 
} from 'react-scrollmagic'
import {
  Tween
} from 'react-gsap'
import ScrollAnim from '../scrollAnim'
import styles from './letterFlyAnim.module.sass'

import desktop from '../../../assets/image/anim/desktop.svg'
import letter from '../../../assets/image/anim/letter.svg'
import coffee from '../../../assets/image/anim/coffee.svg'
import book from '../../../assets/image/anim/book.svg'
import window from '../../../assets/image/anim/window.svg'
import letterMask from '../../../assets/image/anim/letterMask.png'
import letterTriangle from '../../../assets/image/anim/letterTriangle.png'

function LetterFlyAnim() {
  const triggerRef = useRef(null)
  const [trigger, setTrigger] = useState(triggerRef.current)

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

  const resetAnim = () => {
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

  useEffect(() => {
    resetAnim()
  }, [])

  return (
    <div className={styles.letterFlyAnim}>
      <div className={styles.scene}>
        <div className={styles.line} />
        <img className={styles.book} src={book} alt="" />
        <img className={styles.window} src={window} alt="" />
        <img className={styles.desktop} src={desktop} alt="" />
        <Controller>
          <div className={styles.screen}>
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
        <ScrollAnim />
      </div> 
    </div>
  )
}

export default LetterFlyAnim