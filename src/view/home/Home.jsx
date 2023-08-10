import React, {
  useEffect
} from 'react'
import {
  useDispatch, useSelector
} from 'react-redux'
import {
  Outlet
} from 'react-router-dom'
import BgCircle from '../../component/home/bgCircle'
import MainView from '../mainView'
import TransparentOverlay from '../../component/home/transparentOverlay'

import {
  fetchFrontMissionData 
} from '../../redux/frontMissionAxiosSlice'
import {
  fetchTargetData 
} from '../../redux/personalWebsiteAxiosSlice'

const Home = () => {
  const dispatch = useDispatch()
  const isOpenOverlay = useSelector(state => state.showOpenAnim.isOpen)

  useEffect(() => {
    dispatch(fetchFrontMissionData())
    dispatch(fetchTargetData())
  }, [dispatch])

  return (
    <div style={{height: (isOpenOverlay) ? 'calc(100vh + 550px)' : '100vh'}}>
      <BgCircle />
      <MainView />
      <Outlet />
      <TransparentOverlay />
    </div>
  )
}

export default Home