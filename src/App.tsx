import { Toaster } from 'react-hot-toast'
import './App.css'
import Profile from './sections/Profile/Profile'

function App() {

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
