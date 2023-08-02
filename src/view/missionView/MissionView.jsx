import React, {
  useCallback, useState, useEffect
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
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    if (location.search === '?Mission') {
      setOpen(true)
    }
  }, [location?.search])
      
  const handleClose = useCallback(() => {
    navigate('/home', { replace: true })
    setOpen(false)
  }, [])
 
  return (
    <Dialog
      open={open}
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