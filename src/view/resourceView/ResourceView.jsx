import React, {
  useCallback
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