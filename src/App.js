import React from 'react'
import {
  BrowserRouter as Router, Route, Routes 
} from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar/Navbar'
import ViewA from './view/ViewA'
import ViewB from './view/ViewB'
 
const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ViewA/>} />
      <Route exact path="viewA" element={<ViewA/>} />
      <Route exact path="viewB" element={<ViewB/>} />
      <Route path="*" element={<ViewA/>} />
    </Routes>
  )
}
 
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <RouterPage />
      </Router>
    </div>
  )
}
 
export default App