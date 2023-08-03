import React, {
  useCallback, useEffect, useState, useMemo
} from 'react'
import {
  useSelector 
} from 'react-redux'
import AOS from 'aos'
import CheckBox from '../../../component/all/checkBox'
import ProgressBar from '../../../component/all/progressBar'
import styles from './personalWebsite.module.sass'

import react from '../../../assets/image/intro/react.png'

function PersonalWebsite() {
  const targetDate = useSelector(state => (state.personalWebsiteData.missionData))

  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])

  const [checkList, setCheckList] = useState([])
  
  const onChangeCheck = useCallback((index) => {
    setCheckList((prev) => {
      prev[index] = !prev[index]
      localStorage.setItem('personalWebsiteMission', JSON.stringify([...prev]))
      return [...prev]
    })  
  }, [])

  const finishCount = useMemo(() => {
    const filterData = checkList.filter(cur => cur === true)
    return filterData.length
  }, [checkList])

  useEffect(() => {
    if (!localStorage.getItem('personalWebsiteMission') || localStorage.getItem('personalWebsiteMission') === 'undefined') {
      const check = targetDate.map(() => false)
      setCheckList(check)
      localStorage.setItem('personalWebsiteMission', JSON.stringify(check))
      return
    }
    setCheckList(JSON.parse(localStorage.getItem('personalWebsiteMission')))
  }, [])

  return (
    <div className={styles.personalWebsite}>
      <div className={styles.mission}>
        <div>
          <p className={styles.missionTitle}>{'製作一個涵蓋但不限於以下內容的自我介紹網頁'}</p>
          {targetDate.map((item, index) => (
            <div key={item.title} className={styles.checkBox} data-aos="fade-right" data-aos-duration="1000" data-aos-delay={300 + (index * 150)}>
              <CheckBox
                check={checkList[index]}
                setCheck={() => onChangeCheck(index)}
                text={item.title}
                isCheckChangeColor
                style={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}
              />
              <div className={styles.content}>
                {item.content.map(cur => (
                  <div key={cur} className={styles.subTitle}>{cur}</div>
                ))}
              </div>
            </div>
          ))}  
        </div>
        <img src={react} alt="" />
      </div>
      <ProgressBar
        finishCount={finishCount}
        totalCount={targetDate.length}
      />
    </div>
  )
}
      
export default PersonalWebsite