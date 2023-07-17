import React, {
  useMemo, useState
} from 'react'
import styles from './memberInfo.module.sass'
import NoteBlock from '../../../component/all/noteBlock/NoteBlock'
import IconButton from '../../../component/all/iconButton/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'
import MemberInfoSetting from '../../../component/mainView/memberInfoSetting/MemberInfoSetting'

export default function MemberInfo() {
  const photoTest = 'https://cdn4.buysellads.net/uu/1/127419/1670531697-AdobeTeams.jpg'
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const member = useMemo(() => {
    return (
      <div className={styles.member}>
        <div className={styles.info}>
          <div className={styles.photo}>
            <img src={photoTest} alt="" /> 
          </div>
          <p className={styles.name}>Vivi</p>
        </div>
        <IconButton
          icon={<SettingsIcon />}
          tipText={'個人資訊設定'}
          onClickFn={handleClickOpen}
        />
      </div>)
  }, [])

  return (
    <div className={styles.memberInfo}>
      <NoteBlock
        title={'個人資訊'}
        content={member}
      />
      <MemberInfoSetting
        onClose={handleClose}
        open={open}
      />
    </div>
  )
}