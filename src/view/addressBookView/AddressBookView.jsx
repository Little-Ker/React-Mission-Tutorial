import React, {
  useCallback
} from 'react'
import {
  useNavigate
} from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import CloseIcon from '@mui/icons-material/Close'
import NoteBlock from '../../component/all/noteBlock'
import AddressBook from '../../component/addressBookView/addressBook'
// import Slide from '@mui/material/Slide'

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />
// })
      
function AddressBookView() {
  const navigate = useNavigate()
  
  const handleClose = useCallback(() => {
    navigate('/home', { replace: true })
  }, [])
      
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      // TransitionComponent={Transition}
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