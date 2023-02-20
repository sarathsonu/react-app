import { useState } from 'react'

import './App.css'
import Heading from './compounts/heading'
import Addimg from './compounts/addimg'
import AddBio from './compounts/addbio'
import Next from './compounts/NextButton'
import EndTxt from './compounts/endtext'
function App() {
 
  return (
    <div className="App">
      <Heading/>
      <Addimg/>
      <AddBio/>
      <Next/>
      <br/>
      <EndTxt/>
    </div>
  )
}

export default App
