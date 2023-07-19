import React, {
  useCallback, useMemo, useState, useEffect
} from 'react'
import {
  useLocation 
} from 'react-router-dom'
import AOS from 'aos'
import Dialog from '@mui/material/Dialog'
import NoteBlock from '../../component/all/noteBlock'
import ShadowButton from '../../component/all/shadowButton'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import clsx from 'clsx'
import Typewriter from 'typewriter-effect'
import Universe from '../../component/introView/universe'
import Target from '../../component/introView/target'
import styles from './introView.module.sass'
  
import welcome from '../../assets/image/intro/welcome.png'
import react from '../../assets/image/intro/react.png'
  
function IntroView() {
  const location = useLocation()

  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (location.search === '?Intro') {
      setOpen(true)
    }
  }, [location?.search])
  
  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])
  
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])
  
  const handleNext = useCallback(() => {
    setStep((prev) => {
      if ((prev + 1) > 3) return prev
      return prev + 1
    })
  }, [])
  
  const PreviewB = useCallback(() => {
    return (
      <div className={clsx(styles.intro, styles.previewB)}>
        <div className={styles.leftBlock}>
          <img data-aos="zoom-in" src={react} className={styles.photo} alt="" />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.content}>
            <p>{'因此 希望你/妳使用 React'}</p>
            <p>{'合併接下來提及的工具與套件'}</p>
            <p>{'製作一個屬於你/妳的「'}
              <span className={styles.keyword}>
                  &nbsp;{'自我介紹網頁'}&nbsp;
              </span>
              {'」'}</p>
            <p>{'順便親近一下你未來吃飯的傢伙 - '}
              <span className={styles.keyword}>
                {' React '}
              </span>
            </p>
          </div>
          <div className={styles.nextBtn}>
            <ShadowButton 
              text={'Next'}
              width={'180px'}
              icon={<KeyboardArrowRightIcon />}
              onClickFn={handleNext}
            />
          </div>
        </div>
      </div>
    )
  }, [])
  
  const PreviewA = useCallback(() => {
    return (
      <div className={styles.intro}>
        <div className={styles.leftBlock}>
          <img data-aos="zoom-in" src={welcome} className={styles.photo} alt="" />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.content}>
            <div className={styles.introText}>
              <p>{'在通過'}</p>
              <div className={styles.keyword}>
                  &nbsp;{' 三個月試用期 '}&nbsp;
              </div>
              <p>{'後'}</p>
            </div>
            <p>{'會有一個面對所有 RD 的新人介紹會'}</p>
            <p>{'正式的向所有 RD 夥伴介紹你/妳自己'}</p>
          </div>
          <div className={styles.nextBtn}>
            <ShadowButton 
              text={'Next'}
              width={'180px'}
              icon={<KeyboardArrowRightIcon />}
              onClickFn={handleNext}
            />
          </div>
        </div>
      </div>
    )
  }, [])
  
  const Introduce = useCallback(() => {
    return (
      <div className={styles.intro}>
        <div data-aos="zoom-in" className={clsx('animate__animated', styles.leftBlock)}>
          <Universe />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.content}>
            <p>{'首先歡迎來到'}</p>
            <div className={styles.introText}>
              <div className={styles.keyword}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1800)
                      .typeString('弈樂網頁前端團隊')
                      .start()
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.nextBtn}>
            <ShadowButton 
              text={'Next'}
              width={'180px'}
              icon={<KeyboardArrowRightIcon />}
              onClickFn={handleNext}
            />
          </div>
        </div>
      </div>
    )
  }, [])
  
  const showWindow = useMemo(() => {
    if(step === 0) return (<Introduce />)
    if(step === 1) return (<PreviewA />)
    if(step === 2) return (<PreviewB />)
    if(step >= 3) return (<Target handleClose={handleClose}/>)
  }, [step])
  
  const noteTitle = useMemo(() => {
    if(step === 0) return 'Intro'
    if(step === 3) return 'Target'
    return 'Preview'
  }, [step])
    
  return (
    <Dialog
      open={open}
      PaperProps={{ style: {
        backgroundColor: 'transparent',
        maxWidth: 'none',
      }} }
      className={styles.memberInfoSetting}
    >
      <NoteBlock
        title={noteTitle}
        content={showWindow}
        isFooter
        isCircleDecoration
      />
    </Dialog>
  )
}
  
export default IntroView