import React, {
  useCallback, useEffect, useState, useMemo
} from 'react'
import AOS from 'aos'
import CheckBox from '../../../component/all/checkBox'
import ProgressBar from '../../../component/all/progressBar'
import data from '../data'
import styles from './personalWebsite.module.sass'

import react from '../../../assets/image/intro/react.png'

function PersonalWebsite() {
  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])

  const [checkList, setCheckList] = useState([])
  
  const onChangeCheck = useCallback((index) => {
    setCheckList((prev) => {
      prev[index] = !prev[index]
      return [...prev]
    })
  }, [])

  const finishCount = useMemo(() => {
    const filterData = checkList.filter(cur => cur === true)
    return filterData.length
  }, [checkList])

  useEffect(() => {
    const check = data.target.map(() => false)
    setCheckList(check)
  }, [])

  return (
    <div className={styles.personalWebsite}>
      <div className={styles.mission}>
        <div>
          <p className={styles.missionTitle}>{'製作一個涵蓋但不限於以下內容的自我介紹網頁'}</p>
          {checkList.map((item, index) => (
            <div key={data.target[index].title} className={styles.checkBox} data-aos="fade-right" data-aos-duration="1000" data-aos-delay={300 + (index * 150)}>
              <CheckBox
                check={item}
                setCheck={() => onChangeCheck(index)}
                text={data.target[index].title}
                isCheckChangeColor
                style={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}
              />
              <div className={styles.content}>
                {data.target[index].content.map(cur => (
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
        totalCount={data.target.length}
      />
    </div>
  )
}
      
export default PersonalWebsite