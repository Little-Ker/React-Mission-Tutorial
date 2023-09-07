import React, {
  useEffect, useCallback
} from 'react'
import {
  HashRouter as Router, Route, Routes, useNavigate
} from 'react-router-dom'
import {
  useDispatch 
} from 'react-redux'
import './App.sass'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import AnimatedCursor from 'react-animated-cursor'
import Home from './view/home'
import AddressBookView from './view/addressBookView/AddressBookView'
import MissionView from './view/missionView'
import ResourceView from './view/resourceView'
import AnimationView from './view/animationView'
import IntroView from './view/introView'
import PersonalWebsiteView from './view/personalWebsiteView'

import {
  changeTransparentOverlay 
} from './redux/showTransparentOverlaySlice'
import {
  showOpenAnim 
} from './redux/showOpenAnimSlice'

const RouterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const hideLinkAnim = useCallback(() => {
    dispatch(changeTransparentOverlay(true))
    let tl = gsap.timeline()
    tl.to('#personalWebsite',{
      duration: 0,
      transform: 'scale(0.2)',
      visibility: 'hidden',
      onComplete: () => {
        dispatch(changeTransparentOverlay(false))
        tl.kill()
        tl = null
      },
    })
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('isOpeningAnimationFinish') || localStorage.getItem('isOpeningAnimationFinish') === 'undefined') {
      hideLinkAnim()
      dispatch(showOpenAnim(true))
      navigate('/Animation', { replace: true })
      return
    }
    if (!localStorage.getItem('isGetPersonalWebsiteMission') || localStorage.getItem('isGetPersonalWebsiteMission') === 'undefined') {
      hideLinkAnim()
      dispatch(showOpenAnim(false))
      navigate('/Intro', { replace: true })
      return
    }
    dispatch(showOpenAnim(false))
    navigate('/Animation', { replace: true })
  }, [])

  return (
    <Routes>
      <Route path="Home" element={<Home/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/*" element={<Home/>}>
        <Route path="AddressBook" element={<AddressBookView />} />
        <Route path="Mission" element={<MissionView />} />
        <Route path="Resource" element={<ResourceView />} />
        <Route path="PersonalWebsite" element={<PersonalWebsiteView />} />
        <Route path="Animation" element={<AnimationView />} />
        <Route path="Intro" element={<IntroView />} />
      </Route>
    </Routes>
  )
}
 
function App() {
  return (
    <div className="App">
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
          hasBlendMode={false}
        />
      </div>
      <Router>
        <RouterPage />
      </Router>
    </div>
  )
}
 
export default App