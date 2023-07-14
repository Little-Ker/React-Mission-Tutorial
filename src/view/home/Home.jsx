import React, {
  useCallback, useState 
} from 'react'
import BasicButton from '../../component/all/basicButton/BasicButton'
import Card from '../../component/all/card/Card'
import BgCircle from '../../component/home/bgCircle/BgCircle'
import NoteBlock from '../../component/all/noteBlock/NoteBlock'
import CheckBox from '../../component/all/checkBox/CheckBox'
import Link from '../../component/all/link/Link'
import IconButton from '../../component/all/iconButton/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import MainView from '../mainView/MainView'

const Home = () => {
  return (
    <div>
      <BgCircle />
      <MainView />
    </div>
  )
}

export default Home