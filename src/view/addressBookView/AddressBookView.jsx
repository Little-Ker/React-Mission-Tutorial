import React, {
  useCallback, useState, useEffect
} from 'react'
import {
  useNavigate 
} from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import CloseIcon from '@mui/icons-material/Close'
import NoteBlock from '../../component/all/noteBlock'
import AddressBook from '../../component/addressBookView/addressBook'
      
function AddressBookView() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    if (location.search === '?AddressBook') {
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
        borderRadius: '30px',
      }} }
    >
      <NoteBlock
        title={'通訊錄'}
        content={<AddressBook />}
        isFooter
        style={{
          borderRadius: '30px',
        }}
        icon={<CloseIcon />}
        iconFn={handleClose}
      />
    </Dialog>
  )
}
      
export default AddressBookView