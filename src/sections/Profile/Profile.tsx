import { IconContext } from 'react-icons';
import './profile.css';
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import CvButton from '../../components/cvButton/CvButton';




function Profile() {

  const handleEmail = () => {
    window.open('mailto:duvierreinosa@gmail.com');
  }

  const handleLinkedin = () => {
    window.open('https://www.linkedin.com/in/duvier-reinosa-8a5ba918b/');
  }

  return (
    <div className='profileContainer'>
      <h1>Duvier Reinosa</h1>
      <span>Full Stack and Mobile developer</span>
      <div className='networksContainer'>
        <IconContext.Provider value={{ color: '#e0e0e0', size: '20px' }}>
          <SiGmail onClick={handleEmail} className='networkIcon' />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#e0e0e0', size: '20px' }}>
          <FaLinkedin onClick={handleLinkedin} className='networkIcon' />
        </IconContext.Provider>
      </div>
      <CvButton />
    </div>
  );
}

export default Profile;