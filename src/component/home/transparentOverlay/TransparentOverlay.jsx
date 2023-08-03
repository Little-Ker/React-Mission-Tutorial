import React from 'react'
import {
  useSelector
} from 'react-redux'
import Backdrop from '@mui/material/Backdrop'
  
function TransparentOverlay() {
  const isOpenOverlay = useSelector(state => state.showTransparentOverlay.isOpen)

  return (
    <Backdrop
      sx={{
        backgroundColor: 'transparent',
        zIndex: 999,
      }}
      open={isOpenOverlay}
    >
    </Backdrop>
  )
}

export default TransparentOverlay