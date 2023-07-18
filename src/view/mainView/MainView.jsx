import React from 'react'
import {
  format 
} from 'date-fns'
import Navbar from '../../component/mainView/navbar'
import MemberInfo from '../../component/mainView/memberInfo'
import styles from './mainView.module.sass'

const monthList = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
}
  
const MainView = () => {
  const todayYear = format(new Date(), 'yyyy')
  const todayMonth = format(new Date(), 'MM')
  const todayDate = format(new Date(), 'dd')

  return (
    <div className={styles.mainView}>
      <div className={styles.header}>
        <p>Yile Web Frontend</p>
        <p>{`${monthList[todayMonth]} ${todayDate}, ${todayYear}`}</p>
      </div>
      <Navbar />
      <div className={styles.content}>
        <MemberInfo />
      </div>
    </div>
  )
}
  
export default MainView