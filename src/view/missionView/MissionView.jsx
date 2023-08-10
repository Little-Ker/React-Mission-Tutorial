import React, {
  useCallback
} from 'react'
import {
  useNavigate 
} from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import CloseIcon from '@mui/icons-material/Close'
import NoteBlock from '../../component/all/noteBlock'
import MissionList from '../../component/missionView/missionList'
      
function MissionView() {
  const navigate = useNavigate()

  const handleClose = useCallback(() => {
    navigate('/Home', { replace: true })
  }, [])
 
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      PaperProps={{ style: {
        backgroundColor: 'transparent',
        maxWidth: 'none',
      }} }
    >
      <NoteBlock
        title={'前端任務'}
        content={<MissionList />}
        isFooter
        isCircleDecoration
        icon={<CloseIcon />}
        iconFn={handleClose}
      />
    </Dialog>
  )
}
      
export default MissionView