import React from 'react'
// import "./App.css"
import {Routes, Route} from 'react-router-dom'
import Valentines from './components/features/Valentines'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='' element={<Valentines/>}/>
    </Routes>
    </>
    
  )
}

export default App