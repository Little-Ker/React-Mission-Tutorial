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

function MemberInfoSetting(props) {
  const { onClose, open } = props
  const photoTest = 'https://cdn4.buysellads.net/uu/1/127419/1670531697-AdobeTeams.jpg'

  const [imgSrc, setImgSrc] = useState(photoTest)

  const onFileUpload = useCallback((event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', (e) => {
      setImgSrc(reader.result)
      const data = e.target.result
      const image = new Image()
      image.src = data
    }, false)
    if (file) {
      reader.readAsDataURL(file)
    }
  }, [ ])

  const handleClose = () => {
    onClose(false)
  }

  const photoSetting = useCallback(() => {
    return (
      <div className={styles.photoSetting}>
        <div className={styles.photo}>
          <img className={'img-fit'} src={imgSrc} alt="" />
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
    )
  }, [imgSrc])

  const InfoSetting = useCallback(() => {
    const [name, setName] = useState('Vivi')
    const [mail, setMail] = useState('Vivi@gmail.com')
    const [work, setWork] = useState('網頁前端工程師')

    const handleSubmit = () => {
      console.log('SubmitData:', name, mail, work, imgSrc)
      handleClose()
    }

    return (
      <div className={styles.infoSetting}>
        <div className={styles.content}>
          <Card content={photoSetting()} />
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
  }, [imgSrc])

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
}

export default MemberInfoSetting