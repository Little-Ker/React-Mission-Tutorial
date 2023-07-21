import React, {
  useCallback, useState, useEffect
} from 'react'
import {
  useNavigate 
} from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import CloseIcon from '@mui/icons-material/Close'
import NoteBlock from '../../component/all/noteBlock'
import ResourceList from '../../component/resourceList'
    
function ResourceView() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (location.search === '?Resource') {
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
        title={'參考資源'}
        content={<ResourceList />}
        isFooter
        isCircleDecoration
        icon={<CloseIcon />}
        iconFn={handleClose}
      />
    </Dialog>
  )
}
    
export default ResourceView