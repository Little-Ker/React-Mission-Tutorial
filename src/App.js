import React, {
  useEffect 
} from 'react'
import {
  BrowserRouter as Router, Route, Routes, useNavigate
} from 'react-router-dom'
import './App.sass'
import 'aos/dist/aos.css'
import AnimatedCursor from 'react-animated-cursor'
import ViewA from './view/ViewA'
import ViewB from './view/ViewB'
import Home from './view/home'

const RouterPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home?Intro', { replace: true })
  }, [])

  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="home" element={<Home/>} />
      <Route exact path="viewA" element={<ViewA/>} />
      <Route exact path="viewB" element={<ViewB/>} />
      <Route path="*" element={<ViewA/>} />
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
        />
      </div>
      <Router>
        <RouterPage />
      </Router>
    </div>
  )
}
 
export default App