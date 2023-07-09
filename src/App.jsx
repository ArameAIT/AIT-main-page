import { useState } from 'react'
import './App.css'
import AboutAIT from './Components/AboutAIT'
import Branches from './Components/Branches'
import Contact from './Components/Contact'
import Courses from './Components/Courses'
import Header from './Components/Header'
import LangContext from './Context/LangContext'

function App() {
  const [lang, setLang] = useState("English")

  const forLang = {
    lang,
    setLang
  }

  return (
    <div className='flex flex-col'>
      <LangContext.Provider value={forLang}>
        <Header />
        <Courses />
        <Branches />
        <AboutAIT />
        <Contact />
      </LangContext.Provider>
    </div>
  )
}

export default App
