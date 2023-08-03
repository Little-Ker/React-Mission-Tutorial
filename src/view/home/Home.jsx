import React from 'react'
import BgCircle from '../../component/home/bgCircle'
import IntroView from '../introView'
import MainView from '../mainView'
import ResourceView from '../resourceView'
import AddressBookView from '../addressBookView'
import PersonalWebsiteView from '../personalWebsiteView'
import MissionView from '../missionView'
import TransparentOverlay from '../../component/home/transparentOverlay'

const Home = () => {
  return (
    <div>
      <BgCircle />
      <MainView />
      <IntroView />
      <ResourceView />
      <AddressBookView />
      <PersonalWebsiteView />
      <MissionView />
      <TransparentOverlay />
    </div>
  )
}

export default Home