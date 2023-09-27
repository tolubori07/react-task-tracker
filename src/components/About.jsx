import { FontAwesomeIcon } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div><h4>Verison 1.0.0</h4>
         <Link to="/">Home <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> </Link>
    </div>
   
  )
}

export default About
