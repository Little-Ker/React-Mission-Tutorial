import React, {
  useCallback
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

  const handleClose = useCallback(() => {
    navigate('/Home', { replace: true })
  }, [])
    
  return (
    <div>
      <Dialog
        open={true}
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