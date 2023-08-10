import React, {
  useState, useCallback
} from 'react'
import {
  useNavigate 
} from 'react-router-dom'
import {
  useDispatch 
} from 'react-redux'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import styles from './employeeBadge.module.sass'

import {
  showOpenAnim 
} from '../../../redux/showOpenAnimSlice'
  
import photo from '../../../assets/image/anim/photo.svg'
import logo from '../../../assets/image/anim/logo.png'
  
function EmployeeBadge() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState('')

  const onSendName = useCallback(() => {
    localStorage.setItem('isOpeningAnimationFinish', true)
    const useData = {
      photo: '',
      name: name || '',
      mail: '',
      work: '網頁前端工程師',
    }
    localStorage.setItem('memberData', JSON.stringify(useData))

    navigate('/Intro', { replace: true })
    dispatch(showOpenAnim(false))
  }, [name])

  return (
    <div className={styles.employeeBadge}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.companyName}>{'YILE'}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.employee}>
          <p className={styles.title}>{'網頁前端工程師'}</p>
          <p className={styles.subTitle}>{'Front-end Engineer'}</p>
          <div className={styles.nameInput}>
            <input type="text" value={name} onChange={v => setName(v.target.value)} placeholder={'請輸入你的名字...'} />
            <a disabled className={styles.button} onClick={onSendName}>
              <ArrowForwardIcon />
            </a>
          </div>
        </div>
        <img src={photo} alt="" />
      </div>
    </div>
  )
}
  
export default EmployeeBadge