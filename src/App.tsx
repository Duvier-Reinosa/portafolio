import toast, { Toaster } from 'react-hot-toast'
import './App.css'
import Profile from './sections/Profile/Profile'
import { useEffect } from 'react'

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
    </div>
  )
}

export default App
