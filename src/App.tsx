import toast, { Toaster } from 'react-hot-toast'
import './App.css'
import Profile from './sections/Profile/Profile'
import { useEffect } from 'react'
import Projects from './sections/Projects/Projects'
import Jobs from './sections/Jobs/Jobs'
import { FaGithub } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function App() {
  useEffect(() => {
    toast.success('Bienvenido!', {
      icon: '👋',
      duration: 5000,
      position: 'top-right'
    })
  }, [])

  return (
    <div className='principalContainer'>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Profile />
      <Projects />
      <Jobs />
      <div className='githubIcon'>
        <IconContext.Provider value={{ color: '#e0e0e0', size: '60px' }}>
          <FaGithub className='thumbDown' onClick={() => window.open('https://github.com/Duvier-Reinosa')} />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default App
