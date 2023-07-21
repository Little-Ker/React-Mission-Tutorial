import React, {
  useCallback, useEffect, useState
} from 'react'
import AOS from 'aos'
import gsap from 'gsap'
import AddIcon from '@mui/icons-material/Add'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BasicButton from '../../../component/all/basicButton'
import ShadowButton from '../../../component/all/shadowButton'
import data from '../data'
import styles from './addressBook.module.sass'

function AddressBook() {
  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])

  const [lineData, setLineData] = useState({})

  const onClickUrlFn = useCallback((id) => {
    window.open(`https://line.me/ti/p/~${id}`)
  }, [])

  const resetAnim = () => {
    let tl = gsap.timeline()
    tl.to('#overlay',{
      duration: 0,
      opacity: 0,
      display: 'none',
    }).to('#line',{
      duration: 0,
      right: '-80%',
    })
  }
  
  const onClickOpenFn = useCallback((name) => {
    const findData = data.list.find(cur => (cur.name === name))
    setLineData(findData)

    resetAnim()
    let tl = gsap.timeline()
    tl.to('#overlay',{
      duration: .1,
      opacity: 1,
      display: 'block',
    }).to('#line',{
      duration: .2,
      right: 0,
    })
  }, [])

  const onClickCloseFn = useCallback(() => {
    let tl = gsap.timeline()
    tl.to('#line',{
      duration: .2,
      right: '-80%',
    }).to('#overlay',{
      duration: .1,
      opacity: 0,
      display: 'none',
    })
  }, [])
  
  return (
    <div className={styles.addressBook}>
      <p className={styles.title}>{'- 新手求救召喚石 -'}</p>
      <div className={styles.addressList}>
        {data.list.map((cur, index) => (
          <div key={cur.name} className={styles.address} data-aos="fade-right" data-aos-delay={150 * index}>
            <ShadowButton
              text={cur.name}
              icon={<AddIcon />}
              onClickFn={() => onClickOpenFn(cur.name)}
            />
          </div>
        ))}
      </div>
      <div id={'overlay'} className={styles.overlay} onClick={onClickCloseFn}>
        <div id={'line'} className={styles.line} onClick={(e)=>{e.stopPropagation()}}>
          <div className={styles.header}>
            <BasicButton
              icon={<ArrowForwardIcon fontSize={'small'} />}
              style={{
                width: '40px',
                height: '38px',
              }}
              onClickFn={onClickCloseFn}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.text}>{`LINE @ ${lineData?.name}`}</p>
            <img src={lineData?.qrCode} alt="" />
            <BasicButton
              text={'新增好友'}
              style={{
                width: '180px',
                height: '40px',
              }}
              onClickFn={() => onClickUrlFn(lineData?.id)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
      
export default AddressBook