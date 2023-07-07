import './App.css'
import AboutAIT from './Components/AboutAIT'
import Branches from './Components/Branches'
import Contact from './Components/Contact'
import Courses from './Components/Courses'
import Header from './Components/Header'

function App() {

  return (
    <div className='flex flex-col'>
      <Header/>
      <Courses/>
      <Branches/>
      <AboutAIT/>
      <Contact/>
    </div>
  )
}

export default App
