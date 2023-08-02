import React, {
  useCallback, useState
} from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import NoteBlock from '../../../component/all/noteBlock/NoteBlock'
import CloseIcon from '@mui/icons-material/Close'
import Card from '../../../component/all/card/Card'
import ShadowButton from '../../../component/all/shadowButton/ShadowButton'
import TextField from '../../../component/all/textField/TextField'
import Button from '@mui/material/Button'
import styles from './memberInfoSetting.module.sass'

import noPhoto from '../../../assets/image/memberInfo/noImage.jpg'

function MemberInfoSetting(props) {
  const { onClose, open, memberData, setMemberData } = props

  const handleClose = useCallback(() => {
    onClose(false)
  }, [])

  const InfoSetting = useCallback(() => {
    const [name, setName] = useState(memberData?.name || '')
    const [mail, setMail] = useState(memberData?.mail || '')
    const [work, setWork] = useState(memberData?.work || '')
    const [imgSrc, setImgSrc] = useState(memberData?.photo || '')

    const onFileUpload = (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.addEventListener('load', (e) => {
        setImgSrc(reader.result)
        const data = e.target.result
        const image = new Image()
        image.src = data
      }, false)
      if (file) reader.readAsDataURL(file)
    }

    const handleSubmit = () => {
      const newMemberData = {
        photo: imgSrc,
        name: name,
        mail: mail,
        work: work,
      }
      setMemberData(newMemberData)
      localStorage.setItem('memberData', JSON.stringify(newMemberData))
      handleClose()
    }

    return (
      <div className={styles.infoSetting}>
        <div className={styles.content}>
          <Card content={
            <div className={styles.photoSetting}>
              <div className={styles.photo}>
                <img className={'img-fit'} src={(imgSrc === '') ? noPhoto : imgSrc} alt="" />
              </div>
              <a>
                <Button
                  className={styles.uploadBtn}
                  type="file"
                  component="label"
                  sx={{ ':hover': { cursor: 'none' } }}
                >
                  {'上傳圖片'}
                  <input
                    type={'file'}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={onFileUpload}
                  />
                </Button>
              </a>
            </div>
          } />
          <div className={styles.inputSetting}>
            <TextField label={'名稱'} value={name} setValue={setName} />
            <TextField label={'信箱'}  value={mail} setValue={setMail} />
            <TextField label={'職稱'} value={work} setValue={setWork} />
          </div>
        </div>
        <div className={styles.footer}>
          <ShadowButton 
            text={'確認修改'}
            width={'180px'}
            onClickFn={handleSubmit}
          />
        </div>
      </div>
    )
  }, [])

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{ style: {
        backgroundColor: 'transparent',
        maxWidth: 'none',
      }} }
      className={styles.memberInfoSetting}
    >
      <NoteBlock
        title={'個人資訊設定'}
        content={<InfoSetting />}
        icon={<CloseIcon />}
        iconFn={handleClose}
        isCircleDecoration
      />
    </Dialog>
  )
}

MemberInfoSetting.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  memberData: PropTypes.object,
  setMemberData: PropTypes.func,
}

MemberInfoSetting.defaultProps = {
  memberData: null,
  setMemberData: () => {},
}

export default MemberInfoSetting