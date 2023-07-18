import React from 'react'
import BgCircle from '../../component/home/bgCircle'
import IntroView from '../introView'
import MainView from '../mainView'

const Home = () => {
  return (
    <div>
      <BgCircle />
      <MainView />
      <IntroView />
    </div>
  )
}

export default Home