import React, {
  useCallback, useState, useEffect
} from 'react'
import {
  useNavigate 
} from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import CloseIcon from '@mui/icons-material/Close'
import NoteBlock from '../../component/all/noteBlock'

import PersonalWebsite from '../../component/missionView/personalWebsite'

function PersonalWebsiteView() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (location.search === '?PersonalWebsite') {
      setOpen(true)
    }
  }, [location?.search])
      
  const handleClose = useCallback(() => {
    navigate('/home', { replace: true })
    setOpen(false)
  }, [])
    
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: {
          backgroundColor: 'transparent',
          maxWidth: 'none',
        }} }
      >
        <NoteBlock
          title={'新人任務'}
          content={<PersonalWebsite />}
          isFooter
          isCircleDecoration
          icon={<CloseIcon />}
          iconFn={handleClose}
        />
      </Dialog>
    </div>
  )
}
      
export default PersonalWebsiteView