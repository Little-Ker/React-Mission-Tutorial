import React, {
  useMemo, useState, useEffect
} from 'react'
import {
  useNavigate 
} from 'react-router-dom'
import styles from './memberInfo.module.sass'
import NoteBlock from '../../../component/all/noteBlock/NoteBlock'
import IconButton from '../../../component/all/iconButton/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'
import MemberInfoSetting from '../../../component/mainView/memberInfoSetting/MemberInfoSetting'

import noPhoto from '../../../assets/image/memberInfo/noImage.jpg'

export default function MemberInfo() {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

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
  const [memberData, setMemberData] = useState(defaultMemberData)

  useEffect(() => {
    const member = JSON.parse(localStorage.getItem('memberData'))
    setMemberData(member)
  }, [localStorage.getItem('memberData')])

  const handleClickOpen = () => {
    navigate('/home?MemberInfo', { replace: true })
  }

  useEffect(() => {
    if (location.search === '?MemberInfo') {
      setOpen(true)
    }
  }, [location?.search])

  const handleClose = () => {
    navigate('/home', { replace: true })
    setOpen(false)
  }

  const member = useMemo(() => {
    return (
      <div className={styles.member}>
        <div className={styles.info}>
          <div className={styles.photo}>
            <img src={(memberData?.photo === '') ? noPhoto : memberData?.photo} alt="" />
          </div>
          <p className={styles.name}>{memberData?.name || ''}</p>
        </div>
        <IconButton
          icon={<SettingsIcon />}
          tipText={'個人資訊設定'}
          onClickFn={handleClickOpen}
        />
      </div>)
  }, [memberData])

  return (
    <div className={styles.memberInfo}>
      <NoteBlock
        title={'個人資訊'}
        content={member}
      />
      {(open) && (
        <MemberInfoSetting
          onClose={handleClose}
          open={open}
          memberData={memberData}
          setMemberData={setMemberData}
        />
      )}
    </div>
  )
}
