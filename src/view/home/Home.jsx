import React from 'react'
import BgCircle from '../../component/home/bgCircle'
import IntroView from '../introView'
import MainView from '../mainView'
import ResourceView from '../resourceView'
import AddressBookView from '../addressBookView'

const Home = () => {
  return (
    <div>
      <BgCircle />
      <MainView />
      <IntroView />
      <ResourceView />
      <AddressBookView />
    </div>
  )
}

export default Home